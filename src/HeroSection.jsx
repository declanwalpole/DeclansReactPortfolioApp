import React from "react";

const HeroSection = ({ id }) => {
  return (
    <div className="hero-section" id={id}>
      <div className="hero-content">
        <h1>Hey, I'm Declan Walpole</h1>
        <h3 className="desktop-byline">
          Full stack developer making career change after having worked in
          analytics and strategy
        </h3>
        <h3 className="mobile-byline">Full stack dev making career change</h3>
        <h3 className="desktop-byline">
          Sydney {"\u2192"} Denver {"\u2192"} Minneapolis
        </h3>
        <h3 className="mobile-byline">
          SYD {"\u2192"} DEN {"\u2192"} MPLS
        </h3>
        <div className="hero-cta">
          <a href="#projects">Projects</a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
