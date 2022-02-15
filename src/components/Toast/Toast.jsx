import React from "react";
import "./Toast.css";

export default function Toast(props) {
  return (
    <div className={`toast ${props.type==="warning"?"yellow-bg":"green-bg"}`}>
      <div className={`toast-message ${props.type}`}>{props.type==="warning"?<span>	
&#10071;</span>:<span>&#127882;</span>}{props.message}</div>
      <div className="progress">
        <div className={`progress-bar ${props.type==="warning"?"yellow-bar":"green-bar"} ${props.animation?"animation-bar":""}`} onAnimationEnd={()=>{
            props.setAnimation(false);
        }}></div>
      </div>
    </div>
  );
}
