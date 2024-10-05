import React from "react";
import { FaLaptopCode, FaGamepad, FaDatabase } from "react-icons/fa";
import { SiAdobeillustrator } from "react-icons/si";

const Services = () => {
  return (
    <div className="w-full py-16 px-4 bg-[#1c1c1c] text-white" id="services">
      <div className="max-w-[1400px] mx-auto text-center">
       
        <h2 className="text-4xl md:text-5xl font-bold text-teal-400 mb-8">
          My Services
        </h2>
        <p className="text-lg text-gray-300 mb-16">
          I offer a wide range of services that leverage my expertise and passion in different areas of software and design.
        </p>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
         
          <div className="p-6 bg-[#2a2a2a] rounded shadow-lg hover:shadow-xl transition duration-300">
            <FaLaptopCode className="w-16 h-16 mb-4 text-teal-400 mx-auto" />
            <h3 className="text-2xl font-semibold mb-2">Web Development</h3>
            <p className="text-gray-400">
              Creating dynamic, responsive, and user-friendly websites using technologies like React, Node.js, Tailwind, and more.
            </p>
          </div>

          <div className="p-6 bg-[#2a2a2a] rounded shadow-lg hover:shadow-xl transition duration-300">
            <FaGamepad className="w-16 h-16 mb-4 text-purple-400 mx-auto" />
            <h3 className="text-2xl font-semibold mb-2">Game Development</h3>
            <p className="text-gray-400">
              Beginner-level game development with Unity and C#, creating interactive and engaging experiences.
            </p>
          </div>

          <div className="p-6 bg-[#2a2a2a] rounded shadow-lg hover:shadow-xl transition duration-300">
            <SiAdobeillustrator className="w-16 h-16 mb-4 text-orange-600 mx-auto" />
            <h3 className="text-2xl font-semibold mb-2">Graphics Designing</h3>
            <p className="text-gray-400">
              Designing stunning visuals and branding materials using Adobe Illustrator for your creative needs.
            </p>
          </div>

          <div className="p-6 bg-[#2a2a2a] rounded shadow-lg hover:shadow-xl transition duration-300">
            <FaDatabase className="w-16 h-16 mb-4 text-green-400 mx-auto" />
            <h3 className="text-2xl font-semibold mb-2">API & Database Handling</h3>
            <p className="text-gray-400">
              Creating robust APIs and managing databases efficiently with technologies like Express and MongoDB.
            </p>
          </div>

        
          
        </div>
      </div>
    </div>
  );
};

export default Services;
