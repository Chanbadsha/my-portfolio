import React from "react";
import Hero from "../Hero/Hero";
import About from "../../About/About";
import Skills from "../../Skills/Skills";
import Contact from "../../Contact/Contact";
import Projects from "../../Projects/Projects";
import ProjectDetails from "../../Projects/ProjectDetails";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <Skills />
      <About></About>
      <Projects></Projects>
      <Contact></Contact>
    </div>
  );
};

export default Home;
