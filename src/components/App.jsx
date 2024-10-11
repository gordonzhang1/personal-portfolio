import Name from "./Name";
import "../App.css";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";
import Nav from "./Nav";
function App() {
  return (
    <>
      <div className="nav">
        <Nav />
      </div>
      <div className="landing">
        <div className="landing-container">
          <div class="name">
            <Name />
          </div>
        </div>
      </div>
      <section id="about" className="about-section">
        <div className="about">
          <About />
        </div>
      </section>

      <section id="experience" className="experience-section">
        <div className="experience-app">
          <Experience />
        </div>
      </section>

      <section id="projects" className="projects-section">
        <div>
          <Projects />
        </div>
      </section>

      <section id="skills" className="skills-app">
        <div>
          <Skills />
        </div>
      </section>

      <section id="contact" className="contact-app">
        <div>
          <Contact />
        </div>
      </section>
    </>
  );
}

export default App;
