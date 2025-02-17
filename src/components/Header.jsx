import React from 'react'
import 'remixicon/fonts/remixicon.css'

const Header = () => {
  return (
    <div className='fixed z-10 py-17 px-6 w-full flex items-center justify-end pointer-events-none'>
        <button className='bg-black text-white border-4 px-10 py-2.5 rounded-full font-[anzo2] hover:bg-gray-800'>Hire me</button>
        <i className="ri-menu-line text-gray-400 ml-4 text-4xl"></i>
    </div>
  )
}

export default Header