import React from 'react'
import Logo from '../assets/logo.svg'

const Navbar = () => {
  return (
    <div className='sticky top-0 z-50 w-full h-[80px] flex justify-between items-center px-4 bg-white shadow-sm'>
        <div>
            <img src={Logo} alt='Ibrahim Logo' style={{width: '50px'}} href="/"></img>
        </div>
        <div>
          <button type="button" className="bg-neutral-900 hover:bg-neutral-700 text-white font-medium rounded-md shadow-md px-4 py-2.5 mr-2 mb-2">
            <a href='/'>Blog</a>
          </button>
          <button type="button" className="bg-neutral-900 hover:bg-neutral-700 text-white font-medium rounded-md shadow-md px-4 py-2.5 mr-2 mb-2">
              <a href='mailto:abdiths@gmail.com'>Contact Me</a>
          </button>
        </div>
    </div>
  )
}

export default Navbar