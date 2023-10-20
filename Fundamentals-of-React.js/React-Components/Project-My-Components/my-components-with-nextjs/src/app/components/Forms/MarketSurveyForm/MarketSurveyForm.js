import './MarketSurveyForm.css'
import QuestionLists from './MarketSurveyFormQuestions';

const MarketSurveyForm = () => {
    return (
        <>
            <header>
                <nav className="navbar navbar-expand-md bg-dark navbar-dark">
                    <div className="container">
                        <span className="navbar-brand">Market Survey Form</span>
                    </div>
                </nav>
            </header>
            <section className="section border">
                <QuestionLists />
            </section>
            <footer></footer>
        </>
    )
};

export default MarketSurveyForm;