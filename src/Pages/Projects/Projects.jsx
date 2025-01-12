import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "GlobalGate",
    description:
      "A comprehensive visa servicing platform offering application tracking, consultation booking, and up-to-date visa requirements for global destinations.",
    technologies: [
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "MongoDB",
      "Firebase",
    ],
    image: "https://i.ibb.co.com/GJYLHhq/image.png", // Replace with the actual project image link
    liveLink: "https://gloabal-gate-a10.web.app", // Replace with the live link of GlobalGate
    githubLink: "https://github.com/username/globalgate", // Replace with the GitHub repository link
  },
  {
    title: "Bongo Learn",
    description:
      "An interactive vocabulary learning platform designed to make language learning fun and engaging. Includes features like personalized word lists and progress tracking.",
    technologies: [
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "MongoDB",
      "Firebase",
    ],
    image: "https://i.ibb.co.com/cyd00Cz/image.png", // Replace with a relevant project image link
    liveLink: "https://bongo-learn-63c73.web.app",
    githubLink: "https://github.com/username/bongo-learn",
  },
  {
    title: "Legacy Library",
    description:
      "An online library platform that allows users to explore books, add to favorites, and manage a reading list.",
    technologies: [
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "MongoDB",
      "Firebase",
    ],
    image: "https://i.ibb.co.com/c1SX1fW/image.png", // Replace with project image link
    liveLink: "https://legacylibrary-906c1.web.app",
    githubLink: "https://github.com/username/legacy-library",
  },
];

const Projects = () => {
  return (
    <div className="bg-gray-50">
      <div className=" max-w-7xl mx-auto py-16 px-6 md:px-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            My Projects
          </h2>
          <p className="text-gray-500 mt-2">
            Explore some of the exciting projects I’ve created, showcasing
            creativity, functionality, and my expertise in modern web
            development technologies.
          </p>
        </div>

        {/* Projects Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col bg-white border-2 border-gray-200 shadow-lg rounded-lg overflow-hidden hover:shadow-2xl hover:scale-105 transition-transform duration-300"
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={`Image for ${project.title}`}
                className="w-full h-48 object-cover"
              />

              {/* Project Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-800">
                  {project.title}
                </h3>
                <p className="text-gray-600 mt-2 flex-grow">
                  {project.description}
                </p>
                <div className="mt-4">
                  <p className="text-sm font-semibold text-gray-800">
                    Technologies:
                  </p>
                  <ul className="flex flex-wrap gap-2 mt-2">
                    {project.technologies.map((tech, techIndex) => (
                      <li
                        key={techIndex}
                        className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-lg"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-center mt-4 space-x-4">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-white bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600 text-sm"
                  >
                    Live Site <FaExternalLinkAlt className="ml-1" />
                  </a>
                  <p
                    //   href={project.githubLink}
                    //   target="_blank"
                    //   rel="noopener noreferrer"
                    className="flex items-center text-white bg-gray-800 px-4 py-2 rounded-lg hover:bg-gray-900 text-sm"
                  >
                    GitHub <FaGithub className="ml-1" />
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
