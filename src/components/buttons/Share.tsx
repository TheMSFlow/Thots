import React from 'react'

type ShareProps = {
  onClick?: (e: React.MouseEvent) => void;
}

const Share: React.FC<ShareProps> = ({onClick}) => {
  return (
    <button onClick={onClick} className="bg-transparent hover:bg-hover active:bg-pressed active:scale-90 transition-all duration-200 ease-in-out grid place-items-center w-6 h-6 rounded-md">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M15.5 0.5L0.5 5.35294L6.23529 8L12.4118 3.58824L8 9.76471L10.6471 15.5L15.5 0.5Z" stroke="#687684" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    </button>
  )
}

export default Share
