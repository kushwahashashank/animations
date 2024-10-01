"use client";

import React from "react";
import Image from "next/image";
import "./main.css";

import { useState, useEffect } from "react";
import background from "../Assests/mountains/background.png";
import fog_7 from "../Assests/mountains/fog_7.png";
import mountain_10 from "../Assests/mountains/mountain_10.png";
import fog_6 from "../Assests/mountains/fog_6.png";
import mountain_9 from "../Assests/mountains/mountain_9.png";
import mountain_8 from "../Assests/mountains/mountain_8.png";
import fog_5 from "../Assests/mountains/fog_5.png";
import mountain_7 from "../Assests/mountains/mountain_7.png";
import mountain_6 from "../Assests/mountains/mountain_6.png";
import fog_4 from "../Assests/mountains/fog_4.png";
import mountain_5 from "../Assests/mountains/mountain_5.png";
import fog_3 from "../Assests/mountains/fog_3.png";
import mountain_4 from "../Assests/mountains/mountain_4.png";
import mountain_3 from "../Assests/mountains/mountain_3.png";
import fog_2 from "../Assests/mountains/fog_2.png";
import mountain_2 from "../Assests/mountains/mountain_2.png";
import mountain_1 from "../Assests/mountains/mountain_1.png";
import sun_rays from "../Assests/mountains/sun_rays.png";
import black_shadow from "../Assests/mountains/black_shadow.png";
import fog_1 from "../Assests/mountains/fog_1.png";
import { useContext } from "react";
import { StateContext } from "../context/store";
const Main = () => {
  // const [loaded, setLoaded] = useState(true);
  // document.addEventListener("readystatechange", (e) => {
  //   setLoaded(true);
  // });

  // states for mousemove control and rotation degree

  let rotatedegree = 0;
  const position = useContext(StateContext);
  // Function for mousemove animation
  useEffect(() => {
    const handleMousemove = (event) => {
      position.setCoords({
        x: event.clientX - window.innerWidth / 2,
        y: event.clientY - window.innerHeight / 2,
      });
      const element = document.querySelectorAll(".parallax");
      rotatedegree = (position.coords.x / (window.innerWidth / 2)) * 10;
      element.forEach((el) => {
        const speedx = el.dataset.speedx;
        const speedy = el.dataset.speedy;
        const speedz = el.dataset.speedz;
        const rotate = el.dataset.rotation;
        let isLeft =
          parseFloat(getComputedStyle(el).left) < window.innerWidth / 2
            ? 1
            : -1;
        let zValue =
          (event.clientX - parseFloat(getComputedStyle(el).left)) *
          isLeft *
          0.1;
        el.style.transform = ` perspective(2300px) translateZ(${
          zValue * speedz
        }px) rotateY(${rotatedegree * rotate}deg) translateX(calc(-50% - ${
          position.coords.x * speedx
        }px)) translateY(calc(-50% + ${position.coords.y * speedy}px))   `;
      });
    };
    window.addEventListener("mousemove", handleMousemove);

    return () => {
      window.removeEventListener("mousemove", handleMousemove);
    };
  }, [position.coords.x, position.coords.y]);

  return (
    <>
      <div className="home">
        <Image
          src={background}
          alt="image"
          data-speedz="0"
          data-speedx="0.30"
          data-speedy="0.26"
          data-rotation="0"
          draggable="false"
          className="parallax bg-img"
        />
        <div className="images">
          <Image
            src={fog_7}
            alt="image"
            data-speedx="0.18"
            data-speedz="0"
            data-speedy="0.09"
            data-rotation="0"
            draggable="false"
            className="parallax fog-7"
          />
          <Image
            src={mountain_10}
            alt="image"
            data-speedx="0.16"
            data-speedz="0"
            data-rotation="0"
            data-speedy="0.14"
            draggable="false"
            className="parallax mountain-10"
          />
          <Image
            src={fog_6}
            alt="image"
            data-speedx="0.16"
            data-speedy="0.13"
            data-rotation="0"
            data-speedz="0.11"
            draggable="false"
            className="parallax fog-6"
          />
          <Image
            src={mountain_9}
            alt="image"
            data-speedx="0.14"
            data-rotation="0"
            data-speedy="0.12"
            data-speedz="0.15"
            draggable="false"
            className="parallax mountain-9"
          />
          <Image
            src={mountain_8}
            alt="image"
            data-speedx="0.12"
            data-speedy="0.10"
            data-speedz="0.10"
            data-rotation="0.05"
            draggable="false"
            className="parallax mountain-8"
          />
          <Image
            src={fog_5}
            alt="image"
            data-speedx="0.20"
            data-speedy="0.15"
            data-rotation="0"
            data-speedz="0"
            draggable="false"
            className="parallax fog-5"
          />
          <Image
            src={mountain_7}
            alt="image"
            data-speedx="0.128"
            data-rotation="0.07"
            data-speedy="0.1"
            data-speedz="0.06"
            draggable="false"
            className="parallax mountain-7"
          />
          <div data-rotation="0.13" className="parallax text">
            <h1>Abhishek</h1>
            <h2>INDIA</h2>
          </div>
          {/* <div className="buttons">
            <Link
              className="resume"
              href="https://drive.google.com/file/d/1orc3PUxQSv5rlyLZAKYlNmr8vZ3oVBAa/view?usp=drive_link"
              target="_blank"
            >
              Resume
            </Link>
            <div className="contact-page">Let's Talk</div>
          </div> */}
          <Image
            src={mountain_6}
            alt="image"
            data-speedx="0.10"
            data-speedz="0.05"
            data-speedy="0.08"
            data-rotation="0.09"
            draggable="false"
            className="parallax mountain-6"
          />
          <Image
            src={fog_4}
            alt="image"
            data-speedx="0.1"
            data-speedy="0.1"
            data-rotation="0"
            data-speedz="0.03"
            draggable="false"
            className="parallax fog-4"
          />
          <Image
            src={mountain_5}
            alt="image"
            data-speedx="0.040"
            data-speedz="0.10"
            data-speedy="0.060"
            data-rotation="0.1"
            draggable="false"
            className="parallax mountain-5"
          />
          <Image
            src={fog_3}
            alt="image"
            data-speedx="0.095"
            data-speedy="0.066"
            data-speedz="0"
            data-rotation="0"
            draggable="false"
            className="parallax fog-3"
          />
          <Image
            src={mountain_4}
            alt="image"
            data-speedx="0.036"
            data-speedy="0.060"
            data-speedz="0.15"
            data-rotation="0.11"
            draggable="false"
            className="parallax mountain-4"
          />
          <Image
            src={mountain_3}
            alt="image"
            data-speedx="0.026"
            data-speedz="0"
            data-speedy="0.069"
            data-rotation="0.12"
            draggable="false"
            className="parallax mountain-3"
          />
          <Image
            src={fog_2}
            alt="image"
            data-speedx="0.060"
            data-speedy="0.050"
            data-speedz="0"
            data-rotation="0"
            draggable="false"
            className="parallax fog-2"
          />
          <Image
            src={mountain_2}
            alt="image"
            data-speedx="0.023"
            data-speedy="0.060"
            data-speedz="0"
            data-rotation="0.14"
            draggable="false"
            className="parallax mountain-2"
          />
          <Image
            src={mountain_1}
            alt="image"
            data-speedx="0.015"
            data-speedy="0.069"
            data-speedz="0"
            data-rotation="0.15"
            draggable="false"
            className="parallax mountain-1"
          />
          <Image
            src={sun_rays}
            alt="image"
            draggable="false"
            className="sun_rays"
          />
          <Image
            src={black_shadow}
            alt="image"
            draggable="false"
            className="black_shadow"
          />
          <Image
            src={fog_1}
            alt="image"
            data-speedx="0.016"
            data-speedy="0.016"
            draggable="false"
            className="parallax fog-1"
          />
        </div>
      </div>
    </>
  );
};
export default Main;
