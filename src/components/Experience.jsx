import React from "react";
import { Chrono } from "react-chrono";
import "../Experience.css";

export default function Experience() {
  return (
    <div className="timeline">
      <h1>Experience</h1>
      <div className="experience-items">
        <div className="item1">
          <h2>Full Stack Developer</h2>
          <p class="date-location">BLNDSPT | Oct 2024 -- Present</p>
          <ul className="experience-ul-1">
            <li>feat1</li>
            <li>feat2</li>
            <li>feat3</li>
            <li>feat4</li>
          </ul>
        </div>
        <div className="item2">
          <h2>Firmware Subteam member</h2>
          <p class="date-location">
            UW Formula Electric | Sept 2024 -- Present
          </p>
          <ul className="experience-ul-1">
            <li>feat1</li>
            <li>feat2</li>
            <li>feat3</li>
            <li>feat4</li>
          </ul>
        </div>
        <div className="item3">
          <h2>Software Curriculum Developer & Associate Founder</h2>
          <p class="date-location">
            ARTex Coding Society | Oct 2024 -- Present
          </p>
          <ul className="experience-ul-1">
            <li>feat1</li>
            <li>feat2</li>
            <li>feat3</li>
            <li>feat4</li>
          </ul>
        </div>
        <div className="item4">
          <h2>Web Development Instructor</h2>
          <p class="date-location">StudyPug | Oct 2024 -- Present</p>
          <ul className="experience-ul-1">
            <li>feat1</li>
            <li>feat2</li>
            <li>feat3</li>
            <li>feat4</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
