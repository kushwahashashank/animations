"use client";
import React, { useState, useRef, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import "./projects.css";
import aboutimage from "../Assests/NavImages/about.png";
import Image from "next/image";

const navbar = () => {
  const router = useRouter();

  // const imgref = useRef();

  const [active, setActive] = useState(false);

  const myRef = useRef();
  // states for scroll control
  const [scrollTop, setScrollTop] = useState(0);
  const [prevpercentage, setPrevpercentage] = useState(40);
  // Function for scroll animation
  useEffect(() => {
    const handleScroll = (event) => {
      let mouseDelta = scrollTop - window.scrollY,
        maxDelta = window.innerHeight;

      const percentage = (mouseDelta / maxDelta) * 50,
        nextPercentageUnconstrained = prevpercentage + percentage,
        nextPercentage = Math.max(
          Math.min(nextPercentageUnconstrained, 25),
          -70
        );
      setPrevpercentage(nextPercentage);
      setScrollTop(window.scrollY);
      const track = myRef.current;
      track.animate(
        {
         transform: `translateX(${nextPercentage}%)`,
        },
         { duration: 3000, fill: "forwards" }
      );

      for (const image of track.getElementsByClassName("image")) {
        image.animate(
          {
            objectPosition: `${70 + nextPercentage}% center`,
          },
          { duration: 5000, fill: "forwards" }
        );
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollTop]);

  // const handleclick = () => {
  //   const left = myRef.current.offsetLeft;
  //   const parent = window.innerWidth;
  //   const percentage = 100 * (left / parent);
  //   myRef.current.animate(
  //     {
  //       transform: `translateX(-${percentage}%)`,
  //     },
  //     { duration: 1000, fill: "forwards" }
  //   );
  //   setActive(!active);
  // };

  return (
    <>
      <div className="image-warpper">
        <div ref={myRef} id="image-track">
          <Image
            className="image"
            // onClick={() => router.push("/about")}
            src={aboutimage}
            draggable="false"
          />
          <img
            className="image"
            src="https://images.unsplash.com/photo-1495805442109-bf1cf975750b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
            draggable="false"
          />
          <img
            className={ "image"}
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
      <div className="conatiner-scroll"></div>
    </>
  );
};

export default navbar;
