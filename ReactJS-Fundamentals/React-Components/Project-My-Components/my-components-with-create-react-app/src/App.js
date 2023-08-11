import React, { useState} from "react";
import './App.css';
import SurveyHeader from './components/SurveyHeader/SurveyHeader';
import Counter from "./components/Counter/Counter";
import MyHeader from "./components/Header/MyHeader";
//import About from "./components/About/About";
//import Portfolio from "./components/Portfolio/Portfolio";
//import Blog from "./components/Blog/Blog";
//import Footer from "./components/Footer/Footer";

const App = () => {

    // set the conditions for rendering various components
    const shouldRenderSurveyHeader = true;
    const shouldRenderMyHeader = false;
    const shouldRenderCounter = true;


    return (
        <div className="app">
            {/* Conditional Rendering for SurveyHeader */}
            {shouldRenderSurveyHeader && <SurveyHeader />}
            {shouldRenderMyHeader && <MyHeader />}
            {shouldRenderCounter && <Counter />}
        </div>
    )
};

export default App;