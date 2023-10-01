import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Link from "next/link";
import styles from "./page.module.css";
import Header from "./Components/Header/page";
import About from "./Components/About/page";
import Blog from "./Components/Blog/page";
import ContactForm from "./Components/ContactForm/page";
import Footer from "./Components/Footer/page";

const Home = () => {
  return (
    <>
      <Header />
      <About />
      <Blog />
      <ContactForm />
      <Footer />
    </>
  );
};

export default Home;
