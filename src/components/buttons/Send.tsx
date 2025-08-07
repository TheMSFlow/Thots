import React from 'react'

const Send: React.FC = () => {
  return (
    <button className="bg-brand hover:scale-105 active:bg-pressed active:scale-90 transition-all duration-200 ease-in-out grid place-items-center w-[35px] h-[35px] rounded-full">
        <svg xmlns="http://www.w3.org/2000/svg" width="9" height="13" viewBox="0 0 9 13" fill="none">
            <path d="M4.505 13C4.225 13 4.005 12.846 4.005 12.65V1.35963C4.005 1.16363 4.225 1.00963 4.505 1.00963C4.785 1.00963 5.005 1.16363 5.005 1.35963V12.65C5.005 12.846 4.785 13 4.505 13Z" fill="black"/>
            <path d="M8.005 4.50963C7.93942 4.51043 7.8744 4.4975 7.81412 4.47167C7.75385 4.44583 7.69964 4.40767 7.655 4.35963L4.505 1.20963L1.355 4.35963C1.155 4.55963 0.844995 4.55963 0.644995 4.35963C0.444995 4.15963 0.444995 3.84963 0.644995 3.64963L4.14499 0.149634C4.34499 -0.0503662 4.655 -0.0503662 4.855 0.149634L8.355 3.64963C8.555 3.84963 8.555 4.15963 8.355 4.35963C8.255 4.45963 8.125 4.50963 8.005 4.50963Z" fill="black"/>
        </svg>
    </button>
  )
}

export default Send
