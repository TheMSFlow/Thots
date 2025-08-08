import React from 'react'
import UserInfo from './UserInfo'

interface CommentsProps {
  comments: string[] 
}

const Comments: React.FC<CommentsProps> = ({ comments = [] }) => {
  return (
    <>
      {comments.map((comment, idx) => (
        <div
          key={`comment-${idx}`}
          className='flex flex-row justify-start gap-4 items-start w-full pb-4'
        >
          <img src='/avatar-lg.png' width={40} height={40} />
          <div className='flex flex-col gap-0'>
            <UserInfo /> {/* Optionally pass random user data here */}
            <p>{comment}</p>
          </div>
        </div>
      ))}
    </>
  )
}

export default Comments
