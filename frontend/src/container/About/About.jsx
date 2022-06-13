import React, { useState, useEffect } from "react";
import "./About.scss";
import { motion } from "framer-motion";
import { urlFor, client } from "../../client";
import { AppWrap, MotionWrap } from "../../wrapper";

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => setAbouts(data));
  }, []);

  return (
    <>
      <h2 className="head-text">
        About
        <span> Me</span>
      </h2>

      <div className="app__aboutme">
        <div className="app__aboutme-left">
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, delayChildren: 0.5 }}
            className="app__aboutme-img"
          >
            <img src="./about02.png" alt="profile_bg" />
          </motion.div>
        </div>
        <div className="app__aboutme-right">
          <p>
            Hey! My name is Kushagra. I am a web developer located in India. I
            build interactive websites that run across various platforms and
            have great user experience.
          </p>
          <br />
          <p>
            I am an extremely curious and self-motivated individual with a huge
            passion for design in general. I take a very positive and ego-free
            approach to all aspects of my life, and I carry a strong work ethic
            with me wherever I go.
          </p>
          <br />
          <p>
            Being a diligent, hardworking and result oriented guy, I always work
            towards achieving best result on each project I lay my hands on.
          </p>
          <br />
          <p>
            In the quest for always keeping myself updated, I read books and
            attend conferences. Well organised person, problem solver with high
            attention to detail.
          </p>
        </div>
      </div>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text">{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__primarybg"
);
