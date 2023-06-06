import React from "react";
import { FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa";

const Socials = () => {
  return (
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
  );
};

export default Socials;
