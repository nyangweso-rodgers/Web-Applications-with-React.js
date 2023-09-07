import '@fortawesome/fontawesome-free/css/all.min.css';
import './HomePage.css';

const HomePage = () => {
    return (
        <>
            <header className=''>
                <nav className="navbar navbar-expand-md fixed-top">
                    <div className="container">
                        <a className="navbar-brand" href="#/">Rodgers Nyangweso</a>
                        <button className='navbar-toggler' type='button' data-bs-toggle="collapse" data-bs-target="#navbarHeader">
                            <span className='navbar-toggler-icon'></span>
                        </button>
                        <div id='navbarHeader' className='collapse navbar-collapse'>
                            <ul className='navbar-nav me-auto'>
                                <li className='nav-item dropdown border'>
                                    <a className='nav-link dropdown-toggle' href="" data-bs-toggle="dropdown">Blog</a>
                                    <ul className='dropdown-menu'>
                                        <li><a className='dropdown-item' href=''>React.js</a></li>
                                        <li><a className='dropdown-item' href=''>Analytics</a></li>
                                        <li><a className='dropdown-item' href=''>Another Link</a></li>
                                    </ul>
                                </li>
                                <li className='nav-item border'>
                                    <a className='nav-link' href='#/'>Contact</a>
                                </li>
                            </ul>
                            <div className='d-flex justify-content-end'>
                                <a className='me-2 border text-decoration-none' href=''>LinkedIn</a>
                                <a className='me-2 border text-decoration-none' href=''>GitHub</a>
                                <a className='me-2 border text-decoration-none' href=''>Twitter</a>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
            <section className="section about-section border border-primary">
                <div className="container border p-5">
                    <div className="row">
                        <h1>Section content goes here!</h1>
                    </div>
                </div>
            </section>
            <section className="section border border-secondary">
                <div className="container-fluid border border-warning">
                    <div className="row border">
                        <h1>Another section content goes here!</h1>
                    </div>
                    <div className='row border'>
                        <div className='col-sm card-col'>
                            <div className='card'></div>
                        </div>
                        <div className='col-sm card-col'>
                            <div className='card'></div>
                        </div>
                        <div className='col-sm card-col'>
                            <div className='card'></div>
                        </div>
                    </div>
                    <div className='row border text-center'>
                        <div className='col'>
                            <button className='btn'>More Articles</button>
                        </div>
                    </div>
                </div>
            </section>
            <footer className="section">
                <div className="container border border-danger text-center">
                    <div className="row border border-info p-5">
                        <div className='row border p-5'>
                            <div>
                                <span className="fas fa-map-marker-alt"></span>
                                <span className="fas fa-mobile-alt"></span>
                                <span className="fas fa-envelope"></span>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </footer>
            <footer className='section border'>
                <div className='container'>
                    <div className='row'>
                        <hr className='hr w-100' />
                    </div>
                    <div className='row'>
                        <div className='col-sm-8 border border-danger d-flex'>
                        <div className='col-sm-6 border'>
                            <small className='text-center mt-3'>&copy; Rodgers Nyangweso, 2023. All rights reserved.</small>
                        </div>
                        <div className='col-sm-3 border'>
                            <small>Privacy Policy</small>
                        </div>
                        <div className='col-sm-3 border'>
                            <small>Terms of Service</small>
                        </div>
                        </div>
                        <div className='col-sm-4 border border-primary d-flex justify-content-evenly'>
                            <div className=' border'>
                                <span className="fab fa-linkedin-in fa-2x text-decoration-none"></span>
                            </div>
                            <div className=' border'>
                                <span className="fab fa-github fa-2x text-decoration-none"></span>  
                            </div>
                            <div className=' border'>
                                <span className="fab fa-twitter fa-2x text-decoration-none"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>

    )
};

export default HomePage;