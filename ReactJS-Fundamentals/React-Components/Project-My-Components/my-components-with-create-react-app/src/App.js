import React from "react";
import './App.css'
import MyHeader from "./components/Header/MyHeader";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Blog from "./components/Blog/Blog";
import Footer from "./components/Footer/Footer";

const App = () => {
    return (
        <div className="app">
            <MyHeader />
            <About />
            <Portfolio />
            <Blog />
            <Footer />
        </div>
    )
};

export default App;