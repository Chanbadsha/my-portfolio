import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className=" py-16 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
          About Me
        </h1>
        <p className="text-gray-600 md:text-lg max-w-3xl mx-auto">
          Welcome to my personal space! I’m a passionate learner and aspiring
          web developer, constantly exploring new tools and technologies to
          build impactful solutions.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <img
            src="https://i.ibb.co.com/DtYNj8G/Badsha-removebg-preview.png" // Replace with your image URL
            alt="About me"
            className="rounded-lg shadow-md"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            A Little More About Me
          </h2>
          <p className="text-gray-600 mb-4">
            Hi, I’m{" "}
            <span className="font-semibold text-gray-800">Chan Badsha</span>, a
            20-year-old enthusiastic web developer. I’m currently learning web
            development while balancing my academic commitments.
          </p>
          <p className="text-gray-600 mb-4">
            I specialize in building responsive, user-friendly websites and
            applications, using tools like{" "}
            <span className="font-medium text-blue-500">React.js</span>,{" "}
            <span className="font-medium text-blue-500">Node.js</span>,{" "}
            <span className="font-medium text-blue-500">MongoDB</span>, and{" "}
            <span className="font-medium text-blue-500">Tailwind CSS</span>.
          </p>
          <p className="text-gray-600 mb-4">
            My goal is to become a proficient full-stack developer and create
            meaningful projects that make a difference in people’s lives. I also
            enjoy collaborating with like-minded individuals to share ideas and
            grow together.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition-transform transform hover:scale-105"
          >
            Contact Me
          </Link>
        </div>
      </div>
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
          Highlights of My Journey
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Passion for Web Development
            </h3>
            <p className="text-gray-600">
              I thrive on building user-friendly, responsive web applications
              with clean designs and efficient code.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Lifelong Learner
            </h3>
            <p className="text-gray-600">
              Whether it's learning a new programming language or exploring
              advanced frameworks, I’m always eager to grow.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Team Player
            </h3>
            <p className="text-gray-600">
              Collaboration is key! I enjoy working with diverse teams to tackle
              challenges and achieve shared goals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
