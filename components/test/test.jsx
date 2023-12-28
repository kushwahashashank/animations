"use client"
import React, {useState,useEffect} from 'react';
import Link from 'next/link'
import gsap from 'gsap';
import "./test.css"
const test = () => {

    const content = document.querySelector(".content");
    const link = document.querySelector("Link");
    const linkIcon = document.querySelector(".btn-icon");
    let linkAnimated = false;
    
    let xTo = gsap.quickTo(".hidden-content", "--x", {
        duration: 0.4,
        ease: "power4.out"
      }),
      yTo = gsap.quickTo(".hidden-content", "--y", {
        duration: 0.4,
        ease: "power4.out"
      });
    
    let tl = gsap.timeline({ paused: true });
    tl.to(".hidden-content", {
      "--size": 250,
      duration: 0.75,
      ease: "back.out(1.7)"
    });
    
    let hoveringContent = gsap.utils.toArray("p", content);
    
    hoveringContent.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        tl.restart();
      });
      el.addEventListener("mouseleave", () => {
        tl.reverse();
      });
    });
    
    /***************************************
                  Btn Hovering
    ***************************************/
    let btnTl = gsap.timeline({ paused: true });
    btnTl.to(".hidden-content", {
      "--size": 20,
      duration: 0.75,
      ease: "back.out(1.7)"
    });
    
    link.addEventListener("mouseenter", (e) => {
      linkAnimated = true;
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
      let iconRect = linkIcon.getBoundingClientRect();
      let centerX = iconRect.left + iconRect.width / 2;
      let centerY = iconRect.top + iconRect.height / 2 + scrollTop;
    
      yTo(centerY);
      xTo(centerX);
      btnTl.restart();
    });-
    
    link.addEventListener("mouseleave", (e) => {
      linkAnimated = false;
      btnTl.reverse();
    });
    
    /***************************************
        Add Mask on First Mouse Movement
    ***************************************/
    window.addEventListener("mousemove", onFirstMove);
    
    function onFirstMove(e) {
      window.removeEventListener("mousemove", onFirstMove);
      gsap.set(".hidden-content", { autoAlpha: 1, "--x": e.pageX, "--y": e.pageY });
    
      window.addEventListener("mousemove", (e) => {
        if (!linkAnimated) {
          yTo(e.pageY);
          xTo(e.pageX);
        }
      });
    }
    
    /***************************************
          Only for the preview image
    ***************************************/
    gsap.set(".hidden-content", {
      autoAlpha: 1,
      "--x": window.innerWidth / 3,
      "--y": window.innerHeight / 2
    });
    tl.progress(0.2);
    
  return (
    <>
<div className="bg position-relative pb-5">
  <div className="content">
    <div className="container">
      <div className="row justify-content-center align-items-center min-vh-100">
        <div className="col-12 col-md-10 col-lg-8">
          <p className="display-3 fw-bold text-center">
            Have you ever noticed that cats have a peculiar fascination with keyboards?
          </p>
        </div>
      </div>
      <div className="row justify-content-center align-items-center min-vh-100">
        <div className="col-12 col-md-10 col-lg-8">
          <p className="display-3 fw-bold text-center">
            Do not share this information with anyone
          </p>
        </div>
      </div>
      <div className="text-center">
        <Link className="d-inline-flex justify-content-center align-items-center p-3" href="https://greensock.com/" target="_blank">
          <span>psst discover more</span>
          <i className="btn-icon bi bi-arrow-right-short fs-4"></i>
        </Link>
      </div>
    </div>
  </div>
  <div className="hidden-content">
    <div className="container">
      <div className="row justify-content-center align-items-center min-vh-100">
        <div className="col-12 col-md-10 col-lg-8">
          <p className="display-3 fw-bold text-center">
            I am convinced that cats secretly control the Internet.
          </p>
        </div>
      </div>
      <div className="row justify-content-center align-items-center min-vh-100">
        <div className="col-12 col-md-10 col-lg-8">
          <p className="display-3 fw-bold text-center">
            especially not with the cats!
          </p>
        </div>
      </div>
      <div className="text-center">
        <div className="d-inline-flex justify-content-center align-items-center p-3">
          <span>psst discover more</span>
          <i className="btn-icon bi bi-arrow-right-short fs-4"></i>
        </div>
      </div>
    </div>
  </div>
</div>
    </>
  )
}
export default test;
