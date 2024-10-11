import React from "react";
import { Chrono } from "react-chrono";
import "../Experience.css";

export default function Experience() {
  const items = [
    {
      title: "Coding Lesson Developer and Executive",
      cardTitle: "Coding Lesson Developer and Executive",
      cardSubtitle: "Vancouver, FL",
      cardDetailedText:
        "Creative Direction, User Experience, Visual Design, Project Management, Team Leading",
      date: "2023",
    },
    {
      title: "Art Director",
      cardTitle: "Art Director",
      cardSubtitle: "San Francisco, CA",
      cardDetailedText:
        "Creative Direction, User Experience, Visual Design, SEO, Online Marketing",
      date: "2010 - 2011",
    },
    {
      title: "Web Designer",
      cardTitle: "Web Designer",
      cardSubtitle: "Los Angeles, CA",
      cardDetailedText: "User Experience, Visual Design",
      date: "2008 - 2010",
    },
    {
      title: "Web Designer",
      cardTitle: "Web Designer",
      cardSubtitle: "San Francisco, CA",
      cardDetailedText: "User Experience, Visual Design",
      date: "2006 - 2008",
    },
  ];

  return (
    <div className="timeline" style={{ width: "65vw", height: "100vh" }}>
      <h1>Experience</h1>
      <div className="chrono">
        <Chrono
          items={items}
          slideShow
          slideItemDuration={1000}
          slideShowType="reveal"
          mode="VERTICAL" // Adjust mode as needed
          disableToolbar={true}
        />{" "}
      </div>
    </div>
  );
}
