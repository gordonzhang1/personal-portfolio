import Name from "./Name";
import Nav from "./Nav";
import "../App.css";
function App() {
  return (
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
  );
}

export default App;
