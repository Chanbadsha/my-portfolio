import React from "react";
import Container from "../../Hooks/Container";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const navOptions = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `px-4 py-2 rounded-lg ${
              isActive
                ? "text-white bg-gradient-to-r from-purple-500 to-indigo-500"
                : "hover:text-purple-500 transition duration-300"
            }`
          }
        >
          Home
        </NavLink>
      </li>
      {["About", "Skills", "Projects", "Contact"].map((item, index) => (
        <li key={index}>
          <NavLink
            to={`/${item.toLowerCase()}`}
            className={({ isActive }) =>
              `px-4 py-2 rounded-lg ${
                isActive
                  ? "text-white bg-gradient-to-r from-purple-500 to-indigo-500"
                  : "hover:text-purple-500 transition duration-300"
              }`
            }
          >
            {item}
          </NavLink>
        </li>
      ))}
    </>
  );

  return (
    <div className=" fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-gray-800 to-gray-900 text-white">
      <Container>
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <button
                tabIndex={0}
                className="btn btn-ghost lg:hidden flex items-center"
                aria-label="Open menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </button>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-white text-gray-800 rounded-box z-50 mt-3 w-52 p-2 shadow-lg"
              >
                {navOptions}
              </ul>
            </div>
            <Link to="/">
              <img
                className="rounded-full w-16 h-16 transition-transform hover:scale-110"
                src={logo}
                alt="Logo"
              />
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal space-x-4">{navOptions}</ul>
          </div>
          <div className="navbar-end">
            <Link
              to="/contact"
              className="btn bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-6 py-2 rounded-lg shadow-lg hover:shadow-xl hover:from-indigo-500 hover:to-purple-500 transition-transform duration-300"
            >
              Hire Me
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
