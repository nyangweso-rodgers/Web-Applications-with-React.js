# From `js` to `React`

## Table Of Contents

# Getting Started with `React.js`
* To use `React` in any project, load two `React` scripts from [unpkg.com](https://unpkg.com/):
    1. __react__ is the core `React` library.
    2. __react-dom__ provides __DOM-specific__ methods that enable you to use `React` with the `DOM`.

    ```html
        <!-- index.html -->
        <html>
        <body>
            <div id="app"></div>

            <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
            <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>

            <script type="text/javascript">
            const app = document.getElementById('app');
            </script>
        </body>
        </html>
    ```
* __Note__: 
  * that browsers don’t understand `JSX` out of the box, so you’ll need a `JavaScript` compiler, such as a [Babel](https://babeljs.io/), to transform your `JSX` code into regular `JavaScript`.
  * Adding __Babel__ to your project:
    * to add __Babel__ to your project, add the below script to the `index.html` file:
      ```html
          <!-- Add Babel to your index.html -->
          <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
      ```
* In addition, you will need to inform __Babel__ what code to transform by changing the script type to `type=text/jsx`.
* Finally, our `index.html` file looks like this:

    ```html
        <!DOCTYPE html>

        <!-- index.html -->
        <html>
        <body>
            <div id="app"></div>
            <!-- core React Library -->
            <script src="https://unpkg.com/react@17/umd/react.development.js"></script>
            <!-- react-dom-->
            <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>

            <!-- Babel Script -->
            <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

            <script type="text/jsx">
                const app = document.getElementById('app');
                ReactDOM.render(
                    <h1>Hello world!</h1>, app
                )
            </script>
        </body>
        </html>
    ```
* You can then run the `index.html` in the browser to confirm it is working correctly.
* Compare the __declarative__ `React` code:
    ```html
        <script type="text/jsx">
            const app = document.getElementById("app")
            ReactDOM.render(<h1>Develop. Preview. Ship. 🚀</h1>, app)
        </script>
    ```
    to the __imperative__ JavaScript code:
    ```html
        <script type="text/javascript">
            const app = document.getElementById('app');
            const header = document.createElement('h1');
            const headerContent = document.createTextNode('Hello World!');
            header.appendChild(headerContent);
            app.appendChild(header);
        </script>
    ```
