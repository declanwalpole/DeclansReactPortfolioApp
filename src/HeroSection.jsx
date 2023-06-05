import React from "react";

const HeroSection = ({ id }) => {
  return (
    <div className="hero-section" id={id}>
      <div className="hero-content">
        <h1>Hey, I'm Declan Walpole</h1>
        <h3>
          Full stack developer making career change after having worked in
          analytics and strategy
        </h3>
        <h3>
          Sydney, Australia {"\u2192"} Denver CO {"\u2192"} Minneapolis MN
        </h3>
        <div className="hero-cta">
          <a href="#projects">Projects</a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
