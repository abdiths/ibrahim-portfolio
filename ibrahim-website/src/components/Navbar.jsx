import React from 'react'
import Logo from '../assets/logo.svg'

const Navbar = () => {
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4'>
        <div>
            <img src={Logo} alt='Ibrahim Logo' style={{width: '50px'}} href="#"></img>
        </div>
        <div>
        <button type="button" className="bg-black hover:bg-neutral-800 text-white font-medium rounded-full px-5 py-2.5 mr-2 mb-2">
            Contact Me
        </button>
        </div>
    </div>
  )
}

export default Navbar