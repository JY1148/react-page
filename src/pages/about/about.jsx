import React from "react";
import Accordion from "../../components/Accordion/Accordion";
import "./about.css";
import bgimg from "../../assets/comics.jpg"

export default function About() {
  return (
    <div className="about">
      <div className='about-bg-container'>
        <img className="about-bg" src={bgimg} alt=""/>
        <div class="on-img-words">MARVEL HALL OF FAME</div>
      </div>
      <Accordion/>
    </div>
  );
}
