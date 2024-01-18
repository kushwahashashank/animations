"use client";
import React, { useState, useEffect } from "react";
import "./about.css";
const about = () => {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const element = document.querySelector(".container");
      const conatinerY_Offset = element.getBoundingClientRect().top;
      const window_Size = window.innerHeight;
      console.log(window_Size, conatinerY_Offset);
      if (conatinerY_Offset < window_Size) {
        element.classList.add("animation");
      }
    });
    // console.log(rconatinerY_Offsetect);
  }, []);

  return (
    <>
      <div className="container">
        <div className="overflow-hidden">
          <h1 className="header drop-in">Hi, This ia Abhishek Kushwaha</h1>
          <h1 className="header drop-in-1 overflow-hidden">
            I build Web apps & solve problems on different coding websites
          </h1>
          <h1 className="header drop-in-2 overflow-hidden">
            I build Web apps & solve problems on different coding websites
          </h1>
        </div>
      </div>
    </>
  );
};
export default about;
