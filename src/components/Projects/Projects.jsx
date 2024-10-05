import React from "react";

const Projects = () => {
  const projectData = [
    {
      title: "Socify",
      description:
        "A social media application that allows users to create, edit, and delete posts. Users can also like and comment on posts.",
      imageUrl:
        "https://cdn.dribbble.com/users/545884/screenshots/2567183/socify-login_2x.jpg",
      link: "https://1amazrael.github.io/socify/", 
    },
    {
      title: "CodeX",
      description: "A digital platform to learn HTML, CSS, and JavaScript.",
      imageUrl:
        "https://images.squarespace-cdn.com/content/v1/5a32ae139f07f50bae6c69ef/1720524668738-403M1391R675I4JFC403/image-asset.jpeg",
      link: "https://1amazrael.github.io/codex/",
    },
    {
      title: "Code Editor",
      description: "A code editor that allows you to write and run code.",
      imageUrl:
        "https://undsgn.com/wp-content/uploads/2018/02/image009.jpg",
      link: "https://code-editor.sangambakhunchhe.com.np/", 
    },
    {
      title: "AniAny",
      description:
        "A website that allows users to search for anime and view information about it.",
      imageUrl:
        "https://www.re-thinkingthefuture.com/architectural-community/a10780-anime-fandom-and-online-communities/attachment/a10780-anime-fandom-and-online-communities-11/",
      link: "https://anianime.com", 
    },
  ];

  return (
    <div className="  w-full py-16 px-4 bg-[#161616] text-white" id="projects">
      <div className="max-w-[1400px] mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-teal-400 mb-8">
          My Projects
        </h2>
        <p className="text-lg text-gray-300 mb-16">
          Here are some of the projects I have worked on:
        </p>

       
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
          {projectData.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-[#2a2a2a] rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
            >
             
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-40 object-cover filter grayscale group-hover:filter-none transition duration-100"
              />
              
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-teal-400 transition">
                  {project.title}
                </h3>
                <p className="text-gray-400">{project.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
