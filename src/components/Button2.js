import React from 'react'

function Button2({text,onClick}) {
    return (
      <button onClick={onClick} className='p-2 bg-transparent hover:bg-red-600 border border-red-600 hover:border-0 rounded-sm text-white w-full'>{text}</button>
    )
  }
  

export default Button2