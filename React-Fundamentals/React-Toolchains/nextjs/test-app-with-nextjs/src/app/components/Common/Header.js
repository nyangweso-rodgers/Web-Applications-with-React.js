import './Header.css';

const Header = () => {
    return (
      <>
        <header>
          <nav className="navbar navbar-expand-md fixed-top">
            <div className="container">
              <a className="navbar-brand" href="#">
                Rodgers Nyangweso
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarHeader"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div id="navbarHeader" className="collapse navbar-collapse">
                <ul className="navbar-nav me-auto">
                  <li className="nav-item dropdown border">
                    <a
                      className="nav-link dropdown-toggle"
                      href=""
                      data-bs-toggle="dropdown"
                    >
                      Blog
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="">
                          React.js
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="">
                          Analytics
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="">
                          Another Link
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item border">
                    <a className="nav-link" href="#/">
                      Contact
                    </a>
                  </li>
                </ul>
                <div className="d-flex justify-content-end">
                  <a className="me-2 border text-decoration-none" href="">
                    LinkedIn
                  </a>
                  <a className="me-2 border text-decoration-none" href="">
                    GitHub
                  </a>
                  <a className="me-2 border text-decoration-none" href="">
                    Twitter
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </header>
      </>
    );
};

export default Header;