import React from 'react'

interface UserInforProps {
  name?: string
  username?: string
  time?: string
}

const UserInfo: React.FC<UserInforProps> = ({name='Random User', username='randomuser', time='1m'}) => {
  return (
    <div className='flex flex-row gap-1'>
        <p className='font-medium text-primary'>{name}</p>
        <p className='text-secondary'>{username}</p>
        <p className='text-secondary'><span className='font-bold pr-[2px]'>.</span>{time}</p>
    </div>
  )
}

export default UserInfo