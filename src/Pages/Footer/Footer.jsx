import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        {/* Brand/Logo Section */}
        <div className="mb-6 md:mb-0">
          <h2 className="text-3xl font-bold">Chan Badsha Bhuiyan</h2>
          <p className="text-sm">Portfolio &amp; Web Development</p>
        </div>
        {/* Social Media Links */}
        <div className="flex space-x-6">
          <a
            href="https://github.com/Chanbadsha"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors duration-200"
          >
            <i className="fab fa-github fa-lg"></i>
          </a>
          <a
            href="https://linkedin.com/in/chanbadsha"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors duration-200"
          >
            <i className="fab fa-linkedin fa-lg"></i>
          </a>
          <a
            href="https://twitter.com/chanbadsha"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors duration-200"
          >
            <i className="fab fa-twitter fa-lg"></i>
          </a>
          <a
            href="mailto:contact@chanbadshabhuiyan.netlify.app"
            className="text-gray-400 hover:text-white transition-colors duration-200"
          >
            <i className="fas fa-envelope fa-lg"></i>
          </a>
        </div>
      </div>
      {/* Copyright */}
      <div className="mt-8 border-t border-gray-800 pt-4">
        <p className="text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Chanbadsha Bhuiyan. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
