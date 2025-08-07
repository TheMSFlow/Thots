import React from 'react'
import Send from '../buttons/Send'

const Input = () => {
  return (
    <form className='flex gap-4 py-4 px-4 rounded-lg bg-white border'>
        <img src='/avatar-md.png' width={35} height={35} />
        {/* Input Bubble */}
      <div className="flex-1">
        <input
          type="text"
          placeholder="What’s your thot?"
          className="w-full bg-input text-sm text-gray-800 rounded-full px-4 py-2 outline-none placeholder-gray-500"
        />
      </div>
      <Send />
    </form>
  )
}

export default Input