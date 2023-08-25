# `React` Components

## Table Of Contents
- [Further Reading]()
    1. [react.dev/learn](https://react.dev/learn)
    2. [javascript.info - Export and Import](https://javascript.info/import-export)
    3. [hashnode.dev - React Props Explained with Examples](https://refine.hashnode.dev/react-props-explained-with-examples)
    4. [hashnode.dev - React Hooks](https://kamalpatel.hashnode.dev/react-hooks)


# `React Components`
* `Components`  are the foundation upon which you build UI. 
* `React components` are `js functions` that return `markup` which can be as small as a `button`, or as large as an entire page.
* Example: 
  * create a submit `button` component
    ```js
        // create a submit button component
        const SubmitButton = () => {
            return (
                <button>Submit</button>
            );
        }
    ```
  * After `SubmitButton` as been declared, we can nest it into another `component`:
      ```js
          // nest the SubmitButton into another component
          export default function MyApp() {
              return (
                  <div>
                      <h1>Some header title!</h1>
                      <SubmitButton />
                  </div>
              )
          }
    ```
* __Note__:
    - `<SubmitButton />` starts with a capital letter. That’s how you know it’s a `React component`
    - `React component` names must always start with a capital letter, while `HTML` tags must be lowercase.
    - The `export default` keywords specify the main component in the file.

* To use `Component` with `JSX`, you must import them and then use them as an element in your `JSX` code. This allows you to reuse the component multiple times within your project.
    ```jsx
        // import Component
        import ExampleComponent from './ExampleComponent';
        const element = <ExampleComponent />
    ```


# Characteristics of React Component
* Each component has 3 distinct characteristics:
    1. `state`: 
    2. `props`: By passing data to a `component` via `props`, you can make the `component` more flexible and reusable. This allows you to use the same `component` in different contexts with different data.
    3. `Render()`



# React Hooks
* React Hooks allows to use state and other react features without writing a `class`.
* Previously before `hooks` were introduced, `state` were managed inside `classes component`. But, now manage state using a `Hook` inside the existing function using hooks API.
* Three commonly used React hooks are:
    1. `useState`
    2. `useRef`
    3. `useEffect` 
* Other React hooks are:
    1. `useContext`
    2. `useReducer`
    3. `useCallback`
    4. `useMemo`

# `React State` 
* `State` is a mechanism in `React` that allows you to store and manage data within a `component`. 
* Unlike `props`, which are passed down from parent components and are read-only, `state` is managed internally within a `component` and can be changed using the `setState` method. 
* When `state` changes, `React` automatically re-renders the `component` to reflect the updated data.

## `useState`
* Its a hooks API that return a stateful value. we call it inside a function component to add some local state to it.
* During the initial rendering, the value of state is the initialState passed as argument to useState function.
* Syntax:
    ```js
        //syntax
        const [state, setState] = useState(initialState);
    ```
* Example:
    ```js
        // Example
        const [name, setName] = useState('Rodgers');
        const [age, setAge] = useState(20);
    ```
* The `setState` is function used to update the state. It accepts a new value and re-render's the component. React components automatically re-render whenever there is a change in their state.

* Example:
  * Suppose we want to create a simple `Counter` Component with the `useState` hook:
  * First, import the `useState` from `react`
    ```js
        // Import the `useState` from `react``
        import React, { useState } from 'react';
    ```
  * Step 2: Create `Counter` Functional Component
    ```js
        const Counter = () => {
            return (
                <div>
                    <h2>This is a counter!</h2>
                </div>
            )
        };

        export default Counter;
    ```
  * Step 3: Add state to the `Counter` Component. Initial state value = 0;
  * the `useState` hook returns an `array` where the first element is the current state value (`count`), and the second element is the state update function (`setCount`).
    ```js
        //
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
  * Step 4: Add `button` with `onClick`Handlers for increment and decrement
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
  * Step 5: Create `onClick` Event Handler Functionality to execute function when `button` is clicked.
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
  * Step 6: Combine the steps:
  * Whenever the `button` is clicked and `handleIncrement` is called, the state is updated using the `setCount` function, which triggers a re-render of the component with the updated state.
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

# Unmounting & Remounting `React Components` 

# Implementing Event Handlers