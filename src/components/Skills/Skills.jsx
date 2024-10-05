import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiExpress, SiCsharp, SiAdobeillustrator } from "react-icons/si";

const Skills = () => {
  return (
    <div className="w-full py-16 px-4 bg-[#161616] text-white" id="skills">
      <div className="max-w-[1400px] mx-auto text-center">
      
        <h2 className="text-4xl md:text-5xl font-bold text-teal-400 mb-8">
          My Skills
        </h2>
        <p className="text-lg text-gray-300 mb-16">
          Here are some of the technologies I have worked with:
        </p>

       
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-12">
        
          <div className="flex flex-col items-center">
            <FaHtml5 className="w-16 h-16 mb-4 fill-orange-500" />
            <h3 className="text-xl font-semibold">HTML</h3>
          </div>

          <div className="flex flex-col items-center">
            <FaCss3Alt className="w-16 h-16 mb-4 fill-blue-500" />
            <h3 className="text-xl font-semibold">CSS</h3>
          </div>

          <div className="flex flex-col items-center">
            <FaJs className="w-16 h-16 mb-4 fill-yellow-500" />
            <h3 className="text-xl font-semibold">JavaScript</h3>
          </div>

          <div className="flex flex-col items-center">
            <SiTailwindcss className="w-16 h-16 mb-4 fill-teal-500" />
            <h3 className="text-xl font-semibold">Tailwind CSS</h3>
          </div>

          <div className="flex flex-col items-center">
            <FaReact className="w-16 h-16 mb-4 fill-blue-300" />
            <h3 className="text-xl font-semibold">React</h3>
          </div>

          <div className="flex flex-col items-center">
            <FaNodeJs className="w-16 h-16 mb-4 fill-green-500" />
            <h3 className="text-xl font-semibold">Node.js</h3>
          </div>

          <div className="flex flex-col items-center">
            <SiExpress className="w-16 h-16 mb-4 fill-gray-300" />
            <h3 className="text-xl font-semibold">Express</h3>
          </div>

          <div className="flex flex-col items-center">
            <SiMongodb className="w-16 h-16 mb-4 fill-green-400" />
            <h3 className="text-xl font-semibold">MongoDB</h3>
          </div>

          <div className="flex flex-col items-center">
            <SiCsharp className="w-16 h-16 mb-4 fill-purple-500" />
            <h3 className="text-xl font-semibold">C# (Beginner)</h3>
          </div>

          
          <div className="flex flex-col items-center">
            <SiAdobeillustrator className="w-16 h-16 mb-4 fill-orange-600" />
            <h3 className="text-xl font-semibold">Adobe Illustrator</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
