import React from "react";
import { useParams } from "react-router-dom";

const ProjectDetails = () => {
  const { id } = useParams();

  const projects = [
    {
      id: 1,
      title: "GlobalGate",
      description: `Global Gate is a modern web application built to bridge international boundaries and foster global connectivity. Designed with a user-centric approach, the platform serves as a hub where individuals, professionals, and communities can communicate, collaborate, and share resources seamlessly. By integrating real-time data and a responsive design, Global Gate offers a dynamic digital space that adapts to diverse user needs across the globe.Whether you’re looking to network with professionals, participate in global discussions, or collaborate on international projects, Global Gate is designed to make global interactions more accessible and meaningful.`,
      features: [
        "Multi-Language Support",
        "Interactive Global Map",
        "Real-Time Communication",
        "Community Forums",
      ],
      challenges:
        "Managing complex state in React and integrating multiple backend services for real-time data synchronization were major challenges during development.",
      futurePlans:
        "Future improvements include adding more language support, integrating AI-driven recommendations, and launching a mobile app version for enhanced accessibility.",
      technologies: [
        "React.js",
        "Tailwind CSS",
        "Node.js",
        "MongoDB",
        "Firebase",
      ],
      liveLink: "https://gloabal-gate-a10.web.app",
      githubLink: "https://github.com/Chanbadsha/GlobalGate",
    },
    {
      id: 2,
      title: "Bongo Learn",
      description: `Bongo Learn is an interactive vocabulary learning platform designed to make language acquisition both fun and effective. Tailored for learners at all levels, the application offers a personalized learning experience that adapts to each user's pace and style. Key features include:

Personalized Word Lists: Users can build and customize their vocabulary collections, ensuring that learning is tailored to their interests and proficiency level.
Interactive Quizzes: Engaging, game-like quizzes challenge users and help reinforce word recognition and retention.
Progress Tracking: Detailed analytics and progress reports keep learners informed about their improvements, highlighting areas of strength and opportunities for further practice.
User-Friendly Interface: A modern and intuitive design ensures that users can navigate the platform easily, making the learning process smooth and enjoyable.
By combining robust educational tools with an engaging user experience, Bongo Learn aims to transform vocabulary learning into an accessible, interactive, and rewarding journey. Whether you're a beginner or looking to expand your language skills, Bongo Learn is your go-to platform for achieving linguistic proficiency.`,
      features: [
        "Personalized Word Lists",
        "Progress Tracking",
        "Interactive Quizzes",
        "Engaging User Interface",
      ],
      challenges:
        "One of the main challenges was ensuring that the personalized learning algorithms accurately adapt to each user's pace and style while maintaining an engaging interface.",
      futurePlans:
        "Future updates include incorporating gamification elements, adding support for additional languages, and enhancing analytics for better user performance tracking.",
      technologies: [
        "React.js",
        "Tailwind CSS",
        "Node.js",
        "MongoDB",
        "Firebase",
      ],
      liveLink: "https://bongo-learn-63c73.web.app",
      githubLink: "https://github.com/Chanbadsha/Bongo-Learn",
    },
    {
      id: 3,
      title: "Legacy Library",
      description:
        "Legacy Library is an online platform designed to cater to both passionate bibliophiles and casual readers by providing a seamless and engaging experience for exploring a vast collection of books. The platform transforms the traditional act of reading into an interactive journey, allowing users to effortlessly browse through a diverse range of literary works while managing personal reading lists and discovering new favorites. With its intuitive interface and robust search capabilities, users can easily locate titles that pique their interest, delve into community-driven reviews and ratings, and curate a personalized collection that reflects their unique tastes. Moreover, its responsive design ensures that the experience remains smooth and accessible across various devices, making Legacy Library the ideal destination for anyone looking to immerse themselves in the timeless world of literature.",
      features: [
        "Book Exploration",
        "Favorites Management",
        "Reading List Tracking",
        "User Reviews & Ratings",
      ],
      challenges:
        "Integrating a smooth search experience and ensuring fast load times for high-resolution book covers were some of the significant challenges faced during development.",
      futurePlans:
        "Plans for the future include adding social sharing features, integrating advanced search filters, and developing a recommendation engine based on user preferences.",
      technologies: [
        "React.js",
        "Tailwind CSS",
        "Node.js",
        "MongoDB",
        "Firebase",
      ],
      liveLink: "https://legacylibrary-906c1.web.app",
      githubLink: "https://github.com/Chanbadsha/Legacy-Library",
      image: "https://i.ibb.co.com/c1SX1fW/image.png",
    },
  ];

  const project = projects.find((proj) => proj.id === parseInt(id));

  // If no project is found, you can optionally render a "Not Found" message
  if (!project) {
    return (
      <div className="max-w-7xl mx-auto py-16 px-6 md:px-12">
        <h2 className="text-3xl font-bold text-gray-800">Project Not Found</h2>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto py-16 px-6 md:px-12">
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-3xl font-bold text-gray-800">{project.title}</h2>
        <p className="mt-4 text-gray-600">{project.description}</p>

        {/* Features Section */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold text-gray-800">Features</h3>
          <ul className="list-disc list-inside mt-2 text-gray-600">
            {project.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>

        {/* Technologies Section */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold text-gray-800">Technologies</h3>
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

        {/* Challenges Section */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold text-gray-800">
            Challenges Faced
          </h3>
          <p className="mt-2 text-gray-600">{project.challenges}</p>
        </div>

        {/* Future Plans Section */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold text-gray-800">Future Plans</h3>
          <p className="mt-2 text-gray-600">{project.futurePlans}</p>
        </div>

        {/* Links */}
        <div className="mt-8 flex space-x-4">
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Live Project
          </a>
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white bg-gray-800 px-4 py-2 rounded-lg hover:bg-gray-900"
          >
            GitHub Repo
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
