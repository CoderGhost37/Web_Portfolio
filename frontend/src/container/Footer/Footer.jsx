import React from "react";
import { images } from "../../constants/index";
import { SocialMedia } from "../../components";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="app__footer">
      <div className="app__footer-logo">
        <img src={images.logo} alt="logo" />
      </div>
      <ul className="app__footer-links">
        {["home", "about", "skills", "work", "contact"].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <a href={`#${item}`}>
              <span>{item}</span>
            </a>
          </li>
        ))}
      </ul>

      <SocialMedia />
      <div className="copyright">
        <p className="p-text">
          Kushagra Mathur &copy; {new Date().getFullYear()}
        </p>
        <p className="p-text">All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
