"use client";
import React, { useState, useRef, useEffect, useCallback } from "react";
import "./projects.css";
// import aboutimage from "../Assests/NavImages/about.png";
import Image from "next/image";

const navbar = () => {
  // states for scroll control
  const [scrollTop, setScrollTop] = useState(0);
  const [prevpercentage, setPrevpercentage] = useState(0);

  // Function for scroll animation
  useEffect(() => {
    const handleScroll = () => {
      const scrollConatiner = document.querySelector(".conatiner-scroll");
      // const scrollConatiner_Yoffset =
      //   scrollConatiner.getBoundingClientRect().top;

      const target = document.querySelector(".image-warpper");
      const target_Yoffset = target.getBoundingClientRect().top;

      let mouseDelta = scrollTop - window.scrollY,
        maxDelta = window.innerHeight;

      const track = document.getElementById("image-track");
      const percentage = (mouseDelta / maxDelta) * 80,
        nextPercentageUnconstrained = prevpercentage + percentage;

      let nextPercentage = prevpercentage + percentage;
      // nextPercentage = Math.max(
      //   Math.min(nextPercentageUnconstrained, 25),
      //   -70
      // );
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
            // scrollConatiner.style.display = "none";

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
      // if (target_Yoffset <= 0) {
      //   if (nextPercentage <= -70 && prevpercentage == -70) {
      //     scrollConatiner.style.display = "none";
      //     target.classList.remove("image-wrapper-hold");
      //   } else if (nextPercentage >= 25 && prevpercentage == 25) {
      //     scrollConatiner.style.display = "flex";
      //     target.classList.remove("image-wrapper-hold");
      //   } else if (nextPercentage >= -70 && nextPercentage <= 25) {
      //     if (nextPercentage < prevpercentage && target_Yoffset <= 0) {
      //       target.classList.add("image-wrapper-hold");
      //       track.animate(
      //         {
      //           transform: `translateX(${nextPercentage}%)`,
      //         },
      //         { duration: 3000, fill: "forwards" }
      //       );
      //       for (const image of track.getElementsByClassName("image")) {
      //         image.animate(
      //           {
      //             objectPosition: `${70 + nextPercentage}% center`,
      //           },
      //           { duration: 5000, fill: "forwards" }
      //         );
      //       }
      //       setPrevpercentage(nextPercentage);
      //     } else if (nextPercentage >= prevpercentage && target_Yoffset >= 0) {
      //       target.classList.add("image-wrapper-hold");
      //       track.animate(
      //         {
      //           transform: `translateX(${nextPercentage}%)`,
      //         },
      //         { duration: 3000, fill: "forwards" }
      //       );
      //       for (const image of track.getElementsByClassName("image")) {
      //         image.animate(
      //           {
      //             objectPosition: `${70 + nextPercentage}% center`,
      //           },
      //           { duration: 5000, fill: "forwards" }
      //         );
      //       }
      //       setPrevpercentage(nextPercentage);
      //     }
      //   } else {
      //     target.classList.remove("image-wrapper-hold");
      //   }
      // }
      setScrollTop(window.scrollY);
      // console.log("scrolloffset", -scrollConatiner_Yoffset);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollTop]);

  return (
    <div className="table-div">
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
      <div className="conatiner-scroll"></div>
    </div>
  );
};

export default navbar;
