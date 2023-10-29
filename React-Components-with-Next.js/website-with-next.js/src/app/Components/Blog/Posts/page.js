import Header from "../../Header/page";
import Footer from "../../Footer/page";
import Link from "next/link";

const Posts = () => {
  return (
    <>
      <Header />
      <section className="">
        <div className="container border">
          <div className="row border">
            <h2>All posts</h2>
            <p>Articles, news, projects and more</p>
          </div>
          <div className="row border p-2">
            <div className="col border">
              <button className="btn btn-primary">All</button>
            </div>
            <div className="col border">
              <button className="btn btn-secondary">HTML</button>
            </div>
            <div className="col border">
              <button className="btn btn-success">CSS</button>
            </div>
            <div className="col border">
              <button className="btn btn-danger">Bootstrap 5</button>
            </div>
            <div className="col border">
              <button className="btn btn-warning">JavaScript</button>
            </div>
            <div className="col border">
              <button className="btn btn-info">React</button>
            </div>
            <div className="col border">
              <button className="btn btn-light">Next.js</button>
            </div>
            <div className="col border">
              <button className="btn btn-dark">MongoDB</button>
            </div>
          </div>
        </div>
        <div className="container border border-warning">
          <div className="row border">
            <div className="col-sm-4">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Post title goes here!</h4>
                  <Link href="#">Read more &gt;</Link>
                  <p className="card-text">
                    <small className="text-muted">
                      Last updated 2 days ago
                    </small>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Post title goes here!</h4>
                  <Link href="#">Read more &gt;</Link>
                  <p className="card-text">
                    <small className="text-muted">
                      Last updated 2 days ago
                    </small>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Post title goes here!</h4>
                  <Link href="#">Read more &gt;</Link>
                  <p className="card-text">
                    <small className="text-muted">
                      Last updated 2 days ago
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row border">
            <div className="col-sm-4">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Post title goes here!</h4>
                  <Link href="#">Read more &gt;</Link>
                  <p className="card-text">
                    <small className="text-muted">
                      Last updated 2 days ago
                    </small>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Post title goes here!</h4>
                  <Link href="#">Read more &gt;</Link>
                  <p className="card-text">
                    <small className="text-muted">
                      Last updated 2 days ago
                    </small>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Post title goes here!</h4>
                  <Link href="#">Read more &gt;</Link>
                  <p className="card-text">
                    <small className="text-muted">
                      Last updated 2 days ago
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row border p-2">
            <div>
              <button className="btn btn-success">See more</button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Posts;
