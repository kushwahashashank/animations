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
  // states for scroll control
  const [prevxoffset, setPrevxoffset] = useState(
    (40 * window.innerWidth) / 100
  );

  const projects = [
    {
      zIndex: 400,
      src: Audio,
      alt: "Audio",
      title: "AUDIO SENTIMENT ANALYSIS",
      github:
        "https://github.com/kushwahashashank/Audio-Sentiment-Analysis-and-Summarizing-System",
      video:
        "https://drive.google.com/file/d/10zrTGrIoMh0bs7Jm6hJqYLUMh3sM0nv5/view?usp=drive_link",
    },
    {
      zIndex: 500,
      src: Mountains,
      alt: "Mountain Animation",
      title: "MOUNTAIN ANIMATION",
      github: "https://github.com/kushwahashashank/animations",
      live: "https://kushwahashashank.vercel.app/animation",
    },
    {
      zIndex: 600,
      src: Art,
      alt: "Art Hub",
      title: "ARTHUB",
      github: "https://github.com/kushwahashashank/arthub",
      live: "https://aarthub.netlify.app/",
    },
    {
      zIndex: 700,
      src: Car,
      alt: "Car Hub",
      title: "CARHUB",
      github: "https://github.com/kushwahashashank/carhub",
      live: "https://carhub-shashank.vercel.app/",
    },
    {
      zIndex: 800,
      src: Aidoctor,
      alt: "AI Doctor",
      title: "VIRTUAL AI DOCTOR",
      github: null, // Replace with the actual link if available
      video: null, // Replace with the actual link if available
    },
    {
      zIndex: 900,
      src: Weather,
      alt: "Weather Application",
      title: "WEATHER APPLICATION",
      github: "https://github.com/kushwahashashank/weather-application",
      live: "https://weather-application-xi-ten.vercel.app/",
    },
    {
      zIndex: 1000,
      src: Todo,
      alt: "To Do Application",
      title: "TO DO APPLICATION",
      github: "https://github.com/kushwahashashank/Task-Manager",
      live: "https://kushwahashashank.github.io/Task-Manager/",
    },
    {
      zIndex: 1100,
      src: Portfolio,
      alt: "Portfolio",
      title: "PORTFOLIO",
      github: "https://github.com/kushwahashashank/animations",
      live: "https://kushwahashashank.vercel.app",
    },
  ];

  const [window_height, setWindow_height] = useState(window.innerHeight);
  // Function for scroll animation
  useEffect(() => {
    if (window.innerWidth / window_height >= 1.6) {
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
    if (window.innerWidth / window_height >= 1.6) {
      const pin = gsap.fromTo(
        trackRef.current,
        {
          translateX: `${0.4 * window.innerWidth}px`,
        },
        {
          translateX: `
            ${-(
              image2.current.getBoundingClientRect().right -
              image1.current.getBoundingClientRect().left -
              0.8 * window.innerWidth
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
      const containers = trackRef.current;
      const updateTimeline = () => {
        let newtimeline = gsap.timeline({
          scrollTrigger: {
            trigger: containers,
            start: "top top",
            end: "bottom top",
            scrub: 1,
            pin: true,
          },
        });
        let scrollheight = window.innerHeight;
        // Animate each container
        Array.from(trackRef.current.children).forEach((project, index) => {
          if (project) {
            newtimeline.to(project, {
              translateY: index * -1 * (scrollheight + 4),
              duration: 6,
              ease: "power1.inOut",
            });
          }
        });
        return newtimeline;
      };
      let timeline = updateTimeline();
      const handleResize = () => {
        timeline.kill();
        timeline = updateTimeline();
      };
      window.addEventListener("resize", handleResize);
      return () => {
        timeline.kill();
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return (
    <>
      {window.innerWidth / window_height >= 1.6 ? (
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
            {projects.map((project, index) => (
              <div className="img-container" key={index}>
                <Image
                  style={{ zIndex: project.zIndex }}
                  className="image"
                  src={project.src}
                  alt={project.alt}
                  draggable="false"
                />
                <p
                  className="project-title"
                  style={{
                    color: project.title.includes("AI DOCTOR")
                      ? "rgb(80, 189, 216)"
                      : project.title.includes("ARTHUB")
                      ? "rgb(186, 30, 30)"
                      : project.title.includes("TO DO")
                      ? "rgb(254, 213, 67)"
                      : project.title.includes("AUDIO")
                      ? "rgb(168, 147, 24)"
                      : "white",
                  }}
                >
                  {project.title}
                </p>
                {project.github && (
                  <Link
                    href={project.github}
                    target="blank"
                    className="github-button"
                  >
                    GitHub
                  </Link>
                )}
                {project.video ? (
                  <Link
                    href={project.video}
                    target="blank"
                    className="externallink-button"
                  >
                    Video
                  </Link>
                ) : project.live ? (
                  <Link
                    href={project.live}
                    target="blank"
                    className="externallink-button"
                  >
                    Live
                  </Link>
                ) : null}
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default Projects;
