import "bootstrap/dist/css/bootstrap.css";
import Link from "next/link";
import styles from "./page.module.css";
import Header from "./Components/Header/page";
import About from "./Components/About/page";
import Blog from "./Components/Blog/page";
import ContactForm from "./Components/ContactForm/page";

const Home = () => {
  return (
    <>
      <Header />
      <About />
      <Blog />
      <ContactForm />
    </>
  );
};

export default Home;
