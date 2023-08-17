import React from "react";
import './App.css';
import WebsiteHeader from './components/Headers/WebsiteHeader/WebsiteHeader'
import MarketSurveyForm from './components/Forms/MarketSurveyForm/MarketSurveyForm';

const App = () => {

    // set the conditions for rendering various components
    const shouldRenderWebsiteHeader = true;
    const shouldRenderMarketSurveyForm = false;

    return (
        <div className="app">
            {/* Conditional Rendering for SurveyHeader */}
            {shouldRenderWebsiteHeader && <WebsiteHeader />}
            {shouldRenderMarketSurveyForm && <MarketSurveyForm />}
        </div>
    )
};

export default App;