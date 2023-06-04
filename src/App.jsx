import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import About from "./About";
import Timeline from "./Timeline";
import Projects from "./Projects";
import Footer from "./Footer";
import "./styles.css";

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection id="hero" />
      <About id="about" />
      <Timeline id="resume" />
      <Projects id="projects" />
      <Footer id="footer" />
    </div>
  );
};

export default App;
