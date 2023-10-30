import "../../globals.css";
import styles from '../../page.module.css';

const About = () => {
  return (
    <>
      <main className="border">
        <div className="container border p-5">
          <div className="row border p-5">
            <h2>About</h2>
          </div>
          <div className="row border">
            <div className="col">
              <button className={styles.myButton}>Get In Touch</button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default About;
