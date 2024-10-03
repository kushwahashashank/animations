"use client";
import React, { useRef, useEffect } from "react";
import "./about.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import SplitType from "split-type";
import Lenis from "@studio-freight/lenis"; // Example import statement for the Lenis library

const About = () => {
  const texttriggerRef = useRef(null);

  useEffect(() => {
    if (process.browser) {
      gsap.registerPlugin(ScrollTrigger);
      const lenis = new Lenis({
        lerp: 0.1,
      });
      lenis.on("scroll", ScrollTrigger.update);
      gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
      });
    }

    return () => {};
  }, []);

  useEffect(() => {
    document.querySelectorAll(".about-content").forEach((char, i) => {
      // Split text
      let splitText = new SplitType(char, {
        type: "chars",
      });

      // Animation
      gsap.from(splitText.chars, {
        opacity: 0.1,
        ease: "none",
        stagger: 1,
        duration: 5,
        scrollTrigger: {
          trigger: texttriggerRef.current,
          start: "top 50%",
          end: "bottom bottom-=20%",
          scrub: true,
          // markers: true,
        },
      });
    });
  }, []);

  return (
    <>
      <div ref={texttriggerRef} className="container">
        <p className="about-content">
          <h2>ABOUT ME</h2>
          <span className="black-bg">
            I'm a passionate Software Developer, Pencil Drawing Artist, and
            Designer, blending my love for technology and art. My unique
            perspective allows me to craft efficient, scalable web solutions
            that balance functionality with user-friendly design. As a
            developer, I focus on building digital experiences that are not only
            efficient but also intuitive. I bring a creative approach to both
            problem-solving and interface design, aiming to make technology
            accessible and art meaningful. In my spare time, I enjoy sketching
            detailed pencil drawings, where each line showcases my attention to
            detail. Whether it's through coding or drawing, I love turning ideas
            into reality.
            <br /> Welcome to my world of creativity, where technology meets
            art!
          </span>
          <h2>EXPERIENCE</h2>
          <span className="grey-bg">
            {/* <span> */}
            <span className="experience">
              Upcomming Specialist Programmer <b>INFOSYS</b> <br /> Software
              Engineer <b>MAQ SOFTWARE</b> <br /> Software Engineer Intern{" "}
              <b>RITSWA</b>
            </span>
          </span>
          <h2>EDUCATION</h2>
          <span className="white-bg">
            <span className="experience">
              Bachelor's in Technology (CSE){" "}
              <b>INDIAN INSTITUTE OF INFORMATION TECHNOLOGY, UNA</b> <br />
              <br />
              Senior Secondary
              <br />
              <b>NEW STANDARD PUBLIC SCHOOL, RAE BARELI</b>
            </span>
          </span>
        </p>
      </div>
    </>
  );
};
export default About;
