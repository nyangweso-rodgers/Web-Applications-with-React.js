const ChildComponent = (props) => {
  return (
    <>
      <div>
        <div className="container">
          <div className="row border border-dark p-5">
            <h2>This is a child component!</h2>
            <p>Hi, {props.name}!</p>
          </div>
        </div>
      </div>
    </>
  );
};

ChildComponent.defaultProps = {
    name: "Rodgers",
};

export default ChildComponent;
