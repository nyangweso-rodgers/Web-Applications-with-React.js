# Project: Creating `React` Components using `create-react-app` Toolchain

## Table Of Contents
- [Further Reading]()
    1. [create-react-app.dev/docs](https://create-react-app.dev/docs/getting-started)
    2. [freeCodeCamp - A Better Way to Structure React Projects](https://www.freecodecamp.org/news/a-better-way-to-structure-react-projects/?utm_source=hashnode&utm_medium=hashnode+rix&utm_campaign=rix_chatbot_answer)

# Setting Up a Development Environment with `create-react-app` Toolchain
* Install `create-react-app` globally
    ```sh
        # globally install create-react-app
        npm install -g create-react-app
        # OR
        sudo npm install -g create-react-app
    ```
* Start the `create-react-app`
```sh
    # with npm
    npm create-react-app my-components-with-create-react-app
    # OR
    # with npx
    npx create-react-app my-components-with-create-react-app
```

# Requirements
## Requirements 1: Adding `Bootstrap5`
* Integrate `Bootstrap5` into `React`:

    ```sh
        # using npm
        npm install bootstrap
    ```
* Import `Bootstrap CSS` and optionally `Bootstrap` theme `CSS` in the beginning of your `src/index.js` file:

    ```js
        import 'bootstrap/dist/css/bootstrap.css';
        // Put any other imports below so that CSS from your
        // components takes precedence over default styles.
    ```
# Structuring The Project Folder
* The structure is organized into an `src` the directory containing the React app's source code. Which has:
  * `src/components/` containing the React components for the app.
  * `src/styles`  contains CSS styles.

# Lists of Components
1. `Counter`
    - For a counter application.
