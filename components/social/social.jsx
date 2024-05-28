import React from "react";
import Link from "next/link";
import { GiMonkey } from "react-icons/gi";
// import { Tooltip } from "react-tooltip";
import { FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";

import "./social.css";
import Tooltip from "../Tooltip/Tooltip";
const social = () => {
  return (
    <div className="social">
      <Tooltip content="Follow me on Instagram" direction="top">
        <Link
          href="https://www.instagram.com/_kushwaha_shashank_/"
          target="_blank"
        >
          <FaInstagram className="social-icons" />
        </Link>
      </Tooltip>

      <Tooltip content="Connect with me on LinkedIn" direction="top">
        <Link
          href="https://www.linkedin.com/in/kushwahashashank/"
          target="_blank"
        >
          <FaLinkedinIn className="social-icons" />
        </Link>
      </Tooltip>

      <Tooltip content="My Github Profile" direction="top">
        <Link href="https://github.com/kushwahashashank/" target="_blank">
          <FaGithub className="social-icons" />
        </Link>
      </Tooltip>
      <Tooltip content="My Competitive Programming Profile" direction="top">
        <Link href="https://clist.by/coder/kushwahashashank/" target="_blank">
          <GiMonkey className="social-icons" />
        </Link>
      </Tooltip>

      {/* <Tooltip
        id="github"
        style={{
          maxWidth: "10rem",
          textAlign: "center",
        }}
        variant="light"
      /> */}
    </div>
  );
};

export default social;
