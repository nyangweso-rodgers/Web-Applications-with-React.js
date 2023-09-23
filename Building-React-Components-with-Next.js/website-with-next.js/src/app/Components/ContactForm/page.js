import styles from '../../page.module.css';

const ContactForm = () => {
  return (
    <>
      <form className='border'>
        <div className="container border">
          <div className="row border text-center">
            <h2>Contact me</h2>
            <span className={styles.underlineBorder}></span>
          </div>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
