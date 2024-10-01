"use client";
import { useState, useEffect } from "react";
import { About, Contact, Social, Projects, Landing } from "@/components";

export default function Home() {
  // State for loading progress
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          setLoading(false); // When progress is 100%, stop loading
          return 100;
        }
        return prevProgress + 1; // Increase by 1% each interval
      });
    }, 60); // Speed of the loading progress, adjust interval speed as needed

    // Ensure loading ends once the page is fully loaded
    window.onload = () => {
      setProgress(100);
      setLoading(false);
    };

    return () => clearInterval(interval); // Clear interval on cleanup
  }, []);

  // Loader component
  if (loading) {
    return (
      <div style={styles.loaderContainer}>
        <div style={styles.loader}>
          <svg style={styles.svg} viewBox="0 0 36 36" width="120" height="120">
            <path
              style={styles.circleBackground}
              d="M18 2.0845
                 a 15.9155 15.9155 0 0 1 0 31.831
                 a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <path
              style={{
                ...styles.circleProgress,
                strokeDasharray: `${progress}, 100` as any,
              }}
              d="M18 2.0845
                 a 15.9155 15.9155 0 0 1 0 31.831
                 a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <text x="18" y="20.35" style={styles.text}>
              {progress} %
            </text>
          </svg>
        </div>
      </div>
    );
  }

  // Render the main content once loaded
  return (
    <>
      <Landing />
      <About />
      <Projects />
      <Contact />
      <Social />
    </>
  );
}

// Styling for the loader and centering
// Styling for the loader and centering
const styles = {
  loaderContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh", // Full screen height
    backgroundColor: "black", // Optional background color during loading
    transform: "rotate(90deg)",
    transformOrigin: "center",
  },
  loader: {
    fontSize: "24px",
    color: "white", // Text color
  },
  svg: {
    transform: "rotate(-90deg)", // Rotate to start the progress from the top
  },
  circleBackground: {
    fill: "none",
    stroke: "black", // Base color of the circle
    strokeWidth: 0.5,
  },
  circleProgress: {
    fill: "none",
    stroke: "white", // Color of the progress
    strokeWidth: 0.5,
    strokeLinecap: "round", // Use valid values for strokeLinecap
    strokeDasharray: "0, 100", // Initial progress
    transition: "stroke-dasharray 0.3s ease", // Smooth transition
  },
  text: {
    fill: "white", // Color of the percentage text
    fontSize: "6px",
    textAnchor: "middle",
  },
};
