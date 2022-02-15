import React from "react";
import "./Reloadbtn.css";

export default function Reloadbtn() {
  function refreshPage() {
    window.location.reload(false);
  }
  return (
    <div className="button-container">
      <button onClick={refreshPage} className="reloadbtn">
        <span>Reload</span>
      </button>
    </div>
  );
}
