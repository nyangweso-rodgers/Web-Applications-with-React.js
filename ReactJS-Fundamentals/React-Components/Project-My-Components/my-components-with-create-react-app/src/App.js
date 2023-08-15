import React from "react";
import './App.css';
import HeaderForMyWebPageApp from './components/HeaderForMyWebApp/HeaderForMyWebPageApp';
import HeaderForSurveyApp from './components/HeaderForSurveyApp/HeaderForSurveyApp';
import Counter from "./components/Counter/Counter";
//import About from "./components/About/About";
//import Portfolio from "./components/Portfolio/Portfolio";
//import Blog from "./components/Blog/Blog";
//import Footer from "./components/Footer/Footer";
import SurveyBodyForMarketPricing from "./components/SurveyBodyForMarketPricing/SurveyBodyForMarketPricing"

const App = () => {

    // set the conditions for rendering various components
    const shouldRenderHeaderForMyWebPageApp = false;
    const shouldRenderHeaderForSurveyApp = true;
    const shouldRenderCounter = false;
    const shouldRenderSurveyBodyForMarketPricing = true;


    return (
        <div className="app">
            {/* Conditional Rendering for SurveyHeader */}
            {shouldRenderHeaderForSurveyApp && <HeaderForSurveyApp />}
            {shouldRenderHeaderForMyWebPageApp && <HeaderForMyWebPageApp />}
            {shouldRenderCounter && <Counter />}
            {shouldRenderSurveyBodyForMarketPricing && <SurveyBodyForMarketPricing />}
        </div>
    )
};

export default App;