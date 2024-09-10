import Name from "./Name";
import Nav from "./Nav";
import "../App.css";
import About from "./About";
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
    </>
  );
}

export default App;
