import React from 'react'

const Collapse: React.FC = () => {
  return (
    <button className="bg-transparent hover:bg-hover active:bg-pressed transition-all duration-200 ease-in-out grid place-items-center w-12 h-12 rounded-md">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="14" viewBox="0 0 24 14" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M23.5714 13.0606C22.9999 13.6321 22.0733 13.6321 21.5018 13.0606L12 3.55884L2.49821 13.0606C1.92671 13.6321 1.00012 13.6321 0.428624 13.0606C-0.142873 12.4891 -0.142873 11.5626 0.428624 10.9911L10.1374 1.2823C11.1661 0.253599 12.8339 0.253605 13.8626 1.2823L23.5714 10.9911C24.1429 11.5626 24.1429 12.4891 23.5714 13.0606Z" fill="#BDC5CD"/>
        </svg>
    </button>
  )
}

export default Collapse
