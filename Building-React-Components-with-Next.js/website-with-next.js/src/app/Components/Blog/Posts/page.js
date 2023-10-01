import Header from "../../Header/page";
import Link from "next/link";

const Posts = () => {
  return (
    <>
      <Header />
      <section className="">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-4">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Post title goes here!</h4>
                  <Link href="#">Read more &gt;</Link>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Post title goes here!</h4>
                  <Link href="#">Read more &gt;</Link>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Post title goes here!</h4>
                  <Link href="#">Read more &gt;</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Posts;
