# Fundamentals of `ReactJS`

## Table Of Contents
- [React JSX]()
- [create-react-app]()
- [Further Reading]()
    1. [reactjsguru - react-jsx](https://reactjsguru.com/react-jsx/)
    2. [freecodecamp - React Conditional Rendering – Explained with Examples From BBC Sports](https://www.freecodecamp.org/news/react-conditional-rendering/)

# `React` Core Library CDN
```html
    <!-- React Core Libraries Scripts CDN-->
    <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script> 
```

# `React` Conditional Rendering
* In `React`, __conditional rendering__ is the process of displaying different content based on certain conditions or states.

## How to Implement React Conditional Rendering
* Two common ways to conditionally render content based on the state of a component or other conditons are using the __ternary operator__ and the `&&` operator.
* Using __ternary operator__:
  * The ternary operator may be more useful when there are multiple conditions to check,
  * here, we used the ternary operator `isLoggedIn ? ... : ...` to conditionally render the message depending on whether the user is logged in or not.

    ```js
        // conditional rendering using __ternary operator
        const MyComponent = (props) => {
            const isLoggedIn = props.isLoggedIn

            return (
                {isLoggedIn ? (
                    <h1>Welcome Back!</h1>
                ) : (
                    <h1>Please sign up!</h1>
                )}
            )
        };
    ```
    

* Using `&&` operator:
  * the `&&` operator can be simpler and more concise when there is only one condition.
  * use the `&&` operator to conditionally render the message if `isLoggedIn` is `true`

    ```js
        // using `&&` operator
        const MyComponent = (props) => {
            const isLoggedIn = props.isLoggedIn

            return (
                <div>
                    {isLoggedIn && <h1>Welcome Back!</h1>}
                </div>
            )
        };
    ```