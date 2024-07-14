import React from 'react'

export default function Contactme() {
    return (
        <div name='Contact' className="flex items-top justify-center min-h-[700px] bg-gradient-to-b from-black via-black to-gray-800 sm:items-center sm:pt-0 py-40">
            <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
                <div className="mt-8 overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className="p-6 mr-2 bg-gray-300 rounded-2xl">
                            <h1 className="text-3xl sm:text-4xl text-gray-800 font-extrabold tracking-tight">
                                Get in touch:
                            </h1>
                            <p className="text-normal text-lg sm:text-xl font-medium text-gray-600 mt-2">
                                Fill in the form to start a conversation
                            </p>

                            <div className="flex items-center mt-8 text-gray-600">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="1.5"
                                    viewBox="0 0 24 24"
                                    className="w-8 h-8 text-gray-500"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="1.5"
                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                    />
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="1.5"
                                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                </svg>
                                <div className="ml-4 text-md tracking-wide font-semibold w-40">
                                    Pratap Vihar, Ghaziabad, Uttar Pradesh, 201009
                                </div>
                            </div>

                            <div className="flex items-center mt-4 text-gray-600">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="1.5"
                                    viewBox="0 0 24 24"
                                    className="w-8 h-8 text-gray-500"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="1.5"
                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                    />
                                </svg>
                                <div className="ml-4 text-md tracking-wide font-semibold w-40">
                                    +91 7042020827
                                </div>
                            </div>

                            <div className="flex items-center mt-2 text-gray-600">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="1.5"
                                    viewBox="0 0 24 24"
                                    className="w-8 h-8 text-gray-500"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="1.5"
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    />
                                </svg>
                                <div className="ml-4 text-md tracking-wide font-semibold w-40">
                                    itsshashwatdwivedi@gmail.com
                                </div>
                            </div>
                        </div>

                        <form className="p-6 flex flex-col justify-center"
                            action="https://getform.io/f/bxojooza"
                            method="POST" >
                            <div className="flex flex-col">

                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Enter your name"
                                    className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                                />
                            </div>

                            <div className="flex flex-col mt-2">

                                <input
                                    type="text"
                                    name="email"
                                    placeholder="Enter your email"
                                    className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                                />
                            </div>

                            <div className="flex flex-col mt-2">
                                <input
                                    type="text"
                                    name="tel"
                                    placeholder="Telephone Number"
                                    className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                                />
                            </div>

                            <div className="flex flex-col mt-2">
                                <textarea name="message" placeholder="Enter your message"
                                    className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"></textarea>
                            </div>

                            <button
                                type="submit"
                                className="md:w-32 bg-red-500 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-blue-400 transition ease-in-out duration-300"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

























































// import React from "react";

// const Contact = () => {
//     return (
//         <div
//             name="contact"
//             className="w-full h-[800px] bg-gradient-to-b from-black to-gray-800 p-4 text-white"
//         >
//             <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
//                 <div className="pb-8">
//                     <div className=' text-5xl pt-24 flex flex-col justify-center items-center font-bold text-red-500'>
//                         <h1 className='border-b-4 border-dotted px-6 py-2'>Contact <span className='animate-pulse' >🤝</span> </h1>
//                     </div>
//                     <p className="py-6">Submit the form below to get in touch with me</p>
//                 </div>

//                 <div className=" flex justify-center items-center">
//                     <form
//                         action="https://getform.io/f/bxojooza"
//                         method="POST"
//                         className=" flex flex-col w-full md:w-1/2"
//                     >
//                         <input
//                             type="text"
//                             name="name"
//                             placeholder="Enter your name"
//                             className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
//                         />
//                         <input
//                             type="text"
//                             name="email"
//                             placeholder="Enter your email"
//                             className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
//                         />
//                         <textarea
//                             name="message"
//                             placeholder="Enter your message"
//                             rows="10"
//                             className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
//                         ></textarea>

//                         <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
//                             Let's talk
//                         </button>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Contact;