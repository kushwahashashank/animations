"use client";
import { useState, createContext } from "react";

export const StateContext = createContext("");

let Context = ({ children }) => {
  const [aboutposition, setAboutposition] = useState("Hello bro");
  return (
    <StateContext.Provider value={{ aboutposition, setAboutposition }}>
      {children}
    </StateContext.Provider>
  );
};

export { Context };
