import "../nav.css";

export default function Nav() {
  return (
    <>
      <div className="big-nav">
        <div className="nav-container">
          <div className="home-container">
            <div className="home.nav">
              <a href="#">Home</a>
            </div>
            <div className="about-nav">
              <a href="#about">About</a>
            </div>
            <div className="skills-nav">
              <a href="#skills">Skills</a>
            </div>
            <div className="experience-nav">
              <a href="#experience">Experience</a>
            </div>
            <div className="projects-nav">
              <a href="#projects">Projects</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
