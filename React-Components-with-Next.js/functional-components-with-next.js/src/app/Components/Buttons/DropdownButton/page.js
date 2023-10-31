const DropdownButton = () => {
  return (
    <>
      <div className="container">
        <div className="row border border-secondary" style={{ padding: 100 }}>
          <div className="dropdown m-3">
            <button
              id="dropdownMenuButton1"
              className="btn btn-success dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Dropdown Button
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <a className="dropdown-item" href="#">
                  Option 1
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Option 2
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Option 3
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default DropdownButton;
