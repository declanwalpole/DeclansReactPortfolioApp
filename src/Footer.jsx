import React from "react";
import Socials from "./Socials";

const Footer = () => {
  return (
    <footer className="footer">
      <h3>Declan Walpole</h3>
      <p className="desktop-byline">
        Full stack developer making career change after having worked in
        analytics and strategy
      </p>
      <p className="mobile-byline">Full stack developer making career change</p>
      <p className="desktop-byline">
        Australian national living in the US on E3 VISA.
      </p>
      <p className="mobile-byline">Australian living in US (E3 VISA)</p>
      <Socials />
      <p className="copyright">
        Copyright {new Date().getFullYear()} Declan Walpole. Made with React js.
      </p>
    </footer>
  );
};

export default Footer;
