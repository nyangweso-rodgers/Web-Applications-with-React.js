import React from "react";
import './App.css';
import WebsiteHeader from './components/Headers/WebsiteHeader/WebsiteHeader'
import MarketSurveyForm from './components/Forms/MarketSurveyForm/MarketSurveyForm';
import CounterApp from "./components/CounterApp/CounterApp";
import DisplayTimeApp from "./components/DisplayTimeApp/DisplayTimeApp";

const App = () => {

    // set the conditions for rendering various components
    const shouldRenderWebsiteHeader = true;
    const shouldRenderMarketSurveyForm = false;
    const shouldRenderCounterApp = false;
    const shouldRenderDisplayTimeApp = false;

    return (
        <div className="app">
            {/* Conditional Rendering for SurveyHeader */}
            {shouldRenderWebsiteHeader && <WebsiteHeader />}
            {shouldRenderMarketSurveyForm && <MarketSurveyForm />}
            {shouldRenderCounterApp && <CounterApp />}
            {shouldRenderDisplayTimeApp && <DisplayTimeApp />}
        </div>
    )
};

export default App;