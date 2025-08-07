import React from 'react'

const Comment: React.FC = () => {
  return (
    <button className="bg-transparent hover:bg-hover active:bg-pressed transition-all duration-200 ease-in-out grid place-items-center w-12 h-12 rounded-md">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M10.4 16.9556C10.8418 16.9556 11.2 17.3259 11.2 17.7827V21.0215C15.598 18.3656 18.2441 16.4868 19.8399 14.8464C20.7659 13.8945 21.2753 13.0826 21.5712 12.3085C21.8687 11.5302 22 10.6605 22 9.51169C22 5.40052 18.7764 2.06776 14.8 2.06776H9.2C5.22355 2.06776 2 5.40052 2 9.51169C2 13.6229 5.22355 16.9556 9.2 16.9556H10.4ZM11.2 23.4118C21.8625 17.0676 24 14.4692 24 9.51169C24 4.25853 19.881 0 14.8 0H9.2C4.11898 0 0 4.25853 0 9.51169C0 14.7649 4.11898 19.0234 9.2 19.0234V23.1731C9.2 23.8059 9.85914 24.2041 10.3909 23.8908C10.6659 23.7287 10.9356 23.5691 11.2 23.4118Z" fill="#687684"/>
        </svg>
    </button>
  )
}

export default Comment
