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
# React Basic Concepts

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


## `JSX` Feature: Type checking with `propTypes`
* `PropTypes` is a tool in the `React` library that helps you make sure your components are getting the right data. You can use it by adding it to your code and telling it what kind of data your component's `props` should be. This can help you find and fix problems in your code.
* To use `PropTypes`, you need to import it and then specify the data types for your `props` in an object called `propTypes` in your component.

    ```jsx
        import PropTypes from 'prop-types';

        MyComponent.propTypes = {
            name: PropTypes.string,
            age: PropTypes.number
        };
    ```

## `JSX` Feature: `JSX` spread attributes
* `JSX` spread attributes allow you to pass all the properties of an object as `props` to a `JSX` element. This can save you time and make your code more flexible.
* To use `JSX` spread attributes, you can use the `...` syntax and include the object that you want to spread as `props`.

    ```jsx
        const props = {
            name: 'Rodgers',
            height: 6.1
        };

        const element = <MyComponent {...props} />
    ```

## `JSX` Feature: `JSX` Fragments
* `JSX` Fragments allow you to return multiple elements from a component without adding an extra element around them.
* To use `JSX` Fragments, you just have to wrap your elements in `<> `syntax. Example:

    ```jsx
        const MyComponent = () => (
            <>
                <h1>Some header content</h1>
                <p>Paragraph goes here</p>
            </>
        )
    ```