import React from 'react'

const Comment: React.FC = () => {
  return (
    <button className="bg-transparent hover:bg-hover active:bg-pressed transition-all duration-200 ease-in-out grid place-items-center w-6 h-6 rounded-md">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path fillRule="evenodd" clipRule="evenodd" d="M7 10.9957C7.27614 10.9957 7.5 11.2196 7.5 11.4957V13.4536C10.2487 11.8481 11.9025 10.7123 12.8999 9.72066C13.4787 9.14519 13.7971 8.65443 13.982 8.18647C14.1679 7.71593 14.25 7.19021 14.25 6.49573C14.25 4.01045 12.2353 1.99573 9.75 1.99573H6.25C3.76472 1.99573 1.75 4.01045 1.75 6.49573C1.75 8.98101 3.76472 10.9957 6.25 10.9957H7ZM7.5 14.8986C14.1641 11.0634 15.5 9.49263 15.5 6.49573C15.5 3.32009 12.9256 0.745728 9.75 0.745728H6.25C3.07436 0.745728 0.5 3.32009 0.5 6.49573C0.5 9.67136 3.07436 12.2457 6.25 12.2457V14.7543C6.25 15.1368 6.66196 15.3775 6.9943 15.1882C7.16618 15.0902 7.33473 14.9937 7.5 14.8986Z" fill="#687684"/>
      </svg>
    </button>
  )
}

export default Comment
