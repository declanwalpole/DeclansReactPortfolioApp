import React from "react";
import { FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa";

import {
  aboutParagraphs,
  expertiseSkills,
  languageSkills,
  frameworkSkills,
} from "./constants";

const About = ({ id }) => {
  return (
    <div className="about-section" id={id}>
      <div className="about-content">
        <h1>About Me</h1>
      </div>
      <div className="about-columns">
        <div className="about-col1">
          <h2>Career Change</h2>
          {aboutParagraphs.map((para) => {
            return <p>{para}</p>;
          })}
          <div className="social-links">
            <a href="mailto:declan.walpole@gmail.com">
              <FaEnvelope className="social-icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/declan-walpole-0491b161/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="social-icon" />
            </a>
            <a
              href="https://github.com/declanwalpole"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="social-icon" />
            </a>
          </div>
        </div>
        <div className="about-col2">
          <h2>Expertise</h2>
          <div className="skills">
            {expertiseSkills.map((skill) => (
              <div className="skills_skill" key={skill}>
                {skill}
              </div>
            ))}
          </div>
          <h2>Languages</h2>
          <div className="skills">
            {languageSkills.map((skill) => (
              <div className="skills_skill" key={skill}>
                {skill}
              </div>
            ))}
          </div>
          <h2>Frameworks</h2>
          <div className="skills">
            {frameworkSkills.map((skill) => (
              <div className="skills_skill" key={skill}>
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
