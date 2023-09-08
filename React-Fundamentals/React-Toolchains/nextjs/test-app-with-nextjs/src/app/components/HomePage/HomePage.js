import React from "react";
import Link from "next/link";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./HomePage.css";

const HomePage = () => {
  return (
    <>
      <section className="section border border-secondary">
        <div className="container-fluid border border-warning">
          <div className="row border">
            <h1>Another section content goes here!</h1>
          </div>
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
          <div className="row border text-center">
            <div className="col">
              <Link className="" href="/FirstPost">
                More Articles
              </Link>
            </div>
          </div>
        </div>
      </section>
      <footer className="section">
        <div className="container border border-danger text-center">
          <div className="row border border-info p-5">
            <div className="row border p-5">
              <div>
                <span className="fas fa-map-marker-alt"></span>
                <span className="fas fa-mobile-alt"></span>
                <span className="fas fa-envelope"></span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default HomePage;
