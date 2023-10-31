"use client"; // This is a client component
import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
// import bootstrap to pages.js
import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Header from "./Components/Header/page";
import About from "./Components/About/page";
import Blog from "./Components/Blog/page";
import Footer from "./Components/Footer/page";

const MyWebsite = () => {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);
  return (
    <>
      <Header />
      <About />
      <Blog />
      <Footer />
    </>
  );
};

export default MyWebsite;
