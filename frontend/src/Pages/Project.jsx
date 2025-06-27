import React from 'react';
import carrental from '../assets/carrental.png';
import Navbar from '../Components/Navbar';

const Project = () => {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-900 text-white py-10 px-4 sm:px-6 lg:px-12">
        <h1 className="text-4xl font-bold text-blue-500 text-center mb-10"> My Projects</h1>

        <div className="max-w-5xl mx-auto bg-gray-800 rounded-2xl shadow-lg overflow-hidden flex flex-col lg:flex-row shadow-md shadow-blue-400 ">
          {/* Image Section */}
          <div className="w-full lg:w-1/2 p-2 ">
            <img
              src={carrental}
              alt="Car Rental Project"
              className="w-full h-64 lg:h-full object-fit rounded-md"
            />
          </div>

          {/* Content Section */}
          <div className="w-full lg:w-1/2 p-6 flex flex-col justify-center">
            <h2 className="text-2xl font-semibold mb-3 text-white"> 🚗 Car Rental Web App</h2>
            <p className="text-gray-300 mb-5 text-base leading-relaxed">
              A full-stack car rental platform where users can view, book, and manage car reservations. 
              Built using <strong>React.js</strong> (frontend), <strong>Node.js</strong> & <strong>Express.js</strong> (backend), 
              and <strong>MongoDB</strong> for the database. The UI is fully responsive and designed with <strong>Tailwind CSS</strong>.
            </p>


            <div className="flex flex-col lg:flex-row items-center justify-start gap-8 w-full ">

                <a
              href="https://github.com/deepak6532/Car-Rental"
              target="_blank"  //new page open 
              className="px-2 py-2 bg-blue-600 hover:bg-blue-700 rounded text-white transition"
            >🔗 View on GitHub
            </a>

            <a
              href="https://carrental-dg.netlify.app/"
              target="_blank"  //(cars page not work because data fetch in backend)
              className="px-2 py-2 bg-blue-600 hover:bg-blue-700 rounded text-white transition"
            >🔗 Live Demo
            </a>

            </div>

            
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
