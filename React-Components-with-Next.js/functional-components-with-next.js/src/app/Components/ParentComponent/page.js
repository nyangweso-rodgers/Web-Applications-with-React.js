import ChildComponent from "./ChildComponent/page";
const ParentComponent = () => {
  return (
    <>
      <div className="border border-danger">
        <div className="container">
          <div className="row border">
            <ChildComponent name="Rodgers" />
            <ChildComponent name="Nyangweso" />
            {/* Default prop property value */}
            <ChildComponent />
          </div>
        </div>
      </div>
    </>
  );
};

export default ParentComponent;
