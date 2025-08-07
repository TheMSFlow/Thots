import React from 'react'
import UserInfo from './UserInfo'

const Comments = () => {
  return (
    <div className='flex flex-row justify-start gap-4 items-start w-full pb-4'>
        <img src='/avatar-lg.png' width={40} height={40} />
        <div className='flex flex-col gap-0'>
        <UserInfo />
        <p>That’s amazing Michael. All the best!</p>
        </div>
    </div>
  )
}

export default Comments