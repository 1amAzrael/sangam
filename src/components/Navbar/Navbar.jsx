import React from "react";
import { Link } from "react-scroll";



const Navbar = () => {
  
  return (
    <div className="bg-[#161616] text-white fixed w-full z-50 shadow-lg">
      <div className="max-w-[1400px] mx-auto px-2 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          Sangam <span className="text-teal-400">Bakhunchhe</span>
        </h1>
        

          <div className="hidden md:flex space-x-8">
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="hover:text-teal-400 cursor-pointer"
            >
              Home
            </Link>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="hover:text-teal-400 cursor-pointer"
            >
              About
            </Link>
            <Link
              to="services"
              smooth={true}
              duration={500}
              className="hover:text-teal-400 cursor-pointer"
            >
              Services
            </Link>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="hover:text-teal-400 cursor-pointer"
            >
              Projects
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="hover:text-teal-400 cursor-pointer"
            >
              Contact
            </Link>
            <div className="hidden md:block">
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="bg-teal-500 text-gray-800 py-2 px-4 rounded hover:bg-gray-800 hover:text-teal-500 transition duration-300 cursor-pointer"
              >
                Hire Me
              </Link>
            </div>
          </div>
       

        <div className="md:hidden">
          <button className="focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
