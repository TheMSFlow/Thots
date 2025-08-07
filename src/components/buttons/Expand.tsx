import React from 'react'

const Expand: React.FC = () => {
  return (
    <button className="bg-transparent hover:bg-hover active:bg-pressed transition-all duration-200 ease-in-out grid place-items-center w-6 h-6 rounded-md">
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" fill="none">
          <path fillRule="evenodd" clipRule="evenodd" d="M0.214312 0.73118C0.500062 0.42294 0.963353 0.42294 1.2491 0.73118L6 5.85601L10.7509 0.73118C11.0366 0.42294 11.4999 0.42294 11.7857 0.73118C12.0714 1.03942 12.0714 1.53918 11.7857 1.84742L6.93131 7.08388C6.41696 7.63871 5.58304 7.63871 5.06869 7.08388L0.214312 1.84742C-0.0714374 1.53918 -0.0714374 1.03942 0.214312 0.73118Z" fill="#BDC5CD"/>
      </svg>
    </button>
  )
}

export default Expand
