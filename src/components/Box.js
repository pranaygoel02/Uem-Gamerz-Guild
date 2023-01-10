import React from 'react'
import Bg from '../assets/images/box.svg'
function Box({text,hex}) {
  return (
    <div className='relative flex items-center justify-center'>
        <div className='h-9'>
        <svg className='h-full' width="396" viewBox="0 0 746 68" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M94.2587 0.923096H100.35L90 18H100.909L111.259 0.923096H694.937L745.738 34.4616L694.937 68H680.515L690.818 51H679.909L669.606 68H663.515L673.818 51H662.909L652.606 68H646.609L658.5 51H647.591L635.699 68H48.8281L0 34.4616L48.8281 0.923096H67.9452L56 18H66.9091L78.8543 0.923096H83.3496L73 18H83.9091L94.2587 0.923096Z" fill={hex}/>
        </svg>
        </div>
        <h2 className='font-poppins absolute uppercase font-bold text-2xl' style={{letterSpacing:'6px'}}>{text}</h2>
    </div>
  )
}

export default Box