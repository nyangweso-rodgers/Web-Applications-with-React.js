import "./ContactForm.css";

const ContactForm = () => {
  return (
    <>
      <form className="contact-form-section border">
        <div className="container contact-form-container">
          <div className="row">
            <h2>Contact me</h2>
            <span className="contact-form-border"></span>
          </div>
          <div className="row">
            <div className="contact-form">
              <input
                className="contact-form-text"
                type="text"
                placeholder="Your Name"
              ></input>
              <input
                className="contact-form-text"
                type="email"
                placeholder="Email"
              ></input>
              <input
                className="contact-form-text"
                type="text"
                placeholder="Your Phone"
              ></input>
              <textarea
                className="contact-form-text"
                placeholder="Your Message"
              ></textarea>
              <input
                className="contact-form-btn"
                type="submit"
                value="Send"
              ></input>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
