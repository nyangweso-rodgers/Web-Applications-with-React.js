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
* `JSX` Rules:
    - `JSX` is enclosed within a single parent element
    - `JSX` uses curly brackets to insert `js` expressions. This allows developers to insert dynamic content into their HTML-like elements.

    ```jsx
        const element = (
            <div>
                <h1>Some content</h1>
                <p>Today is {new Date().toLocalDateString()}.</p>
            </div>
        )
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
* To use `Component` with `JSX`, you must import them and then use them as an element in your `JSX` code. This allows you to reuse the component multiple times within your project.
    ```jsx
        import ExampleComponent from './ExampleComponent';
        const element = <ExampleComponent />
    ```

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

## `JSX` Styling
* `JSX` elements can be styled using the `style` attribute.
* To style a `JSX` element, simply include a `style` attribute with a `js` object that includes the styles you want to apply. Example:

    ```jsx
        const myElement = <div style={{color: red, fontSize: '24px'}}>Some content</div>
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