import './Footer.css';


const Footer = () => {
    return (
      <>
        <footer className=''>
          <div className="container">
            <div className="row">
              <hr className="hr w-100" />
            </div>
            <div className="row">
              <div className="col-sm-8 d-flex">
                <div className="col-sm-6">
                  <small className="text-center mt-3">
                    &copy; Rodgers Nyangweso, 2023. All rights reserved.
                  </small>
                </div>
                <div className="col-sm-3">
                  <small>Privacy Policy</small>
                </div>
                <div className="col-sm-3">
                  <small>Terms of Service</small>
                </div>
              </div>
              <div className="col-sm-4 d-flex justify-content-evenly">
                <div className="">
                  <span className="fab fa-linkedin-in fa-2x text-decoration-none"></span>
                </div>
                <div className=" ">
                  <span className="fab fa-github fa-2x text-decoration-none"></span>
                </div>
                <div className="">
                  <span className="fab fa-twitter fa-2x text-decoration-none"></span>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </>
    );
};

export default Footer;