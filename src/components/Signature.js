import React, { useState } from 'react'
import Sign1 from '../assets/images/freefire/sign.png'
function Signature({name,designation,underline_color,color}) {
  return (
    name !== '' && 
    <div className='flex flex-col items-center'>
      <img src={Sign1} className='w-40 p-2 m-auto'/>
    <div className={`flex flex-col items-center text-center font-poppins pt-2 px-8 border-t-2 border-${underline_color} text-${color}`}>
        <h3 contentEditable className='font-poppins'>{name}</h3>
        <h3 contentEditable className='font-poppins'>{designation}</h3>
    </div>
    </div>
  
  )
}

export default Signature