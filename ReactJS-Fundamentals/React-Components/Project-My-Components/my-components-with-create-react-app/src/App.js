
const MyHeader = () => {
  return (
    <>
    <section className="border border-secondary p-5">
      <div className="container border border-warning p-5">
        <div className="row border">
          <h3>About Rodgers Nyangweso</h3>
          <p>Data Specialist at
            <a className="text-decoration-none" href="https://kyosk.app/"> Kyosk Digital Services Ltd.</a>
          </p>
        </div>
        <div className="row border">
          <h4>Tech Specializations</h4>
        </div>
        <div className="row border">
          <div className="col-sm-4">
            <h5>Data Analytics</h5>
          </div>
          <div className="col-sm-4">
            <h5>Web Applications</h5>
          </div>
          <div className="col-sm-4">
            <h5>Data Engineering</h5>
          </div>
        </div>
      </div>
    </section>
    <section className="border border-info p-5">
      <div className="container-fluid border border-dark p-5">
        <div className="row border text-center">
          <h2>Portfolio Section</h2>
        </div>
      </div>
    </section>
    <section className="border border-danger p-5">
      <div className="container">
        <div className="row text-center">
          <h2>Blog Section!</h2>
        </div>
      </div>
    </section>
    <footer className="border p-5">
      <div className="row text-center">
        <h2>Footer Section!</h2>
      </div>
    </footer>
    </>
  );
}

export default MyHeader;
