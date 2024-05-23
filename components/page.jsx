"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { About, Social, Projects, Main, Contact } from "../components";
gsap.registerPlugin(ScrollTrigger);
const page = () => {
  // const project_container = document.querySelector(".projects");
  // let project_width = project_container.offsetWidth;

  const container = useRef();
  // const amount_scroll = window.innerWidth - container.current.offsetWidth;
  function getScrollAmount() {
    // let racesWidth = races.scrollWidth;
    return -window.innerWidth;
  }
  useGSAP(
    () => {
      const tween = gsap.to(container, {
        x: getScrollAmount,
        duration: 3,
        ease: "none",
      });

      ScrollTrigger.create({
        trigger: ".projects-wrapper",
        start: "top 20%",
        end: () => `+=${getScrollAmount() * -1}`,
        pin: true,
        animation: tween,
        scrub: 1,
        invalidateOnRefresh: true,
        markers: true,
      });
    },
    { scope: container }
  );

  return (
    <>
      <div className="parent" style={{ scrollBehavior: "smooth" }}>
        {/* <Main /> */}
        <About className="about" />
        <div className="projects-wrapper">
          <Projects ref={container} className="projects" />
        </div>
        <Contact />
      </div>
      <Social />
    </>
  );
};

export default page;
