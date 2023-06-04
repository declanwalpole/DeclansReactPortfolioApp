import React from "react";
import { FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <h3>Declan Walpole</h3>
      <p className="byline">
        Full stack developer making career change after having worked in
        analytics and strategy
      </p>
      <p className="byline">
        Australian national living in Denver --> Minneapolis on E3 VISA.
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
      <p className="copyright">
        Copyright {new Date().getFullYear()} Declan Walpole. Made with React js.
      </p>
    </footer>
  );
};

export default Footer;
