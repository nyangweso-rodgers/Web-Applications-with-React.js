import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Blog.css";

const Blog = () => {
  return (
    <>
      <section>
        <div className="container-fluid border border-warning">
          <div className="row border">
            <div className="col-sm card-col">
              <div className="card"></div>
            </div>
            <div className="col-sm card-col">
              <div className="card"></div>
            </div>
            <div className="col-sm card-col">
              <div className="card"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;