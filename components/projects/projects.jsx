"use client";
import React, { useState, useRef, useEffect, useCallback } from "react";
import "./projects.css";
// import aboutimage from "../Assests/NavImages/about.png";
import Image from "next/image";

const navbar = () => {
  // states for scroll control
  const [scrollTop, setScrollTop] = useState(0);
  const [prevpercentage, setPrevpercentage] = useState(25);

  // Function for scroll animation
  useEffect(() => {
    const handleScroll = () => {
      const scrollConatiner = document.querySelector(".conatiner-scroll");

      const target = document.querySelector(".image-warpper");
      const target_Yoffset = target.getBoundingClientRect().top;

      let mouseDelta = scrollTop - window.scrollY,
        maxDelta = window.innerHeight;

      const track = document.getElementById("image-track");
      const percentage = (mouseDelta / maxDelta) * 80,
        nextPercentageUnconstrained = prevpercentage + percentage;

      let nextPercentage = prevpercentage + percentage;

      const nextPercentageMove = Math.max(
        Math.min(nextPercentageUnconstrained, 25),
        -70
      );
      if (nextPercentage <= prevpercentage) {
        if (target_Yoffset <= 0) {
          target.style.display = "flex";
          scrollConatiner.classList.remove("make-top100");
          scrollConatiner.style.display = "flex";

          target.classList.add("image-wrapper-hold");
          track.animate(
            {
              transform: `translateX(${nextPercentageMove}%)`,
            },
            { duration: 2000, fill: "both" }
          );
          for (const image of track.getElementsByClassName("image")) {
            image.animate(
              {
                objectPosition: `${70 + nextPercentageMove}% center`,
              },
              { duration: 2500, fill: "both" }
            );
          }
          if (nextPercentage < -70) {
            scrollConatiner.classList.add("make-top100");

            target.classList.remove("image-wrapper-hold");
            target.style.display = "table-footer-group";
            scrollConatiner.style.display = "none";
          }
          setPrevpercentage(nextPercentage);
        }
      } else {
        if (target_Yoffset >= 0) {
          target.style.display = "table-footer-group";
          scrollConatiner.classList.remove("make-top100");
          scrollConatiner.style.display = "flex";

          target.classList.add("image-wrapper-hold");
          track.animate(
            {
              transform: `translateX(${nextPercentageMove}%)`,
            },
            { duration: 2000, fill: "both" }
          );
          for (const image of track.getElementsByClassName("image")) {
            image.animate(
              {
                objectPosition: `${70 + nextPercentageMove}% center`,
              },
              { duration: 2500, fill: "both" }
            );
          }
          if (nextPercentage > 25) {
            target.style.display = "flex";
            target.classList.remove("image-wrapper-hold");
            scrollConatiner.style.display = "none";
          }
          setPrevpercentage(nextPercentage);
        }
      }
      setScrollTop(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollTop]);

  return (
    <div className="conatiner-scroll">
      <div className="image-warpper">
        <div id="image-track">
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
  );
};

export default navbar;
