import React from 'react';
import './About.css';

const About = () => {
    return (
        <section id='myAboutSection' className="section about-section border border-secondary">
            <div className="container">
                <div className='row border'>
                    <h3>About Rodgers Nyangweso</h3>
                    <p>Data Lead at <a class="text-decoration-none" href="https://kyosk.app/" target="_blank" rel="noreferrer">Kyosk Digital Service Ltd.</a></p>
                    <h4>Tech Specializations</h4>
                </div>
                <div className='row border'></div>
            </div>
        </section>
    )
};

export default About;

