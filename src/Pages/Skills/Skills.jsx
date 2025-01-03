import React from "react";
import { FaGithub, FaNodeJs } from "react-icons/fa";
import { IoLogoCss3, IoLogoHtml5, IoLogoJavascript } from "react-icons/io";
import { IoLogoFirebase, IoLogoReact } from "react-icons/io5";
import { RiTailwindCssLine } from "react-icons/ri";
import { SiDaisyui, SiFirebase, SiMongodb } from "react-icons/si";

const Skills = () => {
  return (
    <div className=" max-w-7xl mx-auto py-16 px-6 md:px-12">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          My Skills
        </h2>
        <p className="text-gray-500 mt-2 text-sm md:text-base">
          A passionate and results-oriented Full-Stack Developer with a strong
          foundation in frontend technologies and a growing understanding of
          backend concepts. I'm proficient in building dynamic, user-friendly,
          and performant web applications.
        </p>
      </div>

      {/* Skill Section */}
      <div className="grid text-center grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
        {/* Individual Skill (Example with enhanced description) */}

        <div className="flex w-full flex-col items-center bg-white border-2 border-yellow-500 shadow-xl rounded-lg p-6 hover:bg-yellow-100 hover:shadow-2xl hover:scale-105 transition-all duration-300">
          <IoLogoJavascript className="text-6xl text-yellow-500 mb-4" />
          <p className="text-gray-700 font-semibold">JavaScript</p>
          <p className="text-xs text-gray-500">
            ES6+, DOM Manipulation, Asynchronous Programming (Promises,
            async/await)
          </p>
        </div>

        <div className="flex w-full flex-col items-center bg-white border-2 border-blue-500 shadow-xl rounded-lg p-6 hover:bg-blue-100 hover:shadow-2xl hover:scale-105 transition-all duration-300">
          <IoLogoHtml5 className="text-6xl text-blue-500 mb-4" />
          <p className="text-gray-700 font-semibold">HTML</p>
          <p className="text-xs text-gray-500">
            Semantic HTML, Accessibility (ARIA attributes)
          </p>
        </div>

        <div className="flex w-full flex-col items-center bg-white border-2 border-blue-400 shadow-xl rounded-lg p-6 hover:bg-blue-50 hover:shadow-2xl hover:scale-105 transition-all duration-300">
          <IoLogoCss3 className="text-6xl text-blue-400 mb-4" />
          <p className="text-gray-700 font-semibold">CSS</p>
          <p className="text-xs text-gray-500">
            CSS3, Flexbox, Grid, Responsive Design
          </p>
        </div>

        <div className="flex w-full flex-col items-center bg-white border-2 border-yellow-400 shadow-xl rounded-lg p-6 hover:bg-yellow-100 hover:shadow-2xl hover:scale-105 transition-all duration-300">
          <RiTailwindCssLine className="text-6xl text-yellow-400 mb-4" />
          <p className="text-gray-700 font-semibold">Tailwind CSS</p>
          <p className="text-xs text-gray-500">Utility-first CSS Framework</p>
        </div>

        <div className="flex w-full flex-col items-center bg-white border-2 border-yellow-300 shadow-xl rounded-lg p-6 hover:bg-yellow-50 hover:shadow-2xl hover:scale-105 transition-all duration-300">
          <SiDaisyui className="text-6xl text-yellow-300 mb-4" />
          <p className="text-gray-700 font-semibold">Daisy UI</p>
          <p className="text-xs text-gray-500">React UI Component Library</p>
        </div>

        <div className="flex w-full flex-col items-center bg-white border-2 border-blue-400 shadow-xl rounded-lg p-6 hover:bg-blue-50 hover:shadow-2xl hover:scale-105 transition-all duration-300">
          <IoLogoReact className="text-6xl text-blue-400 mb-4" />
          <p className="text-gray-700 font-semibold">React.js</p>
          <p className="text-xs text-gray-500">
            Functional and Class Components, Hooks (useState, useEffect),
            Routing
          </p>
        </div>

        <div className="flex w-full flex-col items-center bg-white border-2 border-yellow-500 shadow-xl rounded-lg p-6 hover:bg-yellow-100 hover:shadow-2xl hover:scale-105 transition-all duration-300">
          <SiFirebase className="text-6xl text-yellow-400 mb-4" />
          <p className="text-gray-700 font-semibold">Firebase</p>
          <p className="text-xs text-gray-500">
            Firestore, Authentication, Cloud Functions
          </p>
        </div>

        <div className="flex w-full flex-col items-center bg-white border-2 border-green-500 shadow-xl rounded-lg p-6 hover:bg-green-50 hover:shadow-2xl hover:scale-105 transition-all duration-300">
          <SiMongodb className="text-6xl text-green-500 mb-4" />
          <p className="text-gray-700 font-semibold">MongoDB</p>
          <p className="text-xs text-gray-500">NoSQL Database, Data Modeling</p>
        </div>

        <div className="flex w-full flex-col items-center bg-white border-2 border-green-400 shadow-xl rounded-lg p-6 hover:bg-green-100 hover:shadow-2xl hover:scale-105 transition-all duration-300">
          <FaNodeJs className="text-6xl text-green-400 mb-4" />
          <p className="text-gray-700 font-semibold">Node.js</p>
          <p className="text-xs text-gray-500">
            Server-side JavaScript, Express.js
          </p>
        </div>
        <div className="flex text-center w-full flex-col items-center bg-white border-2 border-gray-800 shadow-xl rounded-lg p-6 hover:bg-gray-100 hover:shadow-2xl hover:scale-105 transition-all duration-300">
          <FaGithub className="text-6xl text-gray-800 mb-4" />
          <p className="text-gray-700 font-semibold">GitHub</p>
          <p className="text-xs text-gray-500">
            Version Control, Collaboration
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
