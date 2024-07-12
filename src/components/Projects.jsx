import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import currencyconverter from '../assets/currencyconverter.png'
import passwordgenerator from '../assets/passwordgenerator.png'
import todo from '../assets/todo.png'
import { TfiLayoutSlider } from "react-icons/tfi";
import { FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div name='projects' className='bg-gradient-to-b from-black via-black to-gray-800 h-[800px] py-20 text-white w-full'>

            <div className='text-5xl flex justify-center gap-4 items-center font-bold text-red-500'>
                <h1 className=''>Projects</h1>
                <div>
                    <TfiLayoutSlider />
                </div>
            </div>

            <div className='px-11'>
                <Slider {...settings}>

                    <div className='mt-11 px-8 md:px-[200px] '>
                        <div className='flex flex-col justify-center items-center gap-4 bg-slate-200 text-gray-800 rounded-2xl'>

                            <div className=''>
                                <img src={currencyconverter} alt="project1" className='w-96 h-60 rounded-2xl md:mt-6' />
                            </div>

                            <div className='flex flex-col justify-center items-center gap-4'>
                                <div className='font-bold text-2xl'>
                                    Currency Converter
                                </div>
                                <div className='flex gap-9 justify-between '>
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


                    <div className='mt-11 px-8 md:px-[300px] w-full'>
                        <div className='flex flex-col justify-center items-center gap-4 bg-slate-200 text-gray-800 rounded-2xl'>
                            <div className=''>
                                <img src={passwordgenerator} alt="project1" className='w-96 h-60 rounded-2xl md:mt-6' />
                            </div>

                            <div className='flex flex-col justify-center items-center gap-4'>
                                <div className='font-bold text-xl'>
                                    Custom Password Generator
                                </div>
                                <div className='flex gap-9 justify-between '>
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


                    <div className='mt-11 px-8 md:px-[300px] w-full '>
                        <div className='flex flex-col justify-center items-center gap-4 bg-slate-200 text-gray-800 rounded-2xl'>

                            <div className=''>
                                <img src={todo} alt="project1" className='w-96 h-60 rounded-2xl md:mt-6' />
                            </div>

                            <div className='flex flex-col justify-center items-center gap-4'>
                                <div className='font-bold text-2xl'>
                                    To-Do List Manager
                                </div>

                                <div className='flex gap-9 justify-between '>
                                    <div className='flex justify-center items-center gap-2 bg-red-500 px-6 py-2 rounded-3xl font-bold text-md mb-3'>
                                        <button ><a href="https://todolist12ka4.netlify.app" target='_blank'>Site</a></button>
                                        <FaExternalLinkAlt />
                                    </div>
                                    <div className='flex justify-center items-center gap-2 bg-red-500 px-6 py-2 rounded-3xl font-bold text-md mb-3'>
                                        <button ><a href="https://github.com/shashwatthisside/ToDo-Context" target='_blank'>Code</a></button>
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