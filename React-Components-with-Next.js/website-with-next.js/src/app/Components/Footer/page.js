// import bootstrap-icons
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Footer.css";
import styles from "../../page.module.css";

const Footer = () => {
  return (
    <>
      <footer className="">
        <div className="container">
          <div className="row footer-first-row-container">
            <h3>Get in Touch</h3>
            <span className={styles.underlineBorder}></span>
          </div>
          <div className="row footer-second-row-container">
            <div className="col-sm-7 form-col">
              <div className="row">
                <div className="col-sm-6">
                  <label className="form-label" for="">
                    Full Name
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="First Name, Last Name"
                  />
                </div>
                <div className="col-sm-6">
                  <label className="form-label" for="">
                    Email Address
                  </label>
                  <input
                    className="form-control"
                    type="email"
                    placeholder="Your email"
                  />
                </div>
              </div>
              <div className="row">
                <div className="">
                  <label className="form-label" for="messageTextArea">
                    Your Message
                  </label>
                  <textarea
                    className="form-control"
                    name=""
                    id="messageTextArea"
                    cols=""
                    rows=""
                    placeholder="Write something"
                  ></textarea>
                </div>
              </div>
              <div className="row">
                <div className="">
                  <input type="submit" value="Send Message" />
                </div>
              </div>
            </div>
            <div className="col-sm-5 contact-and-social-media-col">
              <div className="row">
                <h4>Contact me</h4>
                <hr className="" />
                <div className="contact-wrapper">
                  <div className="">
                    <i className="bi bi-envelope"></i> rodgerso65@gmail.com
                  </div>
                  <div className="">
                    <i className="bi bi-telephone"></i> +254 (0) 705 455 265
                  </div>
                </div>
              </div>
              <div className="row">
                <h4>Connect with me</h4>
                <hr className="" />
                <div className="social-media-wrapper">
                  <a
                    className="bi bi-linkedin"
                    target="_blank"
                    href="https://www.linkedin.com/in/rodgers-nyangweso-305919b4/"
                  ></a>
                  <a
                    className="bi bi-github"
                    target="_blank"
                    href="https://github.com/nyangweso-rodgers"
                  ></a>
                  <a
                    className="bi bi-twitter-x"
                    target="_blank"
                    href="https://twitter.com/R_Nyangweso"
                  ></a>
                </div>
              </div>
            </div>
          </div>
          <div className="row footer-third-row-container border-success">
            <div>
              <hr className="hr" />
            </div>
            <div>
              <p>
                &copy; 2023 Rodgers Nyangweso. All Rights Reserved.
                <span className="text-muted">|</span>
                <span>
                  <a className="text-decoration-none" href="#/">
                    Terms of use
                  </a>
                </span>
                <span className="text-muted">|</span>
                <span>
                  <a className="text-decoration-none" href="#/">
                    Privacy policy
                  </a>
                </span>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
