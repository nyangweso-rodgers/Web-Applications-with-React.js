import { useState } from "react";

const Header = () => {
  const [myFullName, setMyFullName] = useState("Rodgers Nyangweso");
  return (
    <>
      <header className="border border-danger">
        <nav className="navbar navbar-expand-md">
          <div className="container">
            <a className="navbar-brand" href="#">
              {myFullName}
            </a>
            <button>
              <span></span>
            </button>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
