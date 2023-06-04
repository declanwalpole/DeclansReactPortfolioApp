import React from "react";

const HeroSection = ({ id }) => {
  return (
    <div className="hero-section" id={id}>
      <div className="hero-content">
        <h1>Hey, I'm Declan Walpole</h1>
        <h2>
          Full stack developer making career change after having worked in
          analytics and strategy
        </h2>
        <div className="hero-cta">
          <a href="#projects">Projects</a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
