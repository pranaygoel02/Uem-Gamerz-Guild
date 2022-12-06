import React, { useState } from 'react'

function Signature({name,designation}) {
  return (
    name !== '' && 
    <div className='flex flex-col items-center text-center font-poppins pt-4 px-8 border-t-2 border-orange'>
        <h3 className='font-poppins  text-orange'>{name}</h3>
        <h3 className='font-poppins  text-orange'>{designation}</h3>
    </div>
  
  )
}

export default Signature