import React from 'react'
import '../index.css'
import Logo from '../assets/images/logo.png'

import {useAuth} from '../context/authContext'
import { useState } from 'react'
import Info from '../components/Info'
function Home() {
  const {user,setUser} = useAuth()
  const [show, setShow] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault()
    if(e.target[0].value === process.env.REACT_APP_PASSWORD){
      setUser(prev=>true)
      localStorage.setItem('user',true)
    }
  }
  return (
    <div className='flex flex-col items-center justify-center w-full h-screen bg-black/95 overflow-x-hidden text-white gap-8 home text-center'>
      {user && <div className='absolute top-8 right-8'>
        <div className='relative'>
        <p onClick={()=>{setShow(prev=>!prev)}} className='px-2 border rounded-full flex items-center justify-center font-bold' role={'button'}>i</p>  
        {show && <Info/>}
        </div>
      </div>}
      {!user && <img src={Logo} className='w-36'></img>}
      <h1 className='font-pilot text-2xl md:text-5xl animate-header'>UEM GAMERZ GUILD</h1>
      <div className='w-20 md:w-5/6 h-0.5 bg-gradient-to-r from-transparent via-red-600 to-transparent animate-line'></div>
      <h2 className='font-poppins md:font-nasa text-center text-xl animate-subheader'>The Official Gaming Club of UEMK<br></br>Certificate Generator</h2>
      {<p className='block md:hidden font-poppins bg-red-600 p-4 rounded-md'>This is a Desktop Site.<br></br>Please revisit via Laptop or Desktop.</p>}
      {!user && 
      <form className='hidden md:flex' onSubmit={handleSubmit}>
      <input autoFocus={true} type={'password'} className='bg-transparent text-white text-center font-nasa text-lg p-4 border-4 border-white rounded-md animate-input focus-within:border-red-600 focus-within:outline-none'></input>
      </form>
      }
    </div>
  )
}

export default Home