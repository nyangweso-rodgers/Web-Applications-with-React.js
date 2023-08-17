# React JSX

## Table Of Contents
- [Further Reading]()
    1. [react.dev/learn](https://react.dev/learn)
    2. [oneline converter](https://transform.tools/html-to-jsx)

# `JSX`
* `React` doesn’t have `HTML` files, `HTML` tags are rendered directly inside `JavaScript`. This approach makes `React` faster.
* Most React projects use `JSX` for its convenience.
* `JSX` is stricter than `HTML:`
    -  You have to close tags like `<br />`. 
    -  Your component also can’t return multiple `JSX` tags

    ```jsx
        AboutPage = () => {
            return (
                <>
                    <h1>Header 1</h1>
                    <p>Hello there.<br />How do you do?</p>
                </>
            );
        }
    ```
* If you have a lot of HTML to port to JSX, you can use an [oneline converter](https://transform.tools/html-to-jsx)

# Adding Styles
* In `React`, you specify a `CSS` class with `className`. It works the same way as the `HTML` class attribute:
    ```html
        <img className="someImage" />
    ```
* Then you write the `CSS` rules for it in a separate `CSS` file:
    ```css
        /* In Your CSS */
        .someImage {
            border-radius: 50%;
        }
    ```
* OR,`JSX` elements can also be styled using the `style` attribute.
* To style a `JSX` element, simply include a `style` attribute with a `js` object that includes the styles you want to apply. Example:

    ```jsx
        const myElement = <div style={{color: red, fontSize: '24px'}}>Some content</div>
    ```

# Displaying Data
* `JSX` lets you put markup into `js`.
* Curly braces let you “escape back” into `JavaScript` so that you can embed some variable from your code and display it to the user. 
* Example:
    - This will display `user.name`
    ```jsx
        return (
            <h1>
                {user.name}
            </h1>
        )
    ```

# `JSX` Features
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
* `JSX` Fragments allow you to return multiple elements from a `component` without adding an extra element around them.
* To use `JSX` Fragments, you just have to wrap your elements in `<> `syntax. Example:

    ```jsx
        const MyComponent = () => (
            <>
                <h1>Some header content</h1>
                <p>Paragraph goes here</p>
            </>
        )
    ```