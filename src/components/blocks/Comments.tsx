import React from 'react'
import UserInfo from './UserInfo'

interface CommentItem {
  id?: string
  comment: string
}

interface CommentsProps {
  comments: (string | CommentItem)[]
}

const Comments: React.FC<CommentsProps> = ({ comments = [] }) => {
  return (
    <>
      {comments.map((item, idx) => {
        const commentText = typeof item === 'string' ? item : item.comment
        return (
          <div
            key={typeof item === 'string' ? `comment-${idx}` : item.id || `comment-${idx}`}
            className='flex flex-row justify-start gap-4 items-start w-full py-4 mb-1'
          >
            <img src='/avatar-lg.png' width={40} height={40} />
            <div className='flex flex-col gap-0'>
              <UserInfo />
              <p>{commentText}</p>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default Comments
