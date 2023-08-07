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