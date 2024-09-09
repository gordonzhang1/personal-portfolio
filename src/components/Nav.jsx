import "../nav.css";

export default function Nav() {
  return (
    <>
      <nav class="navbar fixed-top bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <div className="card text-center">
              <div className="card-header">
                <ul className="nav nav-pills card-header-pills">
                  <li className="nav-item">
                    <a className="nav-link active" href="#">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      About Me
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Experience
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Projects
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </a>
        </div>
      </nav>
    </>
  );
}
