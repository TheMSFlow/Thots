import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_COMMENT } from '../../graphql/mutations/addComment';
import Send from '../buttons/Send';

interface InputProps {
  postId: string;
}

const Input: React.FC<InputProps> = ({ postId }) => {
  const [text, setText] = useState('');
  const [addComment, { loading }] = useMutation(ADD_COMMENT);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;

    try {
      await addComment({
        variables: {
          postId,
          comment: text.trim(),
        },
        // Optional: Update UI optimistically (we'll improve this in later steps)
      });

      setText('');
    } catch (err) {
      console.error('Failed to submit comment:', err);
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
