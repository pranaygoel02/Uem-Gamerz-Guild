import React from 'react'
import Bg from '../assets/images/box.svg'
function Box2({text}) {
  return (
    <div className='relative flex items-center justify-center'>
        <img src={Bg} className='h-9'></img>
        <h2 className='font-poppins absolute uppercase font-bold text-2xl' style={{letterSpacing:'6px'}}>{text}</h2>
    </div>
  )
}

export default Box2