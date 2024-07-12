import React, { useState } from 'react'
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from 'react-scroll'
const NavBar = () => {
    const [nav, setNav] = useState(false)
    return (
        <div className='bg-black h-20 flex justify-between items-center w-full text-white fixed top-0 z-50'>
            <div>
                <h1 className='text-4xl ml-8 font-signature'>S.D</h1>
            </div>
            <ul className=' hidden md:flex'>
                <li className='cursor-pointer font-medium text-gray-300 text-lg capitalize hover:scale-125 duration-200 hover:text-red-500 gap-9 px-4 '><Link to='home' smooth duration={500}>HOME</Link></li>
                <li className='cursor-pointer font-medium text-gray-300 text-lg capitalize hover:scale-125 duration-200 hover:text-red-500 gap-9 px-4 '><Link to='about' smooth duration={500}>ABOUT</Link></li>
                <li className='cursor-pointer font-medium text-gray-300 text-lg capitalize hover:scale-125 duration-200 hover:text-red-500 gap-9 px-4 '><Link to='projects' smooth duration={500}>PROJECTS</Link></li>
                <li className='cursor-pointer font-medium text-gray-300 text-lg capitalize hover:scale-125 duration-200 hover:text-red-500 gap-9 px-4 '><Link to='technologies' smooth duration={500}>TECHNOLOGIES</Link></li>
                <li className='cursor-pointer font-medium text-gray-300 text-lg capitalize hover:scale-125 duration-200 hover:text-red-500 gap-9 px-4 '><Link to='contact' smooth duration={500}>CONTACT</Link></li>
            </ul>
            <div onClick={() => { setNav(!nav) }} className='mr-5 cursor-pointer z-10 md:hidden '>
                {nav ? <FaTimes size={25} className='mr-10' /> : <FaBars size={25} className='mr-10' />}
            </div>

            {nav && (
                <ul className='flex flex-col justify-center items-center absolute w-full h-screen bg-gradient-to-b from-black via-black to-gray-800 top-0 left-0 right-0 bottom-0 gap-5'>
                    <li className='capitalize cursor-pointer text-2xl hover:scale-125 duration-200 gap-3 text-gray-300 hover:text-red-500  '><Link onClick={() => setNav(!nav)} to='home' smooth duration={500}>HOME</Link></li>
                    <li className='capitalize cursor-pointer text-2xl hover:scale-125 duration-200 gap-3 text-gray-300 hover:text-red-500 '><Link onClick={() => setNav(!nav)} to='about' smooth duration={500}>ABOUT</Link></li>
                    <li className='capitalize cursor-pointer text-2xl hover:scale-125 duration-200 gap-3 text-gray-300 hover:text-red-500 '><Link onClick={() => setNav(!nav)} to='projects' smooth duration={500}>PROJECTS</Link></li>
                    <li className='capitalize cursor-pointer text-2xl hover:scale-125 duration-200 gap-3 text-gray-300 hover:text-red-500 '><Link onClick={() => setNav(!nav)} to='technologies' smooth duration={500}>TECHNOLOGIES</Link></li>
                    <li className='capitalize cursor-pointer text-2xl hover:scale-125 duration-200 gap-3 text-gray-300 hover:text-red-500 '><Link onClick={() => setNav(!nav)} to='contact' smooth duration={500}>CONTACT</Link></li>
                </ul>
            )}
        </div>
    )
}

export default NavBar