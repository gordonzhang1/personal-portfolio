import "../Skills.css";
export default function Skills() {
  return (
    <>
      <div className="skills-container">
        <h1 className="skills-h1">Technical Skills</h1>

        <div className="skills">
          <div className="lan">
            <h2>Programming Languages</h2>
            <div className="sphere-and-shadow">
              <div className="sphere-container">
                <img
                  src="https://www.aayush65.com/assets/python-b64ed3d8.png"
                  alt="Python"
                  className="python-image"
                  title="Python"
                />
              </div>
              <div className="skill-shadow"></div>
            </div>
          </div>
          <div className="web">
            <h2>Tools and Frameworks</h2>
            <ul className="skills-ul">
              <li className="skills-li">React</li>
              <li className="skills-li">Node.js</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
