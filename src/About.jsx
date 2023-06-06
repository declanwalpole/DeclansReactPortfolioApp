import React from "react";

import {
  aboutParagraphs,
  expertiseSkills,
  languageSkills,
  frameworkSkills,
} from "./constants";

import Socials from "./Socials";

const SkillBubbles = ({ SkillsArray }) => {
  return (
    <div className="skills">
      {SkillsArray.map((skill) => (
        <div className="skills_skill" key={skill}>
          {skill}
        </div>
      ))}
    </div>
  );
};

const Paragraphs = ({ paragraphs }) => {
  return paragraphs.map((para) => {
    return <p>{para}</p>;
  });
};

const About = ({ id }) => {
  return (
    <div className="about-section" id={id}>
      <div className="about-content">
        <h1>About Me</h1>
      </div>
      <div className="about-columns">
        <div className="about-col1">
          <h2>Career Change</h2>
          <Paragraphs paragraphs={aboutParagraphs} />
          <Socials />
        </div>
        <div className="about-col2">
          <h2>Expertise</h2>
          <SkillBubbles SkillsArray={expertiseSkills} />
          <h2>Languages</h2>
          <SkillBubbles SkillsArray={languageSkills} />
          <h2>Frameworks</h2>
          <SkillBubbles SkillsArray={frameworkSkills} />
        </div>
      </div>
    </div>
  );
};

export default About;
