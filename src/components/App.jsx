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

      <div className="about">
        <About />
      </div>
    </>
  );
}

export default App;
