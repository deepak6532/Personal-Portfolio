import React, { useState } from 'react';
import deepak from "../assets/logo.jpg";
import { Link } from 'react-router-dom';


const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            <nav className="bg-gray-800 w-full p-4 flex items-center justify-around text-white ">
               
                <div className="flex items-center space-x-4">
                    <img
                        src={deepak}
                        className="w-13 h-12 object-fit hover:scale-102 transition duration-300  rounded-full shadow shadow-amber-100"
                        alt="Deepak"
                    />
                    <div>
                        <h1 className="text-xl font-bold">Deepak Gupta</h1>
                        <h2 className="text-sm">Web Developer</h2>
                    </div>
                </div>

               
                <div className="hidden md:flex text-lg font-semibold space-x-8">
                     <p className="hover:text-blue-400 transition duration-300 cursor-pointer"> <Link to="/home">Home </Link></p>
                    <p   className="hover:text-blue-400 transition duration-300 cursor-pointer">
                        <Link to="/about">About </Link></p>
                   
                    <p className="hover:text-blue-400 transition duration-300 cursor-pointer"> <Link to="/skills">Skills </Link></p>
                    <p className="hover:text-blue-400 transition duration-300 cursor-pointer"><Link to="/project">Project</Link></p>
                    <p className="hover:text-blue-400 transition duration-300 cursor-pointer"><Link to="/contact">Contact</Link></p>
                </div>

                {/* Hamburger Button */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            {menuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden bg-gray-800 text-white py-2 px-4 pb-4 space-y-2 font-semibold">
                    <p className="hover:text-blue-400 transition duration-300 cursor-pointer"> <Link to="/home">Home </Link></p>
                    <p className="hover:text-blue-400 transition duration-300 cursor-pointer"><Link to="/about">About </Link></p>
                    <p className="hover:text-blue-400 transition duration-300 cursor-pointer"><Link to="/skills">Skills </Link></p>
                    <p className="hover:text-blue-400 transition duration-300 cursor-pointer"><Link to="/project">Project</Link></p>
                    <p className="hover:text-blue-400 transition duration-300 cursor-pointer"><Link to="/contact">Contact</Link></p>
                </div>
            )}
        </>
    );
};

export default Navbar;
