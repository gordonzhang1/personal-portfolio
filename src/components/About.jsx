import circle from "../assets/circle.png";
import "../About.css";

export default function About() {
  return (
    <>
      <div className="about-container-large">
        <div className="about-container">
          <p class="get">Get to Know More</p>
          <h1>About Me</h1>
        </div>

        <div className="description-container">
          <div
            style={{
              width: "100%",
              height: 0,
              paddingBottom: "15%",
              position: "relative",
            }}
          >
            <iframe
              src="https://giphy.com/embed/3o7qE1YN7aBOFPRw8E"
              width="120%"
              height="120%"
              style={{ position: "absolute" }}
              frameBorder="0"
              className="giphy-embed"
              allowFullScreen
            ></iframe>
          </div>
          <div class="description">
            Hi! I’m Gordon Zhang, an aspiring software developer with a strong
            interest in full-stack development, machine learning, and embedded
            systems. I'm passionate about creating scalable, efficient solutions
            that address real-world challenges and optimize user experiences.
            Originally from Vancouver, BC, I’m now based in Waterloo, ON, hoping
            to make an impact by developing world changing technologies.
          </div>
        </div>
        <div className="education">
          <h2>Education</h2>
          <div>
            University of Waterloo, BASc in Computer Engineering, Honours, Co-op
            | Sept 2024 - May 2029 |
          </div>
        </div>
      </div>
    </>
  );
}
