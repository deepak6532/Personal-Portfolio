import React from 'react';
import Navbar from '../Components/Navbar';

let language = ["C", "C++", "Python", "SQL", "HTML", "CSS", "Tailwind Css","JavaScript", "React", "Node.js","Express.js"]
let database = ["MySql","MongoDb"]
let tools = ["VS Code", "Jupyter Notebook", "SQL Workbench", "Dev C++","Postman"]


const Skills = () => {
  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-gray-900 text-white py-10 px-6">
      <h1 className="text-4xl font-bold text-blue-500 text-center mb-10">💻 My Skills</h1>

     
    {/*language  */}
      <div className="max-w-4xl mx-auto mb-12 ">
        <h2 className="text-2xl font-semibold mb-4 text-white"> Programming & Web Technologies</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {
            language.map((skill, index) => (
            <div key={index}
              className="bg-gray-800 p-4 rounded-lg text-center shadow hover:shadow-blue-400 transition duration-300 "
              >
              {skill}
            </div>
          ))}
        </div>
      </div>

      {/* database */}

      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-semibold mb-4 text-white">DataBase</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {
                database.map((d,index)=>(
                    <div key={index}
                    className="bg-gray-800 p-4 rounded-lg text-center shadow hover:shadow-blue-400 transition duration-300"
                    >
                    {d}
                    </div>
                ))
            }
        </div>
      </div>

     {/* tool */}
      <div className="max-w-4xl mt-8 mx-auto">
        <h2 className="text-2xl font-semibold mb-4 text-white">🛠️ Tools & Software</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {  tools.map((tool, index) => (
            <div
              key={index}
              className="bg-gray-800 p-4 rounded-lg text-center shadow hover:shadow-blue-400 transition duration-300"
            >
              {tool}
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default Skills;
