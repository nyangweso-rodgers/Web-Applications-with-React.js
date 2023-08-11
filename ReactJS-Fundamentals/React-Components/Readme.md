# `React` Components

## Table Of Contents
- [Further Reading]()
    1. [react.dev/learn](https://react.dev/learn)
    2. [javascript.info - Export and Import](https://javascript.info/import-export)
    3. [hashnode.dev - React Props Explained with Examples](https://refine.hashnode.dev/react-props-explained-with-examples)
    4. [hashnode.dev - React Hooks](https://kamalpatel.hashnode.dev/react-hooks)


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

# Passing `props` to a component
* `React components` use `props` (short for properties) to communicate with each other. These properties are read-only. 
* Every parent `component` can pass some information to its child `components` by giving them `props`.
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
* `React` __Components__ written as functions are known as __Functional Components__. While the __ES6 components__ are known as __Class Components__.
# `PropTypes`
* `PropTypes` are used to make sure the values passed through `props` are valid.
* `PropTypes` includes `props` and their respective `PropTypes` for type checking.
* The main benefit of type checking is that it makes the code base more robust and bug free.
* Step 1:
  * Add `props` to `Header` Component

    ```js
        // Header Component
        import React from 'react';

        const Header = (props) => {
            return (
                <div>Hello World!</div>
            )
        };
    ```
* Step 2:
  * import `PropTypes` from `'prop-types'`into `App.js` file

    ```js
        // import 'prop-types' from 'prop-types' into 'App.js';
        import PropTypes from 'prop-types';
    ```
* Step 3:
  * Add type checking for `props` in the `App.js` file

    ```js
        // add `prop-types` to `App.js`
        Header.propTypes = {
            title: PropTypes.string
        };
    ```
* Step 4:
    * So, the final `App.js` file looks like this:

        ```js
            // App.js with props
            import React from 'react';
            import PropTypes from 'prop-types';
            import Header from './components/Header/Header.js';

            const App = () => {
                return (
                    <>
                        <Header title='Rodgers Nyangweso' />
                    </>
                );
            }

            Header.propTypes = {
                title: PropTypes.string
            };

            export default App;
        ```
* Step 5:
  * we can now access the `title` in the `props`

    ```js
        // Header component
        const Header = (props) => {
            const title = props.title;
            return null;
        };
    ```
* Step 6:
  * We can now display the `props`

    ```js
        import React from 'react';

        const Header = (props) => {
            const title = props.title;

            return (
                <div>
                    <nav>
                        <h1>{title}</h1>
                    </nav>
                </div>
            )
        };
    ```
# Passing `Object` to `Component` via `props`
* It's possible to pass `objects` to `React components`
* Example:
  * Suppose we have the below `object` in a parent `component` and want to pass it to a child `component` so it can display the object's property values.

    ```js
        const user = {
            id: 0,
            firstName: 'Rodgers',
            lastName: 'Nyangweso',
            age: 26,
        };
    ```

  * We pass it to the `component` like this:

    ```js
        // Header Component
        <Header user={user} />
    ```

  * Now we can acess the `user` `prop` in the `Header` component in the `props` object

    ```js
        // Header Component
        const header = (props) => {
            const user = props.user;

            return (
                <div>
                    <p>First Name: {user.first_name}</p>
                    <p>Age: {use.age}</p>
                </div>
            )
        }
    ```

# Passing `Array` to `React Component` via `props`
* Example:
  * Suppose we have an `Array` of `users`

    ```js
        // Array of users
        const users = [
            {
                id: 0,
                firstName: 'Rodgers',
                lastName: 'Nyangweso',
                age: 20,
            },
            {
                id: 1,
                firstName: 'Wilson',
                lastName: 'Oyare',
                age: 21,
            }
            {
                id: 2,
                firstName: 'Damaris',
                lastName: 'Oballa',
                age: 22,
            }
            {
                id: 3,
                firstName: 'Andy',
                lastName: 'Omondi',
                age: 23,
            }
        ]
    ```
  * We have a `component` that displays a list of `users`. We want this `component` to receive an `array` of users via a `users props`. 
  * We pass the array to it like this:

    ```js
        // 
        <DisplayUsers users={users} />
    ```
  * Now, let's get the `users` from the `props` object and display the `users`.

    ```js
        const DisplayUsers = (props) => {
            const users = props.users;

            return (
                <div>
                    {users.map((user) => (
                        <div>
                            <p>Name: <span>{user.name}</span></p>
                            <p>Age: <span>{user.age}</span></p>
                        </div>
                    ))}
                </div>
            );
        };
    ```
# Passing `Function` to `React Component` via `props`

# Default `Props` in `React`
* Default `props` are `props` that the `Component` will fall back to when the `props` are not passed to the `component`.
* Example:
  * Set default value to a function
    ```js
    ```


# `State` vs. `Props`
* `Props` are passed to `components`, and from one `component` to another. `State` on the other hand is not passed from one `component` to the other, it is passed within the `component` only. The `state` is local data used and maintained by one `component` only. Two `components` cannot use or maintain one state.

* `Props` are _immutable_, which means that they cannot be modified. Once a `props` is passed to a `component`, that `component` cannot change the value of the `props`. `State` on the reverse is _mutable_. `States` can be changed at will in the `component`.

* So props are read-only while states are read-and-write. Props are used for communication uni-directional or bi-directional, while the state is used to render dynamic data in the component.

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