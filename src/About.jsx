import React from "react";
import { FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa";

import { expertiseSkills, languageSkills, frameworkSkills } from "./constants";

const About = ({ id }) => {
  return (
    <div className="about-section" id={id}>
      <div className="about-content">
        <h1>About Me</h1>
      </div>
      <div className="about-columns">
        <div className="about-col1">
          <h2>Career Change</h2>
          <p>
            I am a self-taught full stack engineer making a career transition.
            Having held roles in quants, analytics and strategy, I felt
            compelled to challenge myself in a technical field. I have also
            grown out-of-love with corporate business settings.
          </p>
          <p>
            I am an Australian national; born and raised in Sydney. I moved to
            Melbourne for the PointsBet role and was lucky enough to move to
            Denver as they expanded to the US. I have now bought a house in
            Minneapolis MN where I will work remotely.
          </p>
          <p>
            I have deep expertise in the sports betting industry, after first
            getting my start in Financial Services. There are many parallels
            betting sports betting and financial markets.
          </p>
          <p>
            I am open to job opportunities that will help my web development
            career shift. Do not hesitate to contact me if you think my skills
            and interest might be a match.
          </p>

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
