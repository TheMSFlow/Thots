import React from 'react'
import Likes from '../buttons/Likes'
import Share from '../buttons/Share'
import Comment from '../buttons/Comment'

const Actions = () => {
  return (
    <div className='flex flex-row gap-12 pt-2 '>
        <div className='flex gap-1 justify-center items-center'>
            <Likes />
            <p className='text-secondary text-xs'>100</p>
        </div>
        <div className='flex gap-1 justify-center items-center'>
            <Comment />
            <p className='text-secondary text-xs'>0</p>
        </div>
        <div className='flex justify-center items-center'>
            <Share />
        </div>
        
        
    </div>
  )
}

export default Actions