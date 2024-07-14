import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import Mongodb from "../assets/Mongodb.png"
import sass from "../assets/sass.png"
import mysql from "../assets/mysql.png"
import node from '../assets/node.png'
import "animate.css/animate.compat.css"
import ScrollAnimation from 'react-animate-on-scroll';

const Technologies = () => {
    const techs = [
        {
            id: 1,
            src: html,
            title: "HTML",
            style: "shadow-orange-500",
        },
        {
            id: 2,
            src: css,
            title: "CSS",
            style: "shadow-blue-500",
        },
        {
            id: 3,
            src: javascript,
            title: "JavaScript",
            style: "shadow-yellow-500",
        },
        {
            id: 4,
            src: reactImage,
            title: "React",
            style: "shadow-blue-600",
        },
        {
            id: 5,
            src: tailwind,
            title: "Tailwind",
            style: "shadow-sky-400",
        },
        {
            id: 6,
            src: github,
            title: "GitHub",
            style: "shadow-gray-400",
        },
        {
            id: 7,
            src: Mongodb,
            title: "Mongo Database",
            style: "shadow-green-400",
        },
        {
            id: 8,
            src: sass,
            title: "SASS/SCSS",
            style: "shadow-pink-400",
        },
        {
            id: 9,
            src: mysql,
            title: "MYSQL Database",
            style: "shadow-orange-400",
        },
        {
            id: 10,
            src: node,
            title: "Node Js",
            style: "shadow-green-400",
        },
    ];

    return (
        <div
            name="technologies"
            className="bg-gradient-to-b from-gray-800 to-black w-full h-[1000px]"
        >
            <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
                <div className=' text-5xl pt-24 flex flex-col md:flex-row justify-center items-center font-bold text-red-500'>
                    <div className='border-b-4 border-dotted px-6 py-2 flex flex-col justify-center items-center gap-4'>
                        <h1>Technology</h1>
                        <span className='animate-pulse' >👨‍💻</span>
                    </div>
                </div>
                <p className="mt-8">Technologies I've worked with</p>

                <div className=" mt-10 w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
                    {techs.map(({ id, src, title, style }) => (
                        <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
                            <div
                                key={id}
                                className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
                            >
                                <img src={src} alt="" className="w-20 mx-auto" />
                                <p className="mt-4">{title}</p>
                            </div>
                        </ScrollAnimation>

                    ))}
                </div>
            </div>
        </div>
    );
};

export default Technologies;