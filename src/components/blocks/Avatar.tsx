import React from 'react'

interface AvatarProps {
  initials: string
}

const Avatar: React.FC<AvatarProps> = ({initials}) => {
  return (
    <div className='rounded-full bg-brand w-10 h-10 grid place-items-center'>
        <p className='text-xs leading-none'>{initials}</p>
    </div>
  )
}

export default Avatar