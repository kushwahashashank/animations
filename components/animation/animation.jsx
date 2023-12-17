"use client";
import React, { useState } from "react";
import "./animation.css";
import { About, Navbar } from "..";
const Animation = () => {
  const [loaded, setLoaded] = useState(false);
  document.addEventListener("readystatechange", function (e) {
    // setLoaded(true);
    const myTimeout = setTimeout(setLoaded(true), 30);
    clearTimeout(myTimeout);
  });
  return (
    <>
      {!loaded ? (
        <>
          <div className="loading">
            <h1 style={{ color: "red" }}>Loading...</h1>
          </div>
        </>
      ) : (
        <div className="conatiner">
          <About className="top" />
          <Navbar className="bottom" />
        </div>
      )}
    </>
  );
};
export default Animation;
