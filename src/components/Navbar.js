import React from 'react'
import Logo from '../assets/images/logo1.png'
import {Link} from 'react-router-dom'
import links from '../assets/data/Links'

function Navbar() {
  return (
    <div className='bg-black h-3/6 flex flex-col items-center animate-sidebar gap-8 justify-between'>
    <Link to='/' className='p-2 text-white flex justify-center items-center bg-gradient-to-b from-black/50 to-transparent'>
      <img draggable='false' src={Logo} alt='logo' className='w-20 h-20'/>
    </Link>
    <div className='flex flex-col items-center justify-center w-full gap-8'>
    {links.map((link, idx) => <Link to={link.to}><img className=' text-white h-8 hover:translate-x-2 transition-transform' src={require(`../assets/images/${link.img}`)}></img></Link>)}
    </div>
    </div>
  )
}

export default Navbar