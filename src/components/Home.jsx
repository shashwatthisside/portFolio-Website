import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import heroImageclr from '../assets/heroImageclr.jpg'
import { GrLinkedin } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { GiSupersonicBullet } from "react-icons/gi";
import "animate.css/animate.compat.css"
import ScrollAnimation from 'react-animate-on-scroll';
const Home = () => {


    return (
        <div name="home" className='w-full h-[800px] lg:h-[657px] bg-gradient-to-b from-black to-gray-800'>
            <div className='flex flex-col mx-auto justify-center items-center h-full md:flex-row w-full '>

                <div className='flex flex-col justify-center text-white w-full h-screen px-4 mt-40 md:ml-36'>
                    <h1 className='text-xl lg:text-2xl md:xl'>
                        🙏Namaste, I'm
                        <br />
                        {''}
                        <span className='text-red-500 text-2xl py-4 font-bold lg:text-4xl '>
                            <Typewriter
                                words={['Shashwat Dwivedi', 'a Front-End Developer']}
                                loop={true}
                                cursor={true}
                                cursorStyle='_'
                                typeSpeed={110}
                                deleteSpeed={70}
                                delaySpeed={1500}
                            />
                        </span>
                    </h1>
                    <p className='text-gray-300 mt-4 md:mt-6 md:text-xl '> <GiSupersonicBullet size={15} />Highly motivated Front-End Developer seeking a work opportunity to leverage front-end expertise and also actively expanding back-end development knowledge to explore career opportunities in MERN full-stack web-apps development</p>

                    <p className='text-gray-300 mt-4 md:mt-6 md:text-xl '> <GiSupersonicBullet size={15} /> I may be new to the field, but I bring boundless energy and an insatiable hunger to learn.</p>

                    <p className='text-gray-300 mt-4 md:mt-6 md:text-xl '> <GiSupersonicBullet size={15} /> I've a Strong foundation in various skills. Now eager to apply and refine a specific skill in the market.</p>




                    <div className='flex gap-x-10 mx-auto justify-start items-center py-4 mt-9 lg:hidden bg-red-500 px-8 rounded-3xl'>
                        <a href="https://www.linkedin.com/in/shashwat-dwivedi-563a511aa/" target='_blank' ><GrLinkedin className='cursor-pointer hover:scale-150 duration-300 shadow-md rounded-full' size={20} /> </a>

                        <a href="https://github.com/shashwatthisside" target='_blank'><FaGithub className='cursor-pointer hover:scale-150 duration-300 shadow-md rounded-full' size={20} /></a>

                        <a href="mailto:itsshashwatdwivedi" target='_blank'><MdEmail className='cursor-pointer hover:scale-150 duration-300 shadow-md rounded-ful' size={20} /></a>

                        <a href="#" download="#"><BsFillPersonLinesFill className='cursor-pointer hover:scale-150 duration-300 shadow-md rounded-ful' size={20} /></a>
                    </div>
                </div>

                <div className='w-full flex justify-center items-cente md:h-full md:w-full md:flex md:justify-center md:items-center'>
                    <img src={heroImageclr} alt="profileImage" className='w-1/2 h-50 rounded-full md:rounded-xl shadow-xl shadow-green-300 border border-white mt-10 ' />
                </div>
            </div>
        </div>
    )
}

export default Home