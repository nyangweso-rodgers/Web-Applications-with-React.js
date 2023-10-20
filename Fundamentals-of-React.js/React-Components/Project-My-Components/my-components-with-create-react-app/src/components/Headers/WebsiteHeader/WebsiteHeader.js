import React from "react";
import './WebsiteHeader.css';
import user from '../../../data/user';

const WebsiteHeader = (props) => {
    //const myDetails = props.user;

    return (
        <>
            <header className="header-section">
                <nav className="navbar navbar-expand-md">
                    <div className="container">
                        <a className="navbar-brand" href="#/">{user.fullName}</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#myNavbar">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                    <div id="myNavbar" className="collapse navbar-collapse">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item dropdown border">
                                <a className="nav-link dropdown-toggle" href="#/" data-bs-toggle="dropdown">Blog</a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#/">React.js</a></li>
                                    <li><a className="dropdown-item" href="#/">Analytics</a></li>
                                    <li><a className="dropdown-item" href="#/">Another link</a></li>
                                </ul>
                            </li>
                            <li className="nav-item border">
                                <a className="nav-link" href="#/">Contact</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
            <section className="section border border-danger">
                <div className="container"></div>
            </section>
        </>
    )
};

export default WebsiteHeader;