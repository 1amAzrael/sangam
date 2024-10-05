import React from "react";


const About = () => {
  return (
    <div className="w-full py-16 px-4 bg-[#222222] text-white " id="about">
      <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-8 items-center">
        
      <div className="flex justify-center">
          <img
            src="/prof.png"
            alt="Profile"
            className="w-[300px] h-[300px] "
          />
        </div>
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-teal-400">
            About Me
          </h2>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            Hello! I'm Sangam Bakhunchhe, a full-stack web developer with a
            passion for building responsive and dynamic web applications. With a
            strong foundation in both front-end and back-end development, I
            strive to create seamless user experiences and robust applications.
          </p>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            I love solving problems, learning new technologies, and constantly
            challenging myself to improve. I have experience working with
            JavaScript, React, Node.js, and a variety of other technologies.
          </p>
          <button className="bg-teal-500 text-gray-800 py-3 px-6 rounded hover:bg-gray-800 hover:text-teal-500 transition duration-300">
            Download My Resume
          </button>
        </div>

       
    
      </div>
    </div>
  );
};

export default About;
