import React from 'react'

const UserInfo = ({name='Random User', username='randomuser', time='1m'}) => {
  return (
    <div className='flex flex-row gap-1'>
        <p className='font-medium text-primary'>{name}</p>
        <p className='text-secondary'>{username}</p>
        <p className='text-secondary'><span className='font-bold'>.</span>{time}</p>
    </div>
  )
}

export default UserInfo