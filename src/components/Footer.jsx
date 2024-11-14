import React from "react";
import "../Footer.css";

export default function Footer() {
  return (
    <>
      <div className="footer-container">
        <div className="footer-content">
          Designed with <a href="figma.com">Figma</a>, Built with{" "}
          <a href="react.com">React</a>, Deployed with{" "}
          <a href="vercel.com">Vercel</a>
        </div>
      </div>
    </>
  );
}
