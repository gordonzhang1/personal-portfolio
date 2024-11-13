import "../Contact.css";

export default function Contact() {
  return (
    <>
      <div className="contact-container">
        <h1>Contact</h1>
        <ul className="info-container-contact">
          <li className="school-email">
            Email:&nbsp;
            <a
              href="mailto:g234zhan@uwaterloo.ca"
              target="_blank"
              rel="noopener noreferrer"
            >
              g234zhan@uwaterloo.ca
            </a>
          </li>
          <li className="lin">
            LinkedIn:&nbsp;
            <a
              href="https://linkedin.com/in/gordonzhang1"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/gordonzhang1
            </a>
          </li>
          <li className="git">
            GitHub:&nbsp;
            <a
              href="https://github.com/gordonzhang1"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/gordonzhang1
            </a>
          </li>
          <li className="res">
            Resume:&nbsp;
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
