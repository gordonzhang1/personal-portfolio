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
          <p class="date-location">BLNDSPT Productions | Oct 2024 -- Present</p>
          <ul className="experience-ul-1">
            <li>
              Developed and designed user-friendly <strong>E-Commerce</strong>{" "}
              web app with <strong>React & Node.js</strong> by directly working
              with cleint to suite their needs, boosting brand recognition by
              <strong> 300%</strong>
            </li>
            <li>
              Optimized check out page by integrating a{" "}
              <strong>time-sensitive discount algorithm</strong> with Python
              boosting customer purchases by <strong>20%</strong>
            </li>
            <li>
              Engineered <strong>RESTful APIs</strong> using{" "}
              <strong>Express.js</strong> for secure <strong>OAuth</strong>{" "}
              system with <strong>Firebase</strong> for easy email login and
              signup
            </li>
            <li>
              Enhanced checkout security by integrating{" "}
              <strong>Stripe API's</strong> webhooks with{" "}
              <strong>Node.js</strong>, reducing checkout errors by{" "}
              <strong>15%</strong>
            </li>
          </ul>
        </div>
        <div className="item2">
          <h2>Firmware Subteam member</h2>
          <p class="date-location">
            UW Formula Electric | Sept 2024 -- Present
          </p>
          <ul className="experience-ul-1">
            <li>
              Programmed <strong>CLI</strong> command in <strong>C</strong> to
              control an inverter and send CAN message to modify inverter EEPROM
              parameters
            </li>
            <li>feat2</li>
          </ul>
        </div>
        <div className="item3">
          <h2>Software Curriculum Developer & Associate Founder</h2>
          <p class="date-location">
            ARTex Coding Society | Jan 2023 -- May 2024
          </p>
          <ul className="experience-ul-1">
            <li>
              Co-founded and led a global non-profit, providing free coding
              lessons to <strong>900</strong> students across <strong>4</strong>{" "}
              countries by overseeing curriculum developement
            </li>
            <li>
              Programmed <strong>50</strong> interactive coding puzzles in{" "}
              <strong>Javascript</strong>, increasing classroom engagement by{" "}
              <strong>80%</strong>
            </li>
            <li>
              Spearheaded curriculum development by developing{" "}
              <strong>10</strong> week-long lessons in Javascript,{" "}
              <strong>Java</strong> and <strong>Python</strong> for{" "}
              <strong>80</strong> teachers
            </li>
            <li>
              Developed <strong>30</strong> <strong>RESTful API</strong>{" "}
              exercises to prepare students and assisth them with making a food
              delivery web app
            </li>
            <li>
              Managed <strong>10</strong> administrators by organizing outreach
              initiatives to achieve an <strong>400%</strong> increase in
              student intake
            </li>
          </ul>
        </div>
        <div className="item4">
          <h2>Web Development Instructor</h2>
          <p class="date-location">StudyPug | Mar 2023 -- Apr 2023</p>
          <ul className="experience-ul-1">
            <li>
              Delivered hands-on instruction in <strong>HTML/CSS</strong> and{" "}
              <strong>Javascript</strong> to <strong>12</strong> high school
              students
            </li>
            <li>
              Guided students in building dynamic web pages by creating
              personalized coding exercises and providing one-on-one support in
              using React, Node.js, Git, and GitHub. Demonstrated effective
              development workflows and collaborative coding practices.
            </li>
            <li>
              Designed and led interactive coding challenges to teach advanced
              topics such as DOM manipulation, event handling, object-oriented
              programming principles, and Webpack configuration, ensuring
              students could apply these concepts in practical projects.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
