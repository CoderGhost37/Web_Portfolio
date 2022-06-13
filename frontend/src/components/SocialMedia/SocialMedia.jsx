import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <a href="https://www.linkedin.com/in/kushagramathur37/" target="_blank" rel="noreferrer">
        <BsLinkedin />
      </a>
      <a href="https://github.com/CoderGhost37" target="_blank" rel="noreferrer">
        <BsGithub />
      </a>
    </div>
  );
};

export default SocialMedia;
