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
        <div className='container border p-5'>
            <div className='row'>
                <h2>Counter Application Component!</h2>
            </div>
            <div className='row border p-5'>
                <button className='btn btn-primary btn-lg' onClick={handleDecrement}>-</button>
                <h4>Count is: {count}</h4>
                <button className='btn btn-secondary' onClick={handleIncrement}>+</button>
            </div>
            <div className='row border p-2'>
                <div className='col'>
                    <button className='btn btn-lg btn-success' onClick={() => setCount(0)}>Reset</button>
                </div>
            </div>
        </div>
    )
};


export default Counter;