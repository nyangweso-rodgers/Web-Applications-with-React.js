# React Hooks

## Table Of Contents

# React Hooks
* __Hooks__ are a way to add extra functionality to your `React.js` or `Next.js` code without writing a `class`.
* Previously before `hooks` were introduced, `state` were managed inside `classes component`. But, now manage state using a `Hook` inside the existing function using hooks API.
* Three commonly used `React` hooks are:
    1. `useState`
    2. `useRef`
    3. `useEffect` 

* Other React hooks are:
    1. `useContext`
    2. `useReducer`
    3. `useCallback`
    4. `useMemo`

# Definition: `React` State
* __State__ is a mechanism in `React` that allows you to store and manage data within a __component__.
* Unlike `props`, which are passed down from parent components and are read-only, __state__ is managed internally within a __component__ and can be changed using the `setState` method. 
* When __state__ changes, `React` automatically re-renders the __component__ to reflect the updated data. 

# React Hook 1: `useState`
* `useState`lets you keep track of variables that can change over time.
* Syntax:
    ```js
        //syntax
        const [state, setState] = useState(initialState);
    ```
  * The `setState` is function used to update the __state__. It accepts a new value and re-render's the component.
* Example:
    ```js
        // Example
        const [name, setName] = useState('Rodgers');
        const [age, setAge] = useState(20);
    ```
* E.g., 
  * suppose you are building a game and want to track the players score:
  * you could use the `useState` hook to create a variable called "`score`" and set it to `0`. Then, every time the player earns a point, you could use the "`setScore`" function (which `useState` also provides) to update the score.

    ```js
        // example: useState
        import { useState } from 'react';

        const MyGame = () => {
            const [score, setScore] = useState(0);

            const handlePoint = () => {
                setScore(score + 1);
            }

            return (
                <div>
                    <p>Score: {score}</p>
                    <button onClick={handlePoint}>Click to Earn a Point!</button>
                </div>
            )
        }
    ```

    * the `useState` line sets up a `score` variable and the `setScore` function.
    * the `handlePoint` function is called when the player clicks the `button` and uses `setScore` to update the score. 

* Example 2:
  * Suppose we want to create a simple `Counter` Component with the `useState` hook:
  * First, import the `useState` from `react`
    ```js
        // Import the `useState` from `react``
        import React, { useState } from 'react';
    ```
  * __Step 2__: Create `Counter` Functional Component
    ```js
        // Create  Counter functional component
        const Counter = () => {
            return (
                <div>
                    <h2>This is a counter!</h2>
                </div>
            )
        };

        export default Counter;
    ```
  * __Step 3__: Add state to the `Counter` Component. Initial state value = 0;
  * the `useState` hook returns an `array` where the first element is the current state value (`count`), and the second element is the state update function (`setCount`).
    ```js
        // Add state to the `Counter` Component
        const Counter = () => {
            // initial state value is 0
            const [count, setCount] = useState(0)

            return (
                <div>
                    <h2>This is a counter!</h2>
                </div>
            )
        };

        export default Counter;
    ```
  * __Step 4__: Add `button` with `onClick`Handlers for increment and decrement
    ```js
        // add button for increment and decrement
        const Counter = (props) => {
            // initial state value is 0
            const [count, setCount] = useState(0)
            return (
                <div>
                    <div>
                        <button onClick={handleDecrement}>-</button>
                        <h5>Count is {count}</h5>
                        <button onClick={handleIncrement}>+</button>
                    </div>
                    <button onClick={() => setCount(0)}>Reset</button>
                </div>
            )
        };
        export default Counter;
    ```
  * __Step 5__: Create `onClick` __Event Handler__ Functionality to execute function when `button` is clicked.
    * We define an event handler function `handleIncrement` that uses the `setCount` function to update the state. 
    * Note that we're using the functional form of `setCount` which takes the previous state (`prevCount`) and returns the new state value (`prevCount + 1`).
        ```js
            //
            const handleDecrement = () => {
                setCount(prevCount => prevCount - 1);
            };

            // 
            const handleIncrement = () => {
                setCount(prevCount => prevCount + 1);
            };
        ```
  * __Step 6__:
    *  Combine the steps:
    * Whenever the `button` is clicked and `handleIncrement` is called, the __state__ is updated using the `setCount` function, which triggers a re-render of the component with the updated __state__.
    ```js
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
                        <button className='btn btn-primary btn-lg' onClick={handleDecrement}>-</button>
                        <h4>Count is: {count}</h4>
                        <button className='btn btn-secondary' onClick={handleIncrement}>+</button>
                    </div>
                    <div className='row'>
                        <button onClick={() => setCount(0)}>Reset</button>
                    </div>
                </div>
            )
        };
        export default Counter;
    ```



# React Hook 2: `useEffect`
* `useEffect` is a hook that lets you run some code when something in your component changes.
* E.g., 
  * suppose we are building a weather App, and want to get the current temperature from an API. You could use the `useEffect` hook to fetch the data from the API when the component first loads.

    ```js
        // example: useEffect
    ```