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

    const postingToastId = toast.loading('Posting comment...');

    try {
      const { data } = await addComment({
        variables: {
          postId,
          comment: text.trim(),
        },
        update: (cache, { data }) => {
          if (!data?.insertIntocommentsCollection?.records?.[0]) return;

          const newComment = data.insertIntocommentsCollection.records[0];
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

      toast.dismiss(postingToastId);
      toast.success('Comment added');
      setText('');
    } catch (err: unknown) {
      toast.dismiss(postingToastId);

      let message = 'Something went wrong. Please try again.';
      if (err instanceof Error) {
        if (err.message.includes('Failed to fetch')) {
          message = "Couldn't post your comment, check your connection";
        } else if (err.message.includes('Network request failed')) {
          message = "Network error — please check your internet";
        } else if (err.message.includes('timeout')) {
          message = "The request took too long, try again";
        } else if (err.message.toLowerCase().includes('unauthorized')) {
          message = "You’re not authorized to do that";
        } else {
          const apolloError = err as any;
          if (apolloError.graphQLErrors?.length) {
            message = apolloError.graphQLErrors[0].message;
          }
        }
      }

      toast.error(message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-4 py-4 px-4 rounded-lg bg-white border -mt-1">
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
