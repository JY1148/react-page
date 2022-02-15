import React from "react";
import "./Topbtn.css";

export default function Topbtn() {
  const backToTop = () => {
    window.scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };
  return (
    <div className="button-container">
      <button onClick={backToTop} className="topbtn">
        <span>Top</span>
      </button>
    </div>
  );
}
