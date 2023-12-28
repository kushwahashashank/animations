"use client";
import { useState, createContext } from "react";

export const StateContext = createContext("");

let Context = ({ children }) => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  return (
    <StateContext.Provider value={{ coords, setCoords }}>
      {children}
    </StateContext.Provider>
  );
};

export { Context };
