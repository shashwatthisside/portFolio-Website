import React from 'react'
import profilepicture from '../assets/profilepicture.png'
import { HiAcademicCap } from "react-icons/hi2";
import { AiOutlineAim } from "react-icons/ai";
import { PiArrowFatRightFill } from "react-icons/pi";
import { GrCertificate } from "react-icons/gr";
import { FaDownload } from "react-icons/fa";
import { BsPersonWorkspace } from "react-icons/bs";
import { CgEditBlackPoint } from "react-icons/cg";
import { TbArrowBadgeRightFilled } from "react-icons/tb";
import "animate.css/animate.compat.css"
import ScrollAnimation from 'react-animate-on-scroll';


const About = () => {
    return (
        <div name="about" className='bg-gradient-to-b from-gray-800 to-black h-[2500px] md:h-[1700px] w-full'>

            <div className=' text-5xl pt-24 flex flex-col justify-center items-center font-bold text-red-500'>
                <h1 className='border-b-4 border-dotted px-6 py-2'>About Me <span className='animate-pulse' >👇</span> </h1>
            </div>

            <ScrollAnimation animateIn="fadeIn">
                <div className=' mt-6 flex flex-col items-center justify-center h-48 md:h-72 w-full text-white md:flex-row'>
                    <div className='w-44 h-52 md:w-60 md:h-72 '>
                        <img src={profilepicture} alt="myprofilepicture" className=' rounded-tr-[60px] rounded-bl-[60px] rounded-tl-xl rounded-br-xl shadow-xl shadow-blue-300' />
                    </div>
                </div>
            </ScrollAnimation>




            {/* Card Section */}
            <div className=' w-full md:grid md:grid-cols-2 md:px-10'>
                {/* !st Card */}
                <ScrollAnimation animateIn='fadeInLeft' duration={1}>
                    <div className='mt-24 mx-10 rounded-2xl bg-gray-300 hover:scale-105 duration-300'>
                        <div className=' bg-gradient-to-r from-blue-500 to-red-500 h-1/3 flex justify-center items-center flex-col rounded-b-2xl
                 rounded-t-2xl'>
                            <HiAcademicCap color='black' size={70} />
                            <p className='text-black font-bold'>ACADEMICS</p>
                        </div>

                        <div className='h-2/3 px-7 py-3'>
                            <div className='border-b-4 border-blue-500 py-3'>
                                <h1 className='font-bold text-md'>Bachelor of Computer Applications (BCA),</h1>
                                <p className='text-sm text-gray-950'>Indra Gandhi National Open University</p>
                                <p className='text-sm text-gray-950'>2021-2024</p>
                            </div>
                            <div className='py-3'>
                                <h1 className='font-bold text-md'>Intermediate Commerce with Computer Science,</h1>
                                <p className='text-sm text-gray-950'>Kendriya Vidyalaya-1 Hindon AFS,</p>
                                <p className='text-sm text-gray-950'>87 %</p>
                                <p className='text-sm text-gray-950'>2019-2021</p>
                            </div>
                        </div>
                    </div>
                </ScrollAnimation>

                {/* 2nd Card */}
                <ScrollAnimation animateIn='fadeInRight' duration={1}>
                    <div className='mt-10 md:mt-24 mx-10 rounded-2xl bg-gray-300 md:overflow-auto hover:scale-105 duration-300'>
                        <div className=' bg-gradient-to-r from-blue-500 to-red-500 h-1/3 flex justify-center items-center flex-col rounded-b-2xl
                 rounded-t-2xl'>
                            <GrCertificate color='black' size={70} className='mt-2' />
                            <p className='text-black font-bold'>CERTIFICATIONS</p>
                        </div>

                        <div className='h-2/3 px-7 py-3'>
                            <div className='border-b-4 border-blue-500 py-3'>
                                <h1 className='font-bold text-lg flex items-center gap-2'>Digital Marketing - Udemy <a href="./digitalmarketingcertificate.pdf" download={true}><FaDownload size={15} className='hover:scale-125 duration-300' /></a></h1>
                                <p className='text-sm text-gray-950 font-bold'>Learned about :-</p>
                                <ul className="list-disc text-sm">
                                    <li>WordPress Website Development</li>
                                    <li>Copywriting</li>
                                    <li>Search Engine Optimization</li>
                                    <li>Google adWords</li>
                                    <li>Email, Youtube, instagram, linkedin, Facebook Marketing</li>
                                </ul>
                            </div>
                            <div className='py-3'>
                                <h1 className='font-bold text-lg flex items-center gap-2'>Java Programming Language <a href="./javacertificate.pdf" download={true}><FaDownload size={15} className='hover:scale-125 duration-300' /></a></h1>
                                <p className='text-sm text-gray-950 font-bold'>Learned about :-</p>
                                <ul className="list-disc text-sm">
                                    <li>JAVA Programming / Object Oriented Programming / DSA /
                                        Dynamic Programming
                                    </li>
                                </ul>

                            </div>
                        </div>
                    </div>
                </ScrollAnimation>
                {/* 3rd Card */}
                <ScrollAnimation animateIn='fadeInLeft' duration={1}>
                    <div className='mt-10 mx-10 rounded-2xl bg-gray-300 overflow-auto hover:scale-105 duration-300'>
                        <div className=' bg-gradient-to-r from-blue-500 to-red-500 h-1/3 flex justify-center items-center flex-col rounded-b-2xl
                 rounded-t-2xl'>
                            < AiOutlineAim color='black' size={70} />
                            <p className='text-black font-bold'>SKILLS</p>
                        </div>

                        <div className='h-2/3 px-7 py-3'>
                            <h1 className='font-bold text-xl mb-2 border-b-2 border-red-500'> Hard Skills </h1>
                            <div className='flex items-center gap-1 mt-3'>
                                <TbArrowBadgeRightFilled size={20} /><h2 className='font-bold'>Programming Languages : </h2>
                            </div>
                            <p>JavaScript, Java, C++, C, Python</p>
                            <div className='flex items-center gap-1 mt-3'>
                                <TbArrowBadgeRightFilled size={20} /><h2 className='font-bold'>Frameworks & Libraries : </h2>
                            </div>
                            <p>React.js, Tailwind_Css, Node.js, Express.js, REST_API</p>
                            <div className='flex items-center gap-1 mt-3'>
                                <TbArrowBadgeRightFilled size={20} /><h2 className='font-bold'>Database : </h2>
                            </div>
                            <p>MySQL Database, Mongo Database</p>
                            <div className='flex items-center gap-1 mt-3'>
                                <TbArrowBadgeRightFilled size={20} /><h2 className='font-bold'>Development Tools : </h2>
                            </div>
                            <p>Git & GitHub, Visual Studio Code IDE</p>
                            <div className='flex items-center gap-1 mt-3'>
                                <TbArrowBadgeRightFilled size={20} /><h2 className='font-bold'>Concepts : </h2>
                            </div>
                            <p>Object Oriented Programming, Functional Programming, Computer Networking, Version Control, Responsive Design</p>
                        </div>

                        <div className='px-7'>
                            <h1 className='font-bold text-xl mb-2 border-b-2 border-red-500'> Soft Skills </h1>
                            <ul>
                                <li>Time management</li>
                                <li>Adaptability</li>
                                <li>Work ethic</li>
                                <li>Leadership</li>
                                <li>Communication</li>
                            </ul>
                        </div>
                    </div>
                </ScrollAnimation>

                {/* 4th Card */}
                <ScrollAnimation animateIn='fadeInRight' duration={1}>
                    <div className='mt-10 mx-10 rounded-2xl bg-gray-300 hover:scale-105 duration-300'>
                        <div className=' bg-gradient-to-r from-blue-500 to-red-500 h-1/3 flex justify-center items-center flex-col rounded-b-2xl
                 rounded-t-2xl'>
                            <BsPersonWorkspace color='black' size={70} />
                            <p className='text-black font-bold'>WORK DONE</p>
                        </div>

                        <div className='h-2/3 px-7 py-3'>
                            <div className=' py-3'>
                                <div className='flex items-center gap-2'>
                                    <CgEditBlackPoint size={20} /> <h1 className='font-bold text-lg'>Star Health Incurance Agent </h1>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <CgEditBlackPoint size={20} /> <h1 className='font-bold text-lg'>Tution Teacher </h1>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <CgEditBlackPoint size={20} /> <h1 className='font-bold text-lg'>Static WebPage Developer </h1>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <CgEditBlackPoint size={20} /> <h1 className='font-bold text-lg'> Volunteer in Social Wellfare</h1>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <CgEditBlackPoint size={20} /> <h1 className='font-bold text-lg'>Social Media Manger </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </ScrollAnimation>

            </div>

        </div >
    )
}

export default About
