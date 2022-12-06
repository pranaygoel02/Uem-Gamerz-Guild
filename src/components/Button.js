import React from 'react'

function Button({text,onClick}) {
  return (
    <button onClick={onClick} className='p-2 bg-red-600 rounded-sm text-white w-full'>{text}</button>
  )
}

export default Button