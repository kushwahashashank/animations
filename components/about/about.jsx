"use client";
import React, { useRef, useEffect } from "react";
import "./about.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
const About = () => {
  const textsectionRef = useRef(null);
  const texttriggerRef = useRef(null);
  const textRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    // const splitText = new SplitText(textRef.current, {
    //   type: "lines",
    //   linesClass: "line",
    // });
    // const tl = gsap.timeline({
    //   scrollTrigger: {
    //     pin: textsectionRef.current,
    //     pinSpacing: false,
    //     trigger: texttriggerRef.current,
    //     scrub: 1,
    //     start: "top 40%",
    //     end: "bottom 50%",
    //     markers: true,
    //   },
    // });
    // tl.to(".line", {
    //   "--highlight-offset": "100%",
    //   stagger: 0.5,
    // });
    //   let currentWidth = 0;
    //   if (trackRef.current) {
    //     currentWidth = trackRef.current.offsetWidth;
    //   }
    //   const pin = gsap.fromTo(
    //     sectionRef.current,
    //     {
    //       translateX: 0,
    //     },
    //     {
    //       translateX: -currentWidth,
    //       scrollTrigger: {
    //         trigger: triggerRef.current,
    //         start: "top top",
    //         end: "bottom top",
    //         scrub: 2,
    //         pin: true,
    //       },
    //     }
    //   );
    //   return () => {
    //     pin.kill();
    //   };
  }, []);

  // const splitText = new SplitText(".paragraph p", {
  //   type: "lines",
  //   linesClass: "line",
  // });

  // const tl = gsap.timeline({
  //   scrollTrigger: {
  //     pin: ".background",
  //     pinSpacing: false,
  //     trigger: ".paragraph",
  //     scrub: 1,
  //     start: "top 65%",
  //     end: "bottom 65%",
  //     markers: true,
  //   },
  // });
  // tl.to(".line", {
  //   "--highlight-offset": "100%",
  //   stagger: 0.5,
  // });

  return (
    <>
      <div ref={textsectionRef} className="container">
        <h2 className="header container-span">
          {/* <span> */}
          About
          {/* </span> */}
        </h2>
        <div ref={texttriggerRef}>
          <p ref={textRef} className="container-span about-content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            et aut repellendus possimus laborum deleniti numquam id error nisi,
            provident iure quasi cumque voluptates, ratione doloremque. Veniam
            fuga iste nihil tenetur ut exercitationem incidunt! A, molestiae
            dignissimos? Incidunt dicta consequuntur in aut eaque itaque quis
            nemo ratione fuga molestias iusto eligendi earum perferendis, animi
            facilis id reprehenderit facere voluptatem! Maiores earum accusamus
            eaque, ea sint nisi architecto tempore libero dolor perspiciatis
            omnis numquam natus praesentium tenetur officia alias autem, commodi
            porro? Delectus alias maxime magni ad?
          </p>
        </div>
      </div>
    </>
  );
};
export default About;
