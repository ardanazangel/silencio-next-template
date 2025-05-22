"use client";

import "./grid.css";
import { useEffect, useState } from "react";

export default function grid() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.shiftKey && event.key === "W") {
        setIsVisible((prev) => !prev);
      }
    };

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <div id="grid" style={{ display: isVisible ? "none" : "flex" }}>
      <div className="grid-item"></div>
      <div className="grid-item"></div>
      <div className="grid-item"></div>
      <div className="grid-item"></div>
      <div className="grid-item"></div>
      <div className="grid-item"></div>
      <div className="grid-item"></div>
      <div className="grid-item"></div>
      <div className="grid-item"></div>
      <div className="grid-item"></div>
      <div className="grid-item"></div>
      <div className="grid-item"></div>
    </div>
  );
}
