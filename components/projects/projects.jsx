"use client";
import React, { useState, useRef, useEffect } from "react";
import "./projects.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
const Projects = () => {
  gsap.registerPlugin(ScrollTrigger);
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
        const percentageChange = ((prevxoffset - Xoffset) * 4.5) / 100;
        console.log(Xoffset, "X", prevxoffset);
        console.log(percentageChange, "percentage");
        if (Xoffset < prevxoffset && prevxoffset - Xoffset >= 1) {
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

  useEffect(() => {
    if (window_width / window_height >= 1.6) {
      const pin = gsap.fromTo(
        trackRef.current,
        {
          translateX: `${0.4 * window_width}px`,
        },
        {
          translateX: `
            ${-(
              image2.current.getBoundingClientRect().right -
              image1.current.getBoundingClientRect().left -
              0.8 * window_width
            )}
          px`,
          duration: 4,
          scrollTrigger: {
            trigger: triggerRef.current,
            start: "top top",
            end: "3000px top",
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
            {/* <div ref={sectionRef} className="image-wrapper-inner"> */}
            <div ref={trackRef} id="image-track">
              {/* <Image className="image" src={aboutimage} draggable="false" /> */}
              <div className="img-container">
                <img
                  ref={image1}
                  className="image"
                  src="https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  draggable="false"
                />
                <p
                  className="project-title"
                  style={{ color: "rgb(168, 147, 24)" }}
                >
                  AUDIO <br></br> SENTIMENT ANALYSIS
                </p>
                <button className="github-button">GitHub</button>
                <button className="externallink-button">Video</button>
              </div>
              <div className="img-container">
                <img
                  className="image"
                  src="https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  draggable="false"
                />
                <p className="project-title" style={{ color: "white" }}>
                  MOUNTAIN <br /> ANIMATION
                </p>
                <button className="github-button">GitHub</button>
                <button className="externallink-button">Live</button>
              </div>
              <div className="img-container">
                <img
                  className={"image"}
                  src="https://images.unsplash.com/photo-1452457005517-a0dd81caca2a?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  draggable="false"
                />
                <p
                  className="project-title"
                  style={{ color: "rgb(186, 30, 30)" }}
                >
                  ARTHUB
                </p>
                <button className="github-button">GitHub</button>
                <button className="externallink-button">Live</button>
              </div>
              <div className="img-container">
                <img
                  className="image"
                  src="https://plus.unsplash.com/premium_photo-1683134240084-ba074973f75e?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  draggable="false"
                />
                <p className="project-title" style={{ color: "white" }}>
                  CARHUB
                </p>
                <button className="github-button">GitHub</button>
                <button className="externallink-button">Live</button>
              </div>

              <div className="img-container">
                <img
                  className="image"
                  src="https://plus.unsplash.com/premium_photo-1673953509975-576678fa6710?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  draggable="false"
                />
                <p
                  className="project-title"
                  style={{ color: "rgb(80, 189, 216)" }}
                >
                  VIRTUAL <br></br> AI DOCTOR
                </p>
                <button className="github-button">GitHub</button>
                <button className="externallink-button">Video</button>
              </div>
              <div className="img-container">
                <img
                  className="image"
                  src="https://images.unsplash.com/photo-1566010503302-2564ae0d47b6?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  draggable="false"
                />
                <p className="project-title" style={{ color: "white" }}>
                  WEATHER <br /> APPLICATION
                </p>
                <button className="github-button">GitHub</button>
                <button className="externallink-button">Live</button>
              </div>
              <div className="img-container">
                <img
                  className="image"
                  src="https://images.unsplash.com/photo-1501159599894-155982264a55?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  draggable="false"
                />
                <p
                  className="project-title"
                  style={{ color: "rgb(254, 213, 67)" }}
                >
                  TASK <br /> MANAGER
                </p>
                <button className="github-button">GitHub</button>
                <button className="externallink-button">Live</button>
              </div>
              <div className="img-container">
                <img
                  ref={image2}
                  className="image"
                  src="https://images.unsplash.com/photo-1558680174-e8e572f854e2?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  draggable="false"
                />
                <p className="project-title" style={{ color: "white" }}>
                  PORTFOLIO
                </p>
                <button className="github-button">GitHub</button>
                <button className="externallink-button">Live</button>
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
