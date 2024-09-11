import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../Projects.css";

export default function Projects() {
  // Array of project data
  const projects = [
    {
      title: "Project 1",
      text: "This is a description of project 1.",
      imgSrc: "holder.js/100px180",
      buttonText: "View Project 1",
    },
    {
      title: "Project 2",
      text: "This is a description of project 2.",
      imgSrc: "holder.js/100px180",
      buttonText: "View Project 2",
    },
    {
      title: "Project 3",
      text: "This is a description of project 3.",
      imgSrc: "holder.js/100px180",
      buttonText: "View Project 3",
    },
    // Add more projects as needed
  ];

  return (
    <div className="projects">
      <h1 className="projects-header">Projects</h1>
      <div className="project-cards">
        {projects.map((project, index) => (
          <Card
            style={{ width: "18rem", borderColor: "blue", borderWidth: "2px" }}
            key={index}
          >
            <Card.Img variant="top" src={project.imgSrc} />
            <Card.Body>
              <Card.Title>{project.title}</Card.Title>
              <Card.Text>{project.text}</Card.Text>
              <Button variant="primary">{project.buttonText}</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}
