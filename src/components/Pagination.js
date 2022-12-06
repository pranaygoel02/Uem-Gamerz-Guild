import React from 'react'

function Pagination({val,max}) {
  return (
    <p className='font-poppins text-white  flex items-center gap-1'><span className='bg-red-600 text-md font-bold px-1 rounded-md'>{val}</span> of {max}</p>
  )
}

export default Pagination