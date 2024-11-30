import React from "react";
import "./landing.css";
import Image from "next/image";
import Link from "next/link";
import Background from "../Assests/background/background.webp";
import { PiHandsPrayingFill } from "react-icons/pi";

const Landing = () => {
  return (
    <div className="landing-container">
      <Image
        className="landing-container-background"
        src={Background}
        alt="https://images.unsplash.com/photo-1463171515643-952cee54d42a?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        draggable="false"
      />
      <div className="intro-content">
        <p className="intro-head">
          नमस्कार <PiHandsPrayingFill />, I'm
        </p>
        <p className="intro name">
          ABHISHEK <br /> KUSHWAHA
        </p>
        <p className="intro">Software Developer | Artist | Design Specialist</p>
        <div className="landing-buttons">
          <Link
            className="hireme"
            href="https://drive.google.com/file/d/1orc3PUxQSv5rlyLZAKYlNmr8vZ3oVBAa/view?usp=drive_link"
            target="_blank"
          >
            Hire Me
          </Link>
          <Link
            className="hireme"
            href="#contactid"
            scroll={false}
            onClick={(e) => {
              e.preventDefault(); // Prevent the default anchor behavior
              const element = document.getElementById("contactid");
              if (!element) return;
              let targetPosition =
                window.innerWidth / window.innerHeight >= 1.6
                  ? element.getBoundingClientRect().top -
                    element.getBoundingClientRect().width / 8
                  : element.getBoundingClientRect().top -
                    element.getBoundingClientRect().width / 3; // Top of element relative to viewport
              const startPosition = window.scrollY;
              const distance = targetPosition - startPosition;
              const duration = 1300; // Adjust to control the speed of the scroll
              let startTime = null;

              function animation(currentTime) {
                if (!startTime) startTime = currentTime;

                const timeElapsed = currentTime - startTime;
                const run = ease(
                  timeElapsed,
                  startPosition,
                  distance,
                  duration
                );
                window.scrollTo(0, run);

                if (timeElapsed < duration) requestAnimationFrame(animation);
              }

              function ease(t, b, c, d) {
                // easeInOutQuad easing function
                t /= d / 2;
                if (t < 1) return (c / 2) * t * t + b;
                t--;
                return (-c / 2) * (t * (t - 2) - 1) + b;
              }

              requestAnimationFrame(animation);
            }}
          >
            Let's Talk
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;
