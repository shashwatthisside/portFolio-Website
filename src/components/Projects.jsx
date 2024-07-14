import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import currencyconverter from '../assets/currencyconverter.png'
import passwordgenerator from '../assets/passwordgenerator.png'
import todo from '../assets/todo.png'
import { TfiLayoutSlider } from "react-icons/tfi";
import { FaExternalLinkAlt } from "react-icons/fa";
import reactrouter from '../assets/reactrouter.png'
import themeswitcher from '../assets/themeswitcher.png'
import reduxtoolkit from '../assets/reduxtoolkit.png'

const Projects = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div name='projects' className='bg-gradient-to-b from-black via-black to-gray-800 h-[1000px] py-24 text-white w-full'>

            <div className=' text-5xl pt-24 flex flex-col justify-center items-center font-bold text-red-500'>
                <h1 className='border-b-4 border-dotted px-6 py-2'>Projects <span className='animate-pulse' >📁</span> </h1>
            </div>
            <p className="mt-8 ml-14 px-5">Front-end Projects I've made, primarily JavaScript, React and Tailwind Css for styling and Animations</p>

            <div className='px-11 md:px-32'>
                <Slider {...settings}>


                    <div className='mt-11 px-8 md:px-[300px] '>
                        <div className='flex flex-col justify-center items-center gap-4 bg-slate-200 text-gray-800 rounded-2xl'>

                            <div className=''>
                                <img src={reactrouter} alt="project1" className='w-96 h-60 rounded-2xl md:mt-6' />
                            </div>

                            <div className='flex flex-col justify-center items-center gap-4'>
                                <div className='font-bold text-2xl px-7'>
                                    Multi-Page Website - React-Router-dom
                                </div>
                                <div className='flex gap-4 justify-between '>
                                    <div className='flex justify-center items-center gap-2 bg-red-500 px-6 py-2 rounded-3xl font-bold text-md mb-3'>
                                        <button ><a href="https://react-router-dom-website.netlify.app" target='_blank'>Site</a></button>
                                        <FaExternalLinkAlt />
                                    </div>
                                    <div className='flex justify-center items-center gap-2 bg-red-500 px-6 py-2 rounded-3xl font-bold text-md mb-3'>
                                        <button ><a href="https://github.com/shashwatthisside/React-Router-dom-Website" target='_blank'>Code</a></button>
                                        <FaExternalLinkAlt />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div className='mt-11 px-8 md:px-[300px] '>
                        <div className='flex flex-col justify-center items-center gap-4 bg-slate-200 text-gray-800 rounded-2xl'>

                            <div className=''>
                                <img src={themeswitcher} alt="project1" className='w-96 h-60 rounded-2xl md:mt-6' />
                            </div>

                            <div className='flex flex-col justify-center items-center gap-4'>
                                <div className='font-bold text-2xl px-7'>
                                    Theme Switcher like Tailwind - Context API
                                </div>
                                <div className='flex gap-4 justify-between '>
                                    <div className='flex justify-center items-center gap-2 bg-red-500 px-6 py-2 rounded-3xl font-bold text-md mb-3'>
                                        <button ><a href="https://themeswitcher-like-tailwind.netlify.app" target='_blank'>Site</a></button>
                                        <FaExternalLinkAlt />
                                    </div>
                                    <div className='flex justify-center items-center gap-2 bg-red-500 px-6 py-2 rounded-3xl font-bold text-md mb-3'>
                                        <button ><a href="https://github.com/shashwatthisside/Theme-Switcher---Context-API-" target='_blank'>Code</a></button>
                                        <FaExternalLinkAlt />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>




                    <div className='mt-11 px-8 md:px-[300px] '>
                        <div className='flex flex-col justify-center items-center gap-4 bg-slate-200 text-gray-800 rounded-2xl'>

                            <div className=''>
                                <img src={reduxtoolkit} alt="project1" className='w-96 h-60 rounded-2xl md:mt-6' />
                            </div>

                            <div className='flex flex-col justify-center items-center gap-4'>
                                <div className='font-bold text-2xl px-7'>
                                    ToDos List Builder - React-Redux Toolkit
                                </div>
                                <div className='flex gap-4 justify-between px '>
                                    <div className='flex justify-center items-center gap-2 bg-red-500 px-6 py-2 rounded-3xl font-bold text-md mb-3'>
                                        <button ><a href="https://todo-with-redux-toolkit.netlify.app" target='_blank'>Site</a></button>
                                        <FaExternalLinkAlt />
                                    </div>
                                    <div className='flex justify-center items-center gap-2 bg-red-500 px-6 py-2 rounded-3xl font-bold text-md mb-3'>
                                        <button ><a href="https://github.com/shashwatthisside/ToDo-with-Redux-Tool-kit" target='_blank'>Code</a></button>
                                        <FaExternalLinkAlt />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>











                    <div className='mt-11 px-8 md:px-[300px] '>
                        <div className='flex flex-col justify-center items-center gap-4 bg-slate-200 text-gray-800 rounded-2xl'>

                            <div className=''>
                                <img src={currencyconverter} alt="project1" className='w-96 h-60 rounded-2xl md:mt-6' />
                            </div>

                            <div className='flex flex-col justify-center items-center gap-4'>
                                <div className='font-bold text-2xl px-7'>
                                    Currency Converter
                                </div>
                                <div className='flex gap-4 justify-between '>
                                    <div className='flex justify-center items-center gap-2 bg-red-500 px-6 py-2 rounded-3xl font-bold text-md mb-3'>
                                        <button ><a href="https://currencyconvertercallingapi.netlify.app" target='_blank'>Site</a></button>
                                        <FaExternalLinkAlt />
                                    </div>
                                    <div className='flex justify-center items-center gap-2 bg-red-500 px-6 py-2 rounded-3xl font-bold text-md mb-3'>
                                        <button ><a href="https://github.com/shashwatthisside/Currency-Converter" target='_blank'>Code</a></button>
                                        <FaExternalLinkAlt />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className='mt-11 px-8 md:px-[300px]'>
                        <div className='flex flex-col justify-center items-center gap-4 bg-slate-200 text-gray-800 rounded-2xl'>
                            <div className=''>
                                <img src={passwordgenerator} alt="project1" className='w-96 h-60 rounded-2xl md:mt-6' />
                            </div>

                            <div className='flex flex-col justify-center items-center gap-4'>
                                <div className='font-bold text-xl px-7'>
                                    Custom Password Generator
                                </div>
                                <div className='flex gap-4 justify-between '>
                                    <div className='flex justify-center items-center gap-2 bg-red-500 px-6 py-2 rounded-3xl font-bold text-md mb-3'>
                                        <button ><a href="https://passwordgeneratorsite.netlify.app" target='_blank'>Site</a></button>
                                        <FaExternalLinkAlt />
                                    </div>
                                    <div className='flex justify-center items-center gap-2 bg-red-500 px-6 py-2 rounded-3xl font-bold text-md mb-3'>
                                        <button ><a href="https://github.com/shashwatthisside/Random-Password-Generator" target='_blank'>Code</a></button>
                                        <FaExternalLinkAlt />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </Slider>
            </div>



        </div>
    )
}

export default Projects