import React, { useState } from 'react'
import assets from '../assets/assets'
const Navbar = ({theme,setTheme}) => {
    
  return (
    <nav className='sticky top-0 z-50 backdrop-blur-lg bg-white/30 dark:bg-gray-700/90 px-4 py-4 lg:px-24 sm:px-12 xl:px-40 flex justify-between items-center'>
        <img src={theme === 'dark' ?(assets.logo_dark):(assets.logo)} alt="" className='w-32 sm:w-40'/>
    </nav>
  )
}

export default Navbar
