import React from 'react'

const Collapse: React.FC = () => {
  return (
    <button className="bg-transparent hover:bg-hover active:bg-pressed transition-all duration-200 ease-in-out grid place-items-center w-6 h-6 rounded-md">
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" fill="none">
          <path fillRule="evenodd" clipRule="evenodd" d="M11.7857 7.26882C11.4999 7.57706 11.0366 7.57706 10.7509 7.26882L6 2.14399L1.2491 7.26882C0.963354 7.57706 0.500061 7.57706 0.214312 7.26882C-0.0714359 6.96058 -0.0714359 6.46082 0.214312 6.15258L5.06869 0.916124C5.58304 0.36129 6.41696 0.361294 6.93131 0.916125L11.7857 6.15258C12.0714 6.46082 12.0714 6.96058 11.7857 7.26882Z" fill="#BDC5CD"/>
      </svg>
    </button>
  )
}

export default Collapse
