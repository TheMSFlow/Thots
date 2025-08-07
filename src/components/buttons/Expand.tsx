import React from 'react'

const Expand: React.FC = () => {
  return (
    <button className="bg-transparent hover:bg-hover active:bg-pressed transition-all duration-200 ease-in-out grid place-items-center w-12 h-12 rounded-md">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="14" viewBox="0 0 24 14" fill="none">
          <path fillRule="evenodd" clipRule="evenodd" d="M0.428624 0.929335C1.00012 0.356888 1.92671 0.356888 2.4982 0.929335L12 10.4469L21.5018 0.929335C22.0733 0.356888 22.9999 0.356888 23.5714 0.929335C24.1429 1.50178 24.1429 2.4299 23.5714 3.00235L13.8626 12.7272C12.8339 13.7576 11.1661 13.7576 10.1374 12.7272L0.428624 3.00235C-0.142875 2.4299 -0.142875 1.50178 0.428624 0.929335Z" fill="#BDC5CD"/>
        </svg>
    </button>
  )
}

export default Expand
