import React from 'react';
import resume from "../assets/resume.pdf";
import logo from "../assets/logo.jpg";

import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
const Main = () => {
    return (
        <div className="bg-gray-900 min-h-screen p-6 flex flex-col md:flex-row items-center justify-evenly gap-8">
           
           <div className="flex flex-row md:flex-col gap-12  text-3xl items-center md:gap-6 p-4 ">
                
                <a href="https://www.facebook.com/"
                target="_blank"
                    className="text-2xl text-white hover:text-blue-400 mt-3 shadow-sm shadow-blue-400 transition duration-300  rounded"><FaFacebook /></a>
                    
                <a href="https://www.linkedin.com/in/deepak-gupta-6a38a2291/"
                    className="text-2xl text-white hover:text-blue-400  mt-3 shadow-sm shadow-blue-400  transition duration-300 rounded "><FaLinkedin /></a>
                
                <a href="https://github.com/deepak6532/"
                    className="text-2xl text-white hover:text-blue-400  mt-3 shadow-sm shadow-blue-400  transition duration-300 rounded "><FaGithubSquare /></a>
                <a href="https://x.com/home/"
                    className="text-2xl text-white hover:text-blue-400  mt-3 shadow-sm shadow-blue-400 transition duration-300 rounded"><FaSquareXTwitter /></a>
                    
                    
            </div>

           
            {/* left */}
            <div className="max-w-xl w-full space-y-6">

                
                <h1 className="text-2xl text-white font-bold font-sans ">
                    Hi! I Am <span className="text-[#5db9ee] font-bold">Deepak Gupta</span>
                </h1>

                <h1
                    className="text-4xl md:text-6xl text-[#5db9ee] font-bold"
                    style={{ textShadow: '1px 1px 2px #5db9ee' }}
                >
                    Web Developer.
                </h1>

                <p className="text-white text-base md:text-lg leading-relaxed font-sans">
                    I specialize in building full-stack web applications using the MERN stack (MongoDB,
                    Express.js, React.js, Node.js). Passionate about creating scalable, user-friendly
                    solutions with clean code and responsive design.
                </p>

                <div>
                    <a href={resume} download
                        className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-5 rounded transition duration-300"
                    >
                    Resume
                    </a>
                </div>
            </div>

            {/* Right Content */}
            <div className="w-64 h-64 md:w-80 md:h-80 border-8 border-white rounded-full overflow-hidden flex items-center justify-center shadow-lg shadow-blue-700">
                <img
                    src={logo}
                    alt="Profile"
                    className="w-full h-full hover:scale-104 transition duration-200 object-cover rounded-full shadow-lg shadow-blue-900"
                />
            </div>


        </div>
    );
};

export default Main;
