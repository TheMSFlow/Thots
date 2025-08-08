import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { GET_ALL_POSTS } from '../../graphql/queries/getPosts';
import { ADD_COMMENT } from '../../graphql/mutations/addComment';
import { GetAllPostsData, CommentNode } from '../../interfaces/posts';
import Send from '../buttons/Send';
import toast from 'react-hot-toast';

interface InputProps {
  postId: string;
}


const Input: React.FC<InputProps> = ({ postId }) => {
  const [text, setText] = useState('');
  const [addComment, { loading }] = useMutation(ADD_COMMENT);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;

    const newComment: CommentNode = {
      post_id: postId,
      comment: text.trim(),
      __typename: 'comments'
    };

    try {
      await addComment({
        variables: {
          postId,
          comment: text.trim(),
        },
        optimisticResponse: {
          insertIntocommentsCollection: {
            __typename: 'commentsInsertResponse',
            affectedCount: 1,
            records: [newComment],
          },
        },
        update: (cache, { data }) => {
          const existing = cache.readQuery<GetAllPostsData>({ query: GET_ALL_POSTS });
          if (!existing) return;

          const updatedPosts = existing.postsCollection.edges.map((edge) => {
            if (edge.node.post_id === postId) {
              return {
                ...edge,
                node: {
                  ...edge.node,
                  commentsCollection: {
                    ...edge.node.commentsCollection,
                    edges: [
                      ...edge.node.commentsCollection.edges,
                      { __typename: 'commentsEdge', node: newComment },
                    ],
                  },
                },
              };
            }
            return edge;
          });

          cache.writeQuery({
            query: GET_ALL_POSTS,
            data: {
              ...existing,
              postsCollection: {
                ...existing.postsCollection,
                edges: updatedPosts,
              },
            },
          });
        },
      });

      toast.success('Comment added');
      setText('');
    } catch (err) {
      console.error('Failed to submit comment:', err);
      toast.error(err instanceof Error ? err.message : 'Failed to add comment');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-4 py-4 px-4 rounded-lg bg-white border">
      <img src="/avatar-md.png" width={35} height={35} />
      <div className="flex-1">
        <input
          type="text"
          placeholder="What’s your thot?"
          className="w-full bg-input text-sm text-gray-800 rounded-full px-4 py-2 outline-none placeholder-gray-500"
          value={text}
          onChange={(e) => setText(e.target.value)}
          disabled={loading}
        />
      </div>
      <button type="submit">
        <Send />
      </button>
    </form>
  );
};

export default Input;
