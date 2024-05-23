"use client";
import React, { useState, useEffect } from "react";
import "./contact.css";
import Image from "next/image";
import Pen from "../Assests/penimages/pen.png";
import Cap from "../Assests/penimages/cap.png";
const contact = () => {
  // states for scroll control
  const [scrollPens, setScrollPens] = useState(0);
  const [open, setOpen] = useState(false);
  // Function for scroll animation
  useEffect(() => {
    const handleScroll = () => {
      const scrollCap = document.querySelector(".cap-pen");
      const scrollPen = document.querySelector(".pen-pen");
      const scrollPenAnimate = document.querySelector(".pen-open");
      const scrollCheck = document.querySelector(".animate-class");
      const contactBottom = document.querySelector(".contact1");
      const scrollPenAnimate_Yoffset = scrollCheck.getBoundingClientRect().top;
      const contactBottom_Yoffset =
        contactBottom.getBoundingClientRect().bottom;

      if (scrollPenAnimate_Yoffset - 150 <= window.innerHeight / 2) {
        if (contactBottom_Yoffset <= 0) {
          if (open) {
            setOpen(false);
            scrollPen.classList.remove("pen-animate");
            scrollCap.classList.add("cap");
            scrollCap.classList.remove("cap-animate");
            scrollPen.classList.add("pen");
            scrollCheck.classList.remove("pen-open_container");
          }
        } else {
          if (!open) {
            setOpen(true);
            scrollPenAnimate.classList.add("pen-open-animate");
            scrollCheck.classList.add("pen-open_container");
            scrollCap.classList.add("cap-animate");
            scrollPen.classList.add("pen-animate");
          }
        }
      } else {
        if (open) {
          setOpen(false);
          scrollPen.classList.remove("pen-animate");
          scrollCap.classList.add("cap");
          scrollCap.classList.remove("cap-animate");
          scrollPen.classList.add("pen");
          scrollPenAnimate.classList.remove("pen-open-animate");
          scrollCheck.classList.remove("pen-open_container");
        }
      }

      setScrollPens(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPens]);
  return (
    <div className="contact ">
      <div className="pen-open">
        <Image className="cap-pen" src={Cap} alt="" />
        <Image className="pen-pen" src={Pen} alt="" />
      </div>
      <div className="animate-class"></div>
      <h2 className="h2text">GET IN TOUCH</h2>
      <div id="contact_form" className="contact1 contac">
        <div className="contact__container">
          <div className="contact-form">
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
            <textarea
              name="message"
              rolorem
              placeholder="Your Message"
              required
            ></textarea>
            <button type="submit" className="btn-submit">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default contact;
