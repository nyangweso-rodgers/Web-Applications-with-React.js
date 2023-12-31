# React JSX

## Table Of Contents
- [Further Reading]()
    1. [react.dev/learn](https://react.dev/learn)
    2. [oneline converter](https://transform.tools/html-to-jsx)
    3. [react.dev/learn/writing-markup-with-jsx#the-rules-of-jsx](https://react.dev/learn/writing-markup-with-jsx#the-rules-of-jsx)



# `JSX`
* `React` doesn’t have `HTML` files, `HTML` tags are rendered directly inside `JavaScript`. This approach makes `React` faster.
* Most `React` projects use `JSX` for its convenience.
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
            )
        }
    ```
* If you have a lot of HTML to port to JSX, you can use an [oneline converter](https://transform.tools/html-to-jsx)

# 3 Rules of `JSX`
## 3 Rules of `JSX` 1: Return a single root element
* To return multiple elements from a component, __wrap them with a single parent tag__. 
* E.g., For example, you can use a `<div>`:

    ```jsx
        <div>
            <h1>My header!</h1>
            <ul>
                <li></li>
                <li></li>
                <li></li>
            </ul>
           <button></button> 
        </div>
    ```
* If you don’t want to add an extra `<div>` to your markup, you can write `<>` and `</>` instead:
* This empty tag is called a [Fragment](https://react.dev/reference/react/Fragment). 
* __Fragments__ let you group things without leaving any trace in the browser `HTML` tree.
    ```jsx
        <>
            <h1>My header!</h1>
            <ul>
                <li></li>
                <li></li>
                <li></li>
            </ul>
           <button></button> 
        </>
    ```
## 3 Rules of `JSX` 2: Close all tags
* `JSX` requires tags to be explicitly closed: self-closing tags like `<img>` must become `<img />`, and wrapping tags like `<li>`oranges must be written as `<li>`oranges`</li>`.
## 3 Rules of `JSX` 3: camelCase, all/most of the things
* `JSX` turns into `JavaScript` and attributes written in `JSX` become keys of `JavaScript` objects. In your own components, you will often want to read those attributes into variables. But JavaScript has limitations on variable names. For example, their names can’t contain dashes or be reserved words like `class`.

* This is why, in `React`, many `HTML` and `SVG` attributes are written in __camelCase__. For example, instead of `stroke-width` you use `strokeWidth`. Since class is a reserved word, in `React` you write `className` instead.

    ```jsx
        <div className="container">
            This is a div!
        </div>
    ```

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