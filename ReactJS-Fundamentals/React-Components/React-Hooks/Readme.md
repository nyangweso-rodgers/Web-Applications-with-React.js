# React Hooks

## Table Of Contents

# React Hooks
* __Hooks__ are a way to add extra functionality to your `React JS` or `Next JS` code.
* They allow you to do things like `useState`, manage effects, and reuse logic across different components.
* There are several different hooks you can use in React JS and Next JS, like:
    1. `useState`
    2. `useEffect`

# React Hook: `useState`
* `useState`lets you keep track of variables that can change over time.
* E.g., 
  * suppose you are building a game and want to track the players score, You could use the `useState` hook to create a variable called "`score`" and set it to `0`. Then, every time the player earns a point, you could use the "`setScore`" function (which `useState` also provides) to update the score.

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

# React Hook: `useEffect`
* `useEffect` is a hook that lets you run some code when something in your component changes.
* E.g., 
  * suppose we are building a weather App, and want to get the current temperature from an API. You could use the `useEffect` hook to fetch the data from the API when the component first loads.

    ```js
        // example: useEffect
    ```