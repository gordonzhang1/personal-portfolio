import "../name.css";

export default function Name() {
  return (
    <>
      <div class="middle-container">
        <div className="desc space-grotesk-body">
          Computer Engineering Student at The University of Waterloo
        </div>
        <div className="name-container">
          <div className="text">
            Hello I'm{" "}
            <span
              style={{
                color: "#0d51e5",
              }}
            >
              Gordon
            </span>
          </div>
        </div>
        <div className="resumeButtons">
          <a
            href="https://www.google.com"
            target="blank"
            rel="noopener noreferrer"
          >
            <button class="resume-button" role="button">
              Resume
            </button>
          </a>
          <a href="#contact">
            <button class="contact-button" role="button">
              Contact
            </button>
          </a>
        </div>
      </div>
    </>
  );
}
