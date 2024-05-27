"use client";
import React, { useState, useRef, useEffect } from "react";
import "./projects.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
const Projects = () => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  const trackRef = useRef(null);

  // states for scroll control
  const [prevxoffset, setPrevxoffset] = useState(
    (40 * window.innerWidth) / 100
  );
  // if (trackRef.current) {
  //   setPrevxoffset(trackRef.current.getBoundingClientRect().left);
  // }
  // Function for scroll animation
  useEffect(() => {
    const handleScroll = () => {
      const Xoffset = trackRef.current.getBoundingClientRect().left;
      const percentageChange = ((prevxoffset - Xoffset) * 3.5) / 100;
      console.log(Xoffset, "X", prevxoffset);
      console.log(percentageChange);
      if (Xoffset < prevxoffset) {
        for (const image of trackRef.current.getElementsByClassName("image")) {
          image.animate(
            {
              objectPosition: `${70 - percentageChange}% center`,
            },
            { duration: 2200, fill: "both" }
          );
        }
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    let currentWidth = 0;
    if (trackRef.current) {
      currentWidth = trackRef.current.offsetWidth;
    }
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        duration: 2,
        translateX: -currentWidth,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
          pin: true,
        },
      }
    );
    return () => {
      pin.kill();
    };
  }, []);

  return (
    <>
      <div ref={triggerRef} className="image-warpper">
        <div ref={sectionRef} className="image-wrapper-inner">
          <div ref={trackRef} id="image-track">
            {/* <Image className="image" src={aboutimage} draggable="false" /> */}
            <img
              className="image"
              src="https://images.unsplash.com/photo-1495805442109-bf1cf975750b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
              draggable="false"
            />
            <img
              className={"image"}
              src="https://images.unsplash.com/photo-1548021682-1720ed403a5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
              draggable="false"
            />
            <img
              className="image"
              src="https://images.unsplash.com/photo-1496753480864-3e588e0269b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
              draggable="false"
            />
            <img
              className="image"
              src="https://images.unsplash.com/photo-1613346945084-35cccc812dd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
              draggable="false"
            />
            <img
              className="image"
              src="https://images.unsplash.com/photo-1495805442109-bf1cf975750b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
              draggable="false"
            />
            <img
              className="image"
              src="https://images.unsplash.com/photo-1548021682-1720ed403a5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
              draggable="false"
            />
            <img
              className="image"
              src="https://images.unsplash.com/photo-1496753480864-3e588e0269b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
              draggable="false"
            />
            <img
              className="image"
              src="https://images.unsplash.com/photo-1613346945084-35cccc812dd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
              draggable="false"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
