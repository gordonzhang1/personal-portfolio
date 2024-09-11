import "../Contact.css";

export default function Contact() {
  return (
    <>
      <div className="contact-container">
        <h1>Contact</h1>
        <ul>
          <li className="email">Email: gordonz0913@gmail.com</li>
          <li>Waterloo Email: g234zhan@uwaterloo.ca</li>
          <li className="lin">
            LinkedIn:{" "}
            <a
              href="https://linkedin.com/in/gordonzhang1"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/gordonzhang1
            </a>
          </li>
          <li className="git">
            GitHub:{" "}
            <a
              href="https://github.com/gordonzhang1"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/gordonzhang1
            </a>
          </li>
          <li className="res">
            Resume:{" "}
            <a
              href="https://linkedin.com/in/gordonzhang1"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/gordonzhang1
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
