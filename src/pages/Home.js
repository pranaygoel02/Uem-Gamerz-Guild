import React from 'react'
import '../index.css'
function Home() {
  return (
    <div className='flex flex-col items-center justify-center w-full bg-black/95 overflow-x-hidden text-white gap-8 home'>
      <h1 className='font-pilot text-5xl animate-header'>UEM GAMERZ GUILD</h1>
      <div className='w-80 h-0.5 bg-gradient-to-r from-transparent via-red-600 to-transparent animate-line'></div>
      <h2 className='font-nasa text-center text-xl animate-subheader'>The Official Gaming Club of UEMK<br></br>Certificate Generator</h2>
    </div>
  )
}

export default Home