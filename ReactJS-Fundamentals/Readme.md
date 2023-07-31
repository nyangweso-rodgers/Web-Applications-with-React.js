# Fundamentals of `ReactJS`

## Table Of Contents
- [React JSX]()
- [React Components]()
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
# Creating Elements with `JSX`
* using `JSX` for the above example, we get:

    ```jsx
        <div className="split">
            <input/>
            <p>
                Monday 4:20 PM
            </p>
        </div>
    ```
# React Concept: `JSX` (JavaScript XML)
* `JSX`: an extension of `JavaScript` which allow us to write `HTML` code in `JavaScript` file.
* Example: consider the below `variable` declaration. It's neither `JS` nor `HTML`. This is the mixture of `JavaScript` + `XML` = `JSX`. It is not necessary to work with `JSX`, but is recommended as it makes the code easier to understand.

    ```js
        const element = <h1>Hello, World!</h1>
    ```
* Why use `JSX`?
  * As it basically helps us write `HTML` tags inside `JS`, which ultimately makes __React__ faster.
  * `JSX` makes the code easier to understand and visually attractive.

      ```js
          class Hey extends React.Component {
              render(){
                  return <div> Hello {this.props.iDontKnow}</div>;
              }
          }
          ReactDOM.render{
              <Hey iDontKnow="World"/>,
              document.getElementById('root')
          };
      ```
# React Concept 1: `React Components`
* __React apps__ are usually a composition of several independent `components` that make up the UI of the application. 
* Each component has 3 distinct characteristics:
    1. `state`
    2. `props`
    3. `Render()`
* __React Components__ is a `js function` that takes an object of arbitrary inputs known as `props` and returns React elements describing what should be rendered on the UI.

    ```js
        // simple React component
        function ReactHeader(props) {
            return <h1>React {props.version} Documentation</h1>
        };
    ```
* Remarks:
    * This code snippet defines a very simple `ReactHeader` component that renders a `h1` element containing a heading for the documentation of a specified `React` version. It uses the `JSX` syntax for creating the `DOM` elements hierarchy of the component in a declarative way.
    * By passing data to a `component` via `props`, you can make the `component` more flexible and reusable. This allows you to use the same `component` in different contexts with different data.