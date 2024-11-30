"use client";
import React, { useState, useRef, useEffect } from "react";
import "./projects.css";
import Image from "next/image";
import Todo from "../Assests/projectbackground/todo.webp";
import Audio from "../Assests/projectbackground/audio.webp";
import Mountains from "../Assests/projectbackground/mountains.webp";
import Art from "../Assests/projectbackground/art.webp";
import Car from "../Assests/projectbackground/car.webp";
import Aidoctor from "../Assests/projectbackground/aidoctor.webp";
import Weather from "../Assests/projectbackground/weather.webp";
import Portfolio from "../Assests/projectbackground/portfolio.webp";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Link from "next/link";
const Projects = () => {
  gsap.registerPlugin(ScrollTrigger);
  const triggerRef = useRef(null);
  const trackRef = useRef(null);
  const image1 = useRef(null);
  const image2 = useRef(null);
  const project1 = useRef(null);
  const project2 = useRef(null);
  const project3 = useRef(null);
  const project4 = useRef(null);
  const project5 = useRef(null);
  const project6 = useRef(null);
  const project7 = useRef(null);
  const project8 = useRef(null);
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
    } else {
      // Add here
      const containers = trackRef.current;
      const scrolldistance = -1 * (window.innerHeight + 4);
      // Define a GSAP Timeline
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: containers,
          start: "top top",
          end: "bottom top",
          scrub: 1,
          pin: true,
        },
      });

      // Animate each container

      timeline
        .to(project1.current, { translateY: 0 * scrolldistance, duration: 0 })
        .to(project2.current, { translateY: 1 * scrolldistance, duration: 6 })
        .to(project3.current, { translateY: 2 * scrolldistance, duration: 6 })
        .to(project4.current, { translateY: 3 * scrolldistance, duration: 6 })
        .to(project5.current, { translateY: 4 * scrolldistance, duration: 6 })
        .to(project6.current, { translateY: 5 * scrolldistance, duration: 6 })
        .to(project7.current, { translateY: 6 * scrolldistance, duration: 6 })
        .to(project8.current, { translateY: 7 * scrolldistance, duration: 6 });

      return () => {
        timeline.kill(); // Cleanup on unmount to avoid memory leaks
      };
    }
  }, []);

  return (
    <>
      {window_width / window_height >= 1.6 ? (
        <>
          <div ref={triggerRef} className="image-warpper">
            <div ref={trackRef} id="image-track">
              <div className="img-container">
                <Image
                  ref={image1}
                  src={Audio}
                  className="image"
                  alt="https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  draggable="false"
                />
                <p
                  className="project-title"
                  style={{ color: "rgb(168, 147, 24)" }}
                >
                  AUDIO <br></br> SENTIMENT ANALYSIS
                </p>
                <Link
                  href="https://github.com/kushwahashashank/Audio-Sentiment-Analysis-and-Summarizing-System"
                  target="blank"
                  className="github-button"
                >
                  GitHub
                </Link>
                <Link
                  href="https://drive.google.com/file/d/10zrTGrIoMh0bs7Jm6hJqYLUMh3sM0nv5/view?usp=drive_link"
                  target="blank"
                  className="externallink-button"
                >
                  Video
                </Link>
              </div>
              <div className="img-container">
                <Image
                  className="image"
                  src={Mountains}
                  alt="https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  draggable="false"
                />
                <p className="project-title" style={{ color: "white" }}>
                  MOUNTAIN <br /> ANIMATION
                </p>
                <Link
                  href="https://github.com/kushwahashashank/animations"
                  target="blank"
                  className="github-button"
                >
                  GitHub
                </Link>
                <Link
                  href="https://kushwahashashank.vercel.app/animation"
                  target="blank"
                  className="externallink-button"
                >
                  Live
                </Link>
              </div>
              <div className="img-container">
                <Image
                  className={"image"}
                  src={Art}
                  alt="https://images.unsplash.com/photo-1452457005517-a0dd81caca2a?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  draggable="false"
                />
                <p
                  className="project-title"
                  style={{ color: "rgb(186, 30, 30)" }}
                >
                  ARTHUB
                </p>
                <Link
                  href="https://github.com/kushwahashashank/arthub"
                  target="blank"
                  className="github-button"
                >
                  GitHub
                </Link>
                <Link
                  href="https://aarthub.netlify.app/"
                  target="blank"
                  className="externallink-button"
                >
                  Live
                </Link>
              </div>
              <div className="img-container">
                <Image
                  className="image"
                  src={Car}
                  alt="https://plus.unsplash.com/premium_photo-1683134240084-ba074973f75e?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  draggable="false"
                />
                <p className="project-title" style={{ color: "white" }}>
                  CARHUB
                </p>
                <Link
                  href="https://github.com/kushwahashashank/carhub"
                  target="blank"
                  className="github-button"
                >
                  GitHub
                </Link>
                <Link
                  href="https://carhub-shashank.vercel.app/"
                  target="blank"
                  className="externallink-button"
                >
                  Live
                </Link>
              </div>

              <div className="img-container">
                <Image
                  className="image"
                  src={Aidoctor}
                  alt="https://plus.unsplash.com/premium_photo-1673953509975-576678fa6710?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
                <Image
                  className="image"
                  src={Weather}
                  alt="https://images.unsplash.com/photo-1566010503302-2564ae0d47b6?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  draggable="false"
                />
                <p className="project-title" style={{ color: "white" }}>
                  WEATHER <br /> APPLICATION
                </p>
                <Link
                  href="https://github.com/kushwahashashank/weather-application"
                  target="blank"
                  className="github-button"
                >
                  GitHub
                </Link>
                <Link
                  href="https://weather-application-xi-ten.vercel.app/"
                  target="blank"
                  className="externallink-button"
                >
                  Live
                </Link>
              </div>
              <div className="img-container">
                <Image
                  className="image"
                  src={Todo}
                  alt="https://images.unsplash.com/photo-1501159599894-155982264a55?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  draggable="false"
                />
                <p
                  className="project-title"
                  style={{ color: "rgb(254, 213, 67)" }}
                >
                  TO DO <br /> APPLICATION
                </p>
                <Link
                  href="https://github.com/kushwahashashank/Task-Manager"
                  target="blank"
                  className="github-button"
                >
                  GitHub
                </Link>
                <Link
                  href="https://kushwahashashank.github.io/Task-Manager/"
                  target="blank"
                  className="externallink-button"
                >
                  Live
                </Link>
              </div>
              <div className="img-container">
                <Image
                  ref={image2}
                  className="image"
                  src={Portfolio}
                  alt="https://images.unsplash.com/photo-1558680174-e8e572f854e2?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  draggable="false"
                />
                <p className="project-title" style={{ color: "white" }}>
                  PORTFOLIO
                </p>
                <Link
                  href="https://github.com/kushwahashashank/animations"
                  target="blank"
                  className="github-button"
                >
                  GitHub
                </Link>
                <Link
                  href="https://kushwahashashank.vercel.app"
                  target="blank"
                  className="externallink-button"
                >
                  Live
                </Link>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div ref={trackRef} id="image-track">
            <div ref={project1} className="img-container">
              <Image
                style={{ zIndex: "400" }}
                ref={image1}
                src={Audio}
                className="image"
                alt="https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                draggable="false"
              />
              <p
                className="project-title"
                style={{ color: "rgb(168, 147, 24)" }}
              >
                AUDIO <br></br> SENTIMENT ANALYSIS
              </p>
              <Link
                href="https://github.com/kushwahashashank/Audio-Sentiment-Analysis-and-Summarizing-System"
                target="blank"
                className="github-button"
              >
                GitHub
              </Link>
              <Link
                href="https://drive.google.com/file/d/10zrTGrIoMh0bs7Jm6hJqYLUMh3sM0nv5/view?usp=drive_link"
                target="blank"
                className="externallink-button"
              >
                Video
              </Link>
            </div>
            <div ref={project2} className="img-container">
              <Image
                style={{ zIndex: "500" }}
                className="image"
                src={Mountains}
                alt="https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                draggable="false"
              />
              <p className="project-title" style={{ color: "white" }}>
                MOUNTAIN <br /> ANIMATION
              </p>
              <Link
                href="https://github.com/kushwahashashank/animations"
                target="blank"
                className="github-button"
              >
                GitHub
              </Link>
              <Link
                href="https://kushwahashashank.vercel.app/animation"
                target="blank"
                className="externallink-button"
              >
                Live
              </Link>
            </div>
            <div ref={project3} className="img-container">
              <Image
                style={{ zIndex: "600" }}
                className={"image"}
                src={Art}
                alt="https://images.unsplash.com/photo-1452457005517-a0dd81caca2a?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                draggable="false"
              />
              <p
                className="project-title"
                style={{ color: "rgb(186, 30, 30)" }}
              >
                ARTHUB
              </p>
              <Link
                href="https://github.com/kushwahashashank/arthub"
                target="blank"
                className="github-button"
              >
                GitHub
              </Link>
              <Link
                href="https://aarthub.netlify.app/"
                target="blank"
                className="externallink-button"
              >
                Live
              </Link>
            </div>
            <div ref={project4} className="img-container">
              <Image
                style={{ zIndex: "700" }}
                className="image"
                src={Car}
                alt="https://plus.unsplash.com/premium_photo-1683134240084-ba074973f75e?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                draggable="false"
              />
              <p className="project-title" style={{ color: "white" }}>
                CARHUB
              </p>
              <Link
                href="https://github.com/kushwahashashank/carhub"
                target="blank"
                className="github-button"
              >
                GitHub
              </Link>
              <Link
                href="https://carhub-shashank.vercel.app/"
                target="blank"
                className="externallink-button"
              >
                Live
              </Link>
            </div>

            <div ref={project5} className="img-container">
              <Image
                style={{ zIndex: "800" }}
                className="image"
                src={Aidoctor}
                alt="https://plus.unsplash.com/premium_photo-1673953509975-576678fa6710?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
            <div ref={project6} className="img-container">
              <Image
                style={{ zIndex: "900" }}
                className="image"
                src={Weather}
                alt="https://images.unsplash.com/photo-1566010503302-2564ae0d47b6?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                draggable="false"
              />
              <p className="project-title" style={{ color: "white" }}>
                WEATHER <br /> APPLICATION
              </p>
              <Link
                href="https://github.com/kushwahashashank/weather-application"
                target="blank"
                className="github-button"
              >
                GitHub
              </Link>
              <Link
                href="https://weather-application-xi-ten.vercel.app/"
                target="blank"
                className="externallink-button"
              >
                Live
              </Link>
            </div>
            <div ref={project7} className="img-container">
              <Image
                style={{ zIndex: "1000" }}
                className="image"
                src={Todo}
                alt="https://images.unsplash.com/photo-1501159599894-155982264a55?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                draggable="false"
              />
              <p
                className="project-title"
                style={{ color: "rgb(254, 213, 67)" }}
              >
                TO DO <br /> APPLICATION
              </p>
              <Link
                href="https://github.com/kushwahashashank/Task-Manager"
                target="blank"
                className="github-button"
              >
                GitHub
              </Link>
              <Link
                href="https://kushwahashashank.github.io/Task-Manager/"
                target="blank"
                className="externallink-button"
              >
                Live
              </Link>
            </div>
            <div ref={project8} className="img-container">
              <Image
                style={{ zIndex: "1100" }}
                ref={image2}
                className="image"
                src={Portfolio}
                alt="https://images.unsplash.com/photo-1558680174-e8e572f854e2?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                draggable="false"
              />
              <p className="project-title" style={{ color: "white" }}>
                PORTFOLIO
              </p>
              <Link
                href="https://github.com/kushwahashashank/animations"
                target="blank"
                className="github-button"
              >
                GitHub
              </Link>
              <Link
                href="https://kushwahashashank.vercel.app"
                target="blank"
                className="externallink-button"
              >
                Live
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Projects;
