"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Pen from "../Assests/penimages/pen.png";
import Cap from "../Assests/penimages/cap.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import "./contact.css";

const Contact = () => {
  gsap.registerPlugin(ScrollTrigger);
  const cap = useRef(null);
  const pen = useRef(null);
  const form = useRef(null);
  const pentrigger = useRef(null);
  const button = useRef(null);

  useEffect(() => {
    const capEl = cap.current;
    const penEl = pen.current;
    const formEl = form.current;
    const pentriggerEl = pentrigger.current;

    const capWidth = capEl.getBoundingClientRect().width;
    const capTranslate = -capEl.getBoundingClientRect().left;
    const penTranslate = penEl.getBoundingClientRect().right - 1.4 * capWidth;

    capEl.style.transform = `translateX(${capWidth / 2}px)`;
    penEl.style.transform = `translateX(${-capWidth / 2}px)`;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: pentriggerEl,
        start: "top top",
        end: "bottom top",
        scrub: 1,
        pin: true,
      },
    });
    const change =
      ((form.current.getBoundingClientRect().bottom -
        button.current.getBoundingClientRect().bottom) /
        window.innerHeight) *
      100;
    // Timeline animation for opening pen, form movement, and closing pen
    tl.to(capEl, { translateX: capTranslate, duration: 1 })
      .to(penEl, { translateX: penTranslate, duration: 1 }, "-=1")
      .to(formEl, {
        yPercent: -(200 - change),
        duration: 8,
      })
      .to(capEl, { translateX: capWidth / 2, duration: 0.5 })
      .to(penEl, { translateX: -(capWidth / 2), duration: 0.5 }, "-=0.5");

    return () => {
      tl.kill(); // Cleanup on unmount to avoid memory leaks
    };
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.status === 200) {
        setResponse("Message sent successfully!");
      } else {
        setResponse(`Error: ${data.error}`);
      }
    } catch (error) {
      setResponse("An error occurred while sending the message.");
    }
    setFormData({
      name: "",
      email: "",
      message: "",
    });
    setLoading(false);
  };

  return (
    <div className="contact" id="contactid">
      <div ref={pentrigger} className="animatepen">
        <div className="pen-open">
          <Image
            ref={cap}
            className="cap-pen"
            src={Cap}
            alt="Cap Image"
            priority
          />
          <Image
            ref={pen}
            className="pen-pen"
            src={Pen}
            alt="Pen Image"
            priority
          />
        </div>
        <div ref={form} className="contact-form">
          <h2 className="h2text">GET IN TOUCH</h2>
          <div className="contact-info">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button
            ref={button}
            type="submit"
            onClick={handleSubmit}
            className="btn-submit"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
