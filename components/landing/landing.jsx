import React from "react";
import "./landing.css";
import Link from "next/link";
import { home } from "../Assests/mountains/Home.png";
const Landing = () => {
  return (
    <div className="landing-container">
      <img
        className="landing-container-background"
        src="https://images.unsplash.com/photo-1463171515643-952cee54d42a?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        draggable="false"
      />
      <div className="intro-content">
        <p className="intro">Hello I'm</p>
        <p className="intro name">
          ABHISHEK <br /> KUSHWAHA
        </p>
        <p style={{ fontSize: "1.1rem" }} className="intro">
          Software Developer | Artist | Design Specialist
        </p>
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
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
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
