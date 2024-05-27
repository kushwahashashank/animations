"use client";
import React, { useRef, useEffect } from "react";
import "./about.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import SplitType from "split-type";
import Lenis from "@studio-freight/lenis"; // Example import statement for the Lenis library

const About = () => {
  const texttriggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);
  const lenis = new Lenis({
    lerp: 0.07,
  });

  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  useEffect(() => {
    document.querySelectorAll(".about-content").forEach((char, i) => {
      // Split text
      let splitText = new SplitType(char, {
        type: "chars",
      });

      // Animation
      gsap.from(splitText.chars, {
        opacity: 0.2,
        ease: "none",
        stagger: 1,
        duration: 5,
        scrollTrigger: {
          trigger: texttriggerRef.current,
          start: "top 20%",
          end: "bottom bottom",
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
          Hi, This is Abhishek Kushwaha, full stack developer and am artist
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint facilis
          adipisci consectetur cupiditate eveniet accusamus veritatis? Saepe,
          quae blanditiis non voluptatum quibusdam incidunt!
        </p>
      </div>
    </>
  );
};
export default About;
