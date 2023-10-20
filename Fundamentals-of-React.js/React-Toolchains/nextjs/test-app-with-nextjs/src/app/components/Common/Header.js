import "./Header.css";

const Header = () => {
  return (
    <>
      <header className="navbar-section">
        <nav className="navbar navbar-expand-md">
          <div className="container">
            <a className="navbar-brand" href="#">
              Rodgers Nyangweso
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    About
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    href="#"
                  >
                    Tech Blog
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        Web Applications
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Analytics
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Data Engineering
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Contact
                  </a>
                </li>
              </ul>
              <div className="d-flex">
                <span className="fab fa-linkedin-in fa-2x"></span>
                <span className="fab fa-github fa-2x"></span>
                <span className="fab fa-twitter fa-2x"></span>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
