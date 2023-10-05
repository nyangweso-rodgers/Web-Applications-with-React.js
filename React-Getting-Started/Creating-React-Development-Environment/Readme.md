# Creating React Development Environment 

## Objective
* Create a React Development Environment manually to understand how tools like `create-react-app` works and also learn how customize a development environment of choice.

## Role of the Development Environment
* The development environment will:
  * compile `JSX`,
  * transpile `js`,
  * Lint JavaScript to enforce js standards,
  * generate `index.html` file
  * reload on save
  * one command

## Tools for the Development Environment
1. Node
2. Webpack
3. Babel
4. ESLint
5. npm Scripts

## Steps
1. Download and install `Node.js` which we use to run the development environment.
2. Create a directory, `creating-react-development-environment` and proceed to create the following files:
3. Create `package.json`and install dependencies, `react@16.12.0`, and `react-dom@16.12.0`:
     - on the terminal, type the following
     - this creates a new empty `package.json` where all the dependencies will be listed
        ```sh
            # Creates an empty `package.json` file
            npm init --y
        ```
    - install the dependencies
        ```sh
            # install the dependencies
            npm install react@16.12.0 --save
            npm install react-dom@16.12.0 --save
        ```
4. Create a `.gitignore` file and a `src` directory
   1. inside the `src/` directory, create an `index.html` file with the following boilerplate
        ```html
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Create React Development Environment</title>
            </head>
            <body>
                <div id="app"></div>
            </body>
            </html>
        ```
    2. inside the `src/` create an entry-point to the app, i.e., `index.js` and add the following code:
        ```js
            // index.js file
            import React from "react";
            import { render } from "react-dom";

            const Home = () => {
                return (
                    <p>This is a test paragraph!</p>
                )
            }

            render(<Home />, document.getElementById('app'));
        ```
5. With the above necessary source files, we can use [Webpack]() to run the application locally.
    - Webpack is an extreme powerful and extensible bundler
    - Webpack also includes a development web server 
    ```js
        // webpack.config.dev.js
    ```
    - install __webpack__ dependencies
        ```sh
            # save to devDependencies
            # you can specify the specific version of the dependencies
            npm install save-dev webpack webpack-cli webpack-dev-server
        ```
6. Configure [Babel](). 
    - Why do we need Babel?
      - Transpile modern `js`
      - Compile `JSX` to `JS`
    - install __Babel__ packages needed to transform `JS` to `JSX` via the following command
        ```sh
            # save to devDependencies
            npm install --save-dev @babel/core@7.7.7 @babel/node@7.7.7 babel-loader@8.0.6
        ```
7. Start Webpack via `npm` Script