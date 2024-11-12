import "../Projects.css";
import loo from "../assets/loolooloonew.png";
import js from "../assets/jsnew.png";
import ts from "../assets/tsnewnew.png";
import c from "../assets/cnew.png";
import cplus from "../assets/cplusnew.png";
import python from "../assets/pythonnew.png";
import html from "../assets/htmlnew.png";
import css from "../assets/cssnew.png";
import java from "../assets/javanew.png";
import react from "../assets/react.png";
import node from "../assets/node.png";
import docker from "../assets/docker.png";
import git from "../assets/git.png";
import webpack from "../assets/webpack.png";
import tailwind from "../assets/tailwind.png";
import firebase from "../assets/firebase.png";
export default function Projects() {
  // Array of project data

  return (
    <div className="projects">
      <h1 className="projects-header">Projects</h1>
      <div className="card-container">
        <div className="header-desc">
          <div className="box-header">
            <h2>LooLooLoo | Hack the North Winner</h2>
            <a href="google.com">View Project</a>
          </div>
          <div className="desc-container">
            <p>Water Water Water, Loo Loo Loo!</p>
            <p>
              LooLooLoo is a full-stack web app that directs you to the nearest
              washroom when you drink from a water fountain. When you drink from
              a water fountain, an ESP32 microcontroller detects the bluetooth
              signal from your phone, and using Twilio, sends an SMS containing
              a custom link. This link directs you to the LooLooLoo web app,
              featuring an interactive 3D map that guides you from your exact
              location to the nearest washroom in the building.
            </p>
          </div>
          <div className="loo-skills">
            <img className="loo-skill-item" src={js} />
            <img className="loo-skill-item" src={ts} />
            <img className="loo-skill-item" src={html} />
            <img className="loo-skill-item" src={css} />
            <img className="loo-skill-item" src={react} />
            <img className="loo-skill-item" src={git} />
            <img className="loo-skill-item" src={node} />
          </div>
        </div>
        <img className="loo" src={loo} />
      </div>
      <div className="card-container">
        <div className="header-desc">
          <div className="box-header">
            <h2>ShakespeareAI</h2>
            <a href="google.com">View Project</a>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla
            deserunt dolorem eligendi, saepe eum facilis vel delectus vitae. A
            labore doloremque ratione amet quia earum tempore exercitationem
            animi beatae totam? Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Vel modi veniam adipisci optio similique quidem
            fuga voluptatibus quod quae corporis, ad dicta velit aspernatur,
            impedit consequuntur, eius illo magnam sit.
          </p>
          <div className="loo-skills">
            <img className="loo-skill-item" src={js} />
            <img className="loo-skill-item" src={ts} />
            <img className="loo-skill-item" src={html} />
            <img className="loo-skill-item" src={css} />
            <img className="loo-skill-item" src={react} />
            <img className="loo-skill-item" src={git} />
            <img className="loo-skill-item" src={node} />
            <img className="loo-skill-item" src={firebase} />
          </div>
        </div>
        <img className="loo" src={loo} />
      </div>
    </div>
  );
}
