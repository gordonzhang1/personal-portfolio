import circle from "../assets/circle.png";
import "../About.css";

export default function About() {
  return (
    <>
      <div className="container">
        <div className="about-container">
          <p class="get">Get to Know More</p>
          <h1>About Me</h1>
        </div>

        <div className="description-container">
          <img src={circle} />
          <div class="description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. At
            assumenda cum accusantium exercitationem eius dolor, libero,
            voluptatibus necessitatibus itaque impedit similique eligendi. In
            nulla, asperiores quae repellendus ratione dolore fugiat?Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Officia et vitae,
            repellendus aut magnam nesciunt vel ab impedit iure quia harum eaque
            voluptates quidem voluptate saepe, expedita dignissimos. Possimus,
            exercitationem!
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
