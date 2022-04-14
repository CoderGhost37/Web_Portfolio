import React, { useState, useRef } from "react";
import emailjs from 'emailjs-com';
import { MdOutlineEmail } from 'react-icons/md';
import { BsWhatsapp } from 'react-icons/bs';

import { client } from "../../client";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./Contact.scss";

const Footer = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs.sendForm('gmail', 'template_hqe9tam', form.current, 'cqBR3w-G3y0fzEW73')
      .then((result) => {
          console.log(result.text);
          setLoading(false);
          setIsFormSubmitted(true);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  return (
    <>
      
      <p>Get in Touch</p>
      <h2 className="head-text"><span>Contact Me</span></h2>

        <div className="app__footer-cards">
          <div className="app__footer-card">
            <MdOutlineEmail  />
            <h4>Email</h4>
            <h5>kushmathur2020@gmail.com</h5>
            <a href='mailto:kushmathur2020@gmail.com' target='_blank'>
              <p>Send a Message</p>
            </a>
          </div>
          <div className="app__footer-card">
            <BsWhatsapp  />
            <h4>WhatsApp</h4>
            <h5>+91 8860263558</h5>
            <a href='https://api.whatsapp.com/send?phone=+918860263558' target='_blank'>
              <p>Send a Message</p>
            </a>
          </div>
        </div>

      {!isFormSubmitted ? (
        <form className="app__footer-form app__flex" ref={form} onSubmit={sendEmail}>
          <div className="app__flex">
            <input
              type="text"
              name="name"
              required
              className="p-text"
              placeholder="Your Name"
            />
          </div>
          <div className="app__flex">
            <input
              type="email"
              name="email"
              required
              className="p-text"
              placeholder="Your Email"
            />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              required
              name="message"
            />
          </div>
          <button type="submit" className="p-text">
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      ) : (
        <div>
          <h3 className="head-text">Thank you for getting in touch</h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__whitebg"
);
