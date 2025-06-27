import React from 'react';
import Navbar from '../Components/Navbar';

const Home = () => {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-900 py-6 px-4 sm:px-6 md:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center text-blue-500">
          About Me
        </h1>

        <div className="max-w-5xl mx-auto shadow-md rounded-2xl p-4 sm:p-6 md:p-8 bg-gray-800">
          <p className="text-base sm:text-lg md:text-xl text-white font-sans shadow-inner p-4 rounded-md leading-relaxed mb-6 hover:shadow-blue-300 transition-all duration-300 ease-in-out">
            I'm a passionate web developer with a Bachelor's degree in Computer Applications (BCA) from{' '}
            <b>Poddar International College</b>, affiliated with the <b>University of Rajasthan</b>. I’ve gained
            hands-on experience as a MERN Stack Developer Intern at <b>Regex Software Services</b>, where I built
            responsive, dynamic applications using modern tools like React, Node.js, and MongoDB. I'm always excited
            to learn, build, and grow in the tech space.
          </p>

          <div className="mb-6  p-4 rounded-md  shadow-sm shadow-blue-300 ">
            <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-2">🎓 Education</h2>
            <p className="text-base sm:text-lg text-white">
              BCA – Poddar International College, University of Rajasthan
            </p>
          </div>

          <div className="mt-8  p-4 rounded-md shadow-sm shadow-blue-300">
            <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-2">💼 Internship</h2>
            <p className=" sm:text-lg text-white">
              MERN Stack Developer Intern at <strong>Regex Software Services</strong>
              <br />
              Worked on real-world projects using technologies like React.js, Node.js, Express.js, and MongoDB.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
