import React from "react";
import { About, Social, Projects, Main, Contact } from "../components";
const page = () => {
  // styles = {{
  //   top= "0",
  // z-index 4000;
  // height: 17000vh;
  // width: 100vw;
  // color: rgb(62, 62, 62);
  // background: transparent;
  // }
  // }
  return (
    <>
      <div style={{ scrollBehavior: "smooth" }}>
        <Main />
        <Social />
        <About />
        <Projects />
        <Contact />
      </div>
    </>
  );
};

export default page;
