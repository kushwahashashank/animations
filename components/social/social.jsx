import React from "react";
import Link from "next/link";
import {
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaWhatsapp,
} from "react-icons/fa";

import "./social.css";
const social = () => {
  return (
    <div className="social">
      <Link
        href="https://www.instagram.com/_kushwaha_shashank_/"
        target="_blank"
      >
        <FaInstagram className="social-icons" />
      </Link>
      <Link
        href="https://www.linkedin.com/in/kushwahashashank/"
        target="_blank"
      >
        <FaLinkedinIn className="social-icons" />
      </Link>

      <Link href="https://github.com/kushwahashashank/" target="_blank">
        <FaGithub className="social-icons" />
      </Link>
      <Link
        href="https://api.whatsapp.com/send/?phone=%2B918081637834&text&type=phone_number&app_absent=0"
        target="_blank"
      >
        <FaWhatsapp className="social-icons" />
      </Link>
    </div>
  );
};

export default social;
