import Name from "./Name";
import Nav from "./Nav";
import "../App.css";
import About from "./About";
import Experience from "./Experience";
function App() {
  return (
    <>
      <div className="landing">
        <div className="landing-container">
          <div class="nav">
            <Nav />
          </div>
          <div class="name">
            <Name />
          </div>
        </div>
      </div>

      <section id="about">
        <div className="about">
          <About />
        </div>
      </section>

      <section id="experience">
        <div className="experience">
          <Experience />
        </div>
      </section>
    </>
  );
}

export default App;
