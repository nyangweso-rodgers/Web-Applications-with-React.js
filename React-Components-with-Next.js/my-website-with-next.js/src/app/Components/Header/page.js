import { useState } from 'react';
import "../../globals.css";
import "./Header.css";

const Header = () => {
  const [myFullName, setMyFullName] = useState("Rodgers Nyangweso");
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-md">
          <div className="container">
            <a className="navbar-brand" href="#">
              {myFullName}
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapseContent"
              aria-controls="#navbarCollapseContent"
              aria-expanded="false"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              id="navbarCollapseContent"
              className="collapse navbar-collapse"
            >
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    About
                  </a>
                </li>
                <li className="nav-item dropdown mega-dropdown">
                  <a
                    href="#"
                    id="navbarDropdown"
                    className="nav-link dropdown-toggle"
                    role="button"
                    data-bs-toggle="dropdown"
                  >
                    Blog
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                    data-bs-toggle="dropdown"
                  >
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        An item
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        A second item
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        A third item
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
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
