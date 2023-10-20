# React Props

## Table Of Contents
- [Further Reading]()
    1. [nextjs.org/learn/foundations/from-javascript-to-react/displaying-data-with-props](https://nextjs.org/learn/foundations/from-javascript-to-react/displaying-data-with-props)

# Introduction to React `props`
* Regular `HTML` elements have attributes that you can use to pass pieces of information that change the behavior of those elements. For example, changing the `src` attribute of an `<img>` element changes the image that is shown. Changing the `href` attribute of an `<a>` tag changes the destination of the link.

* In the same way, you can pass pieces of information as properties to `React` components. These are called `props`.
* Similar to a `JavaScript` `function`, you can design `components` that accept custom arguments (or `props`) that change the component’s behavior or what is visibly shown when it’s rendered to the screen. Then, you can pass down these `props` from parent components to child components.
* __Note__: 
  * In React, data flows down the component tree. This is referred to as __one-way data flow__. State, can be passed from parent to child components as `props`.


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