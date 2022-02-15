import React from "react";
import spin from "../../assets/Loading-Spin-200px.png";
import "./LoadingSpin.css";

export default function LoadingSpin() {
  return (
    <div className="loading" role="status">
      <div className="loading-spin-icon">
        <img src={spin} alt="loading-spin-icon" />
      </div>
      <div className="loading-text">
        Assembling 
        Marvel Hero
        Characters...
      </div>
    </div>
  );
}
