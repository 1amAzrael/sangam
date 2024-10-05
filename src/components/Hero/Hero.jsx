import React from "react";
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <div className="  flex items-center justify-between h-screen px-4 md:px-16 bg-[#181818] " id="home">
    
    <div className="max-w-[600px] text-left space-y-4">
      <h1 className="text-5xl md:text-6xl font-bold text-white">
        Hello!!
      </h1>
      <p className="mt-4 text-lg md:text-xl text-gray-300">
        I'm Sangam Bakhunchhe, a full-stack web developer with a passion for
        creating dynamic and beautiful web applications.
      </p>
      <div className="mt-6">
      <Link 
            to="projects" 
            smooth={true} 
            duration={500} 
            className="bg-teal-500 text-gray-800 py-3 px-6 rounded hover:bg-gray-800 hover:text-teal-500 transition duration-300 cursor-pointer"
          >
            View My Work
          </Link>
      </div>
    </div>

   
    <div className="hidden md:block">
      <img
        src="/prof.png"
        alt="Hero"
        className="md:w-[550px] h-[550px] rounded-lg bg-cover "
      />
    </div>
  </div>
  );
};

export default Hero;
