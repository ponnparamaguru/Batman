import React, {useState} from 'react'
import logo from '../asserts/logo.png'
import {HiMenuAlt3} from 'react-icons/hi'
import {IoMdClose} from 'react-icons/io'

const Nav = () => {

  const [navBar, setnavBar] = useState(false)

  return (
    <div className='bg-black h-16 w-full text-white flex justify-between items-center fixed'>
        <div>
            <img className='w-24 m-2 ' src={logo} alt=''/>
        </div>
        <ul className='hidden md:flex gap-12 m-12 font-semibold'>
            <li className='text-red-600 text-xl font-bold'>Home</li>
            <li className='text-xl'>Movie</li>
            <li className='text-xl'>Reviews</li>
        </ul>
        <div onClick={()=> setnavBar (!navBar)} className='cursor-pointer z-10'>
          <h1 className='md:hidden text-white text-3xl mr-8' >{ navBar ? <IoMdClose/>  :  <HiMenuAlt3/> }</h1>
        </div>  
        {navBar && (
          <ul className='flex flex-row w-full h-16 bg-black gap-10 items-center
           top-0 absolute'>
            <div className='flex ml-20 gap-5'>
            <li className='text-xl'>Home</li>
            <li className='text-xl'>Movie</li>
            <li className='text-xl'>Review</li>
            </div>
          </ul>
          )}
    </div>
  )
}

export default Nav