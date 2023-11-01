"use client"; // This is a client component
import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
// import styles from "./page.module.css";
import Header from "./Components/Common/Header/page.js";
import LoginForm from "./Components/Forms/LoginForm/page";
import Footer from "./Components/Common/Footer/page";
import Counter from "./Components/Counter/page";
import CardTemplate from "./Components/Cards/CardTemplate/page.js";
import ParentComponent from "./Components/ParentComponent/page.js";
import BasicButton from "./Components/Buttons/BasicButton/page.js";
import DropdownButton from "./Components/Buttons/DropdownButton/page.js";

const MyApp = () => {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);
  return (
    <>
      <Header />
      <BasicButton />
      <DropdownButton />
    </>
  );
};

export default MyApp;
