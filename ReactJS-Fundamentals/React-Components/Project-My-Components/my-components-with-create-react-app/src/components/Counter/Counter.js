import React, { useState } from 'react';

const Counter = (props) => {
    // Initial state value is 0
    const [count, setCount] = useState(0)

    // create handleDecrement event handler
    const handleDecrement = () => {
        setCount(prevCount => prevCount - 1);
    };

    // create handleIncrement event handler
    const handleIncrement = () => {
        setCount(prevCount => prevCount + 1);
    };

    return (
        <>
            <section>
                <header>
                    <nav className='navbar navbar-expand-md bg-dark navbar-dark'>
                        <div className='container'>
                            <span className='navbar-text'>Counter Application Component</span>
                        </div>
                    </nav>
                </header>
            </section>
            <section className='mt-3'>
                <div className='container'>
                    <div className='row'>
                        <button className='btn btn-primary btn-lg' onClick={handleDecrement}>-</button>
                        <h4>Count is: {count}</h4>
                        <button className='btn btn-secondary' onClick={handleIncrement}>+</button>
                    </div>
                    <div className='row mt-3'>
                        <div className='col'>
                            <button className='btn btn-lg btn-success' onClick={() => setCount(0)}>Reset</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};


export default Counter;