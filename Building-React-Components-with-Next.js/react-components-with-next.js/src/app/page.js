import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import styles from "./page.module.css";
import Header from "./Components/Common/Header/page.js";
import LoginForm from "./Components/Forms/LoginForm/page";

const Home = () => {
  return (
    <>
      <Header />
      <LoginForm />
    </>
  );
};

export default Home;
