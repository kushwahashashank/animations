"use client";
import React, { useState, useEffect } from "react";

const Cell = ({ value, onChange, isSelected }) => {
  const handleKeyDown = (e) => {
    // Handle arrow key navigation
    if (
      e.key === "ArrowUp" ||
      e.key === "ArrowDown" ||
      e.key === "ArrowLeft" ||
      e.key === "ArrowRight"
    ) {
      e.preventDefault();
    }

    // Handle arrow key navigation
    switch (e.key) {
      case "ArrowUp":
        // Handle moving up
        break;
      case "ArrowDown":
        // Handle moving down
        break;
      case "ArrowLeft":
        // Handle moving left
        break;
      case "ArrowRight":
        // Handle moving right
        break;
      default:
        break;
    }
  };

  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      onKeyDown={handleKeyDown}
      style={{ border: isSelected ? "2px solid blue" : "1px solid #ccc" }}
    />
  );
};

const Grid = ({ rows, cols }) => {
  const [grid, setGrid] = useState([]);

  useEffect(() => {
    // Initialize the grid with empty values
    const newGrid = Array.from({ length: rows }, () => Array(cols).fill(""));
    setGrid(newGrid);
  }, [rows, cols]);

  const handleCellChange = (row, col, value) => {
    const newGrid = [...grid];
    newGrid[row][col] = value;
    setGrid(newGrid);
  };

  return (
    <div>
      {grid.map((row, rowIndex) => (
        <div key={rowIndex} style={{ display: "flex" }}>
          {row.map((cell, colIndex) => (
            <Cell
              key={colIndex}
              value={cell}
              onChange={(value) => handleCellChange(rowIndex, colIndex, value)}
              //  isSelected={/* Implement logic to check if this cell is selected */}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default function Arrow() {
  return (
    <div>
      <h1>Grid App</h1>
      <Grid rows={3} cols={3} />
    </div>
  );
}
