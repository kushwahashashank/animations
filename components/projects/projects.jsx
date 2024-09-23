"use client";
import React, { useState, useRef, useEffect } from "react";
import "./projects.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
const Projects = () => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  const trackRef = useRef(null);
  const image1 = useRef(null);
  const image2 = useRef(null);
  // states for scroll control
  const [prevxoffset, setPrevxoffset] = useState(
    (40 * window.innerWidth) / 100
  );
  const [window_height, setWindow_height] = useState(window.innerHeight);
  const [window_width, setWindow_width] = useState(window.innerWidth);

  // Function for scroll animation
  useEffect(() => {
    if (window_width / window_height >= 1.6) {
      const handleScroll = () => {
        const Xoffset = trackRef.current.getBoundingClientRect().left;
        const percentageChange = ((prevxoffset - Xoffset) * 3.5) / 100;
        console.log(Xoffset, "X", prevxoffset);
        console.log(percentageChange, "percentage");
        if (Xoffset < prevxoffset) {
          for (const image of trackRef.current.getElementsByClassName(
            "image"
          )) {
            image.animate(
              {
                objectPosition: `${100 - percentageChange}% center`,
              },
              { duration: 2200, fill: "both" }
            );
          }
        }
      };
      document.addEventListener("scroll", handleScroll);

      return () => {
        document.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    if (window_width / window_height >= 1.6) {
      let currentWidth = 0;
      let left = image1.current.getBoundingClientRect().left;
      let right = image2.current.getBoundingClientRect().right;
      let Xoffset_track = trackRef.current.getBoundingClientRect().left;
      if (trackRef.current) {
        currentWidth = trackRef.current.offsetWidth;
        console.log(currentWidth, "current width");
      }
      const pin = gsap.fromTo(
        sectionRef.current,
        {
          translateX: 0,
        },
        {
          duration: 2,
          translateX: -(right - left - Xoffset_track + 100),
          scrollTrigger: {
            trigger: triggerRef.current,
            start: "top top",
            end: "300% top",
            // markers: true,
            scrub: 1,
            pin: true,
          },
        }
      );
      return () => {
        pin.kill();
      };
    }
  }, []);

  return (
    <>
      {window_width / window_height >= 1.6 ? (
        <>
          <div ref={triggerRef} className="image-warpper">
            <div ref={sectionRef} className="image-wrapper-inner">
              <div ref={trackRef} id="image-track">
                {/* <Image className="image" src={aboutimage} draggable="false" /> */}
                <img
                  ref={image1}
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
                  src="https://images.unsplash.com/photo-1725772685998-be930f3209b9?q=80&w=2831&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  draggable="false"
                />
                <img
                  ref={image2}
                  className="image"
                  src="https://images.unsplash.com/photo-1613346945084-35cccc812dd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
                  draggable="false"
                />
              </div>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default Projects;
