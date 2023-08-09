# Fundamentals of `ReactJS`

## Table Of Contents
- [React JSX]()
- [create-react-app]()
- [Further Reading]()
    1. [reactjsguru - react-jsx](https://reactjsguru.com/react-jsx/)

# `React` Core Library
```html
    <!-- React Core Libraries Scripts CDN-->
    <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script> 
```

# Creating Elements in `ReactJS` using Vanilla `js`
* Each element is created by calling `React.createElement()`
* E.g., 

    ```js
        // create an input element
        React.createElement("input")
    ```
* Example: create an input element
    ```js
        React.createElement(
            "div",
            { className: "split" },

        React.createElement("input"),
            React.createElement(
                "p",
                null,
                "Monday 4:20 pm"
            )
        );
    ```