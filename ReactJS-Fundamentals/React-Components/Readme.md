# `React` Components

## Table Of Contents
- [Further Reading]()
    1. [react.dev/learn](https://react.dev/learn)
    2. [javascript.info - Export and Import](https://javascript.info/import-export)


# `React Components`
* `Components` are one of the core concepts of `React`. They are the foundation upon which you build user interfaces (UI), which makes them the perfect place to start your `React` journey!
* `React components` are `js functions` that return `markup` which can be as small as a `button`, or as large as an entire page.
* Example: _create a submit button component_
    ```js
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
    - The `export default` keywords specify the main component in the file





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


# Function Components
* Example:
  * Create a `Users.js` component

    ```js
        import React from 'react';

        const Users = () => {
            return (
                <div>
                    <h1>Some Header Title!</h1>
                    <p>Some paragraph goes here.</p>
                </div>
            )
        }
    ```

# Class Based Components

# Passing `props` to a component
* `React components` use `props` (short for properties) to communicate with each other. These properties are read-only. Every parent component can pass some information to its child components by giving them `props`.
* `Props` might remind you of `HTML` `attributes`, but you can pass any `JavaScript` value through them, including `objects`, `arrays`, `functions`, and even `JSX`!
* E,g.,
  ```jsx
      function Hello(props) {
        return <h1>Hello, {props.name}</h1>
      }

      function App() {
        return (
          <div>
            <Hello name="Rodgers" />
            <Hello name="Omondi" />
            <Hello name="Nyangweso" />
          </div>
        )
      }
  ```