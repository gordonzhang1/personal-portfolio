import React from "react";
import { Chrono } from "react-chrono";

export default function Experience() {
  const items = [
    {
      title: "Creative Director",
      cardTitle: "Creative Director",
      cardSubtitle: "Miami, FL",
      cardDetailedText:
        "Creative Direction, User Experience, Visual Design, Project Management, Team Leading",
      date: "2011 - present",
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
    <div style={{ width: "500px", height: "950px" }}>
      <h1>Experience</h1>
      <Chrono items={items} mode="VERTICAL" />
    </div>
  );
}
