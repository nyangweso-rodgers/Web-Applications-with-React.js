# `create-reatc-app` (CRA) Toolchain

## Table Of Contents
- [Further Reading]()
    1. [Create React App - Official Documentation](https://create-react-app.dev/)

# What is CRA?
* __CRA__ is an officially supported way to __create single-page React applications__. It offers a modern build setup with no configuration.
* It is a tool that generates a new `React` site for us along with all of the _configuration_ and _dependencies_ it needs to run. This means it does all the heavy lifting for us when creating a new __React App__.

# How `CRA` Works
* `CRA` uses two popular `packages` 
  1. `webpack` which is a web bundler that optimizes all of the assets in your project, such as `JavaScript`, `CSS`, and `images`.,
  2. `Babel`:  which is a tool that allows you to use newer `JavaScript` features, even if some browsers don’t support them.

# Alternatives to `CRA`
* `CRA` is a good tool for setting up a new `React` project. But there are newer tools that can do the job better:
    1. [Vite]()
    2. [Speedy Web Compiler (SWC)]()
* These new and improved alternatives are faster and easier to configure than `webpack` and `Babel`. This makes it easier to adjust the configuration which is difficult to do in `create-react-app` without ejecting.
# Steps to Running React App with `CRA`
## Step 1: Install latest version of `node`
* Have [Node >= 14](https://nodejs.org/en/download) installed. 
    - This is because while using CRA, we use the node package manager (`npm`), to run and build our app.

## Step 2: Run `CRA` in the terminal
* __NOTE__: if you have a globally installed `create-react-app` via `npm install -g create-react-app`, it is recommdended you uninstall the package using `npm uninstall -g create-react-app` or `yarn global remove create-react-app` to ensure that `npx` always uses the latest version.
* Quick start

    ```sh
        # run to use npm package manager
        npx create-react-app my-app-name
    ```
* Remarks:
  * `npx` is an `npm` package runner with [added advantages over using `npm`](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b)
  * It is a part of the `node` package system, which temporarily downloads a `node` package for us and then runs it without explicitly installing it. 
  * `create-react-app` is the command that generates our first __React App__.
  * `my-app-name` is the name of your `React App` or __project__ (You can use any other different name).

## Step 3: Start the Development Server
* Head to `my-app-name` directory and type `npm start` which will start the development server (the starting script can be found in the `package.json` file.)

    ```sh
        # head to `my-app-name directory
        cd my-app-name
        # start the development server
        npm start
    ```
* Remarks:
  * Open http://localhost:3000/ to see your app (Works only after the above process is completed successfully as shown below).
  * The page looks like this: 
  
![create-react-app page]()

# `React` Version
* You can check the version of `React` you are using by:
  1. checking the `package.json` file: The version of React is listed as a dependency in your project's package.json file. Look for the react entry under the dependencies section. It will look something like this:

      ```json
          "dependencies": {
          "react": "^18.2.0",
          "react-dom": "^18.2.0",
          // other dependencies
        },
      ```
  2. using `npm` or `yarn` commands:

      ```sh
          # using npm
          npm list react
          # or, using yarn
          yarn list react
      ```






# Folder Structure of `create-react-app`
* In the `create-react-app` there are 3 __folders__:  
    1. `node_modules/`
    2. `public/`, and
    3. `src/`
* The following files also exist:
    1. `.gitignore`: file for version control which tells `Git` which files or directories to ignore and not track eg the node_module directory.
    2. `package-lock.json`
    3. `package.json`: 
        - This is a file that tells any developer working with the application the different `libraries` or `packages` that the project needs in order to work. i.e., it is used for tracking `dependencies` or `packages` and their `versions` for each specific project created with `CRA`. 
         - It contains information about the project, including its dependencies that are stored in the `node_modules` directory, `scripts` like building, testing, or deploying your app, and other metadata.
    4. `Readme.md`: file used to describe what the app does, how to install it, how to use it, and any other relevant information.

## `create-react-app` File: `package.json`
* `package.json` file  is a crucial part of a `Node.js` or `npm-based` project, including `React` projects created with `create-react-app` or `pnpm create vite@latest`. It contains important information about your project, such as its:
  * `name`, 
  * `version`, 
  * `dependencies`, and 
  * `scripts`.

* When you push your project to `GitHub`, including the `package.json` file ensures that anyone who clones your repository can quickly set up and run the project without having to manually configure the dependencies and scripts.

* When you install a package using `npm`, you can use the `--save` or `-S` flag to instruct `npm` to update the `package.json` file with the new package and its version as a dependency. 

  ```sh
        # install node package and upddate the package.json file
        npm install package-name --save
  ```
## `create-react-app` File: `package-lock.json`
* `package-lock.json` file is a lock file that ensures that your project will always use the same `versions` of the `dependencies`, regardless of when you install it or who installs it. It contains the following information:
  * The exact `versions` of all the `dependencies` that are required to run your project.
  * The location of each `dependency`.
  * The checksum of each `dependency`.

* It is recommended to commit the `package-lock.json` file along with your project source code so that all the developers and CI/CD will use this file to install the same version of the package. However, you should not edit the `package-lock.json` file manually, as it is automatically generated by `npm` or `Yarn`.

* __Remark__:
  * The main difference between the two files is that `package-lock.json` is a more detailed file that contains the exact versions of all the dependencies that are required to run your project. `package.json` only contains the names and versions of the dependencies, and it does not guarantee that the same versions will be installed every time.



## Subdirectory 1: `node_modules/` 
- stores all of our project `dependencies` and `node packages`.
- The __React library__ itself is a `node package`, and it's kept inside this directory which includes any other packages that one will install in the future will also be stored in this `node_modules` directory.



## Subdirectory 2: `public/`
- everything in `public` will not be processed by `webpack`.
- contains static assets or files and will be made public to the browser, such as the `HTML` file(s), `icon`(s), `images`, and `fonts`. 
- When you run `npm start`, this directory is served as the root directory of your app
- Example Files:
  1. `favicon.co` the icon shown in the browser tab
  2. `robot.txt `file which is for communicating with search engine crawlers and web scrapers, 
  3. `manifest.json` file which contains a bunch of information about our project and is primarily used when a user wants to install a [progressive web app](). 
      

### `public/index.html`
* `index.html` is the single file served to the browser when the app is loaded; where our React application will be injected into the page.

    ```html
        <!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="utf-8" />
            <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#000000" />
            <meta
              name="description"
              content="Web site created using create-react-app"
            />
            <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
            <!--
              manifest.json provides metadata used when your web app is installed on a
              user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
            -->
            <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
            <!--
              Notice the use of %PUBLIC_URL% in the tags above.
              It will be replaced with the URL of the `public` folder during the build.
              Only files inside the `public` folder can be referenced from the HTML.

              Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
              work correctly both with client-side routing and a non-root public URL.
              Learn how to configure a non-root public URL by running `npm run build`.
            -->
            <title>React App</title>
          </head>
          <body>
            <noscript>You need to enable JavaScript to run this app.</noscript>
            <div id="root"></div>
            <!--
              This HTML file is a template.
              If you open it directly in the browser, you will see an empty page.

              You can add webfonts, meta tags, or analytics to this file.
              The build step will place the bundled scripts into the <body> tag.

              To begin the development, run `npm start` or `yarn start`.
              To create a production bundle, use `npm run build` or `yarn build`.
            -->
          </body>
        </html>
    ```
* __Note__: You can delete or rename the other files but `index.js` and `index.html` has to remain the way they are.


## Subdirectory 3: `src/`
- contains the source code for the __React application__.
- This is the directory where we build `components`.
- When our app is compiled, it's all the files in the `src` directory that get compiled into a [JavaScript bundle](https://stackoverflow.com/questions/42727269/what-is-an-asset-and-what-is-a-bundle).
- Has the following files:
  2. `App.css` - This is a file used to style the components in the app.
  3. `index.css` - This is the global stylesheet where styling is done globally in the entire app.
  4. `logo.svg` - This is an image in the form of an SVG being used in the App component.
  5. `App.test.js` - Used for writing tests for the App component.
  6. `setupTests.js` - Needed for the test files to work by importing a testing library.
  7. `reportWebVitals.js` file - This allows us to measure the performance of the React application by analyzing certain metrics.  
- __NOTE__:
  - For the start or as a beginner, one does not work with the `App.test.js`, `setupTests.js` and `reportWebVitals.js` files, which are used at a more advanced level, hence one can delete the files and also delete their import statements in the `App.js` and `index.js` files.
  - You may create subdirectories inside `src`
  - For faster rebuilds, only files inside `src` are processed by `webpack`. You need to put any `JS` and `CSS` files inside `src`, otherwise `webpack` won’t see them

### `src/index.js`
* `index.js` is the file that kinda kickstarts the __React application__. It is the entry point of any `React` application as it imports `App.js` and renders it to the root element in `index.html`.

  ```js
    import React from 'react';
    import ReactDOM from 'react-dom/client';
    import './index.css';
    import App from './App';
    import reportWebVitals from './reportWebVitals';

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );

    // If you want to start measuring performance in your app, pass a function
    // to log results (for example: reportWebVitals(console.log))
    // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
    reportWebVitals();
  ```
* In the `index.js` file, we import:
    1. `React` for the `React` Engine,
    2. `ReactDOM` for browser support
* __Note__: You can delete or rename the other files but `index.js` and `index.html` has to remain the way they are.

### `src/App.js`
* `App.js` is the main component that is rendered to the `DOM` when your app is loaded. It contains the logic and structure of your app.

  ```js
    import logo from './logo.svg';
    import './App.css';

    function App() {
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
      );
    }

    export default App;
  ```

# Importing External Modules to  `src/index.js` File
## Import External Module: Bootstrap 5
* To import `Bootstrap 5` run the following command in the terminal.

  ```sh
    npm install bootstrap@5
  ```
* `Bootstrap 5` helps with positioning elements while using some of its built-in `css` classes.
* After installig `Bootsrap 5`, head to `src/index.js` and import it:

  ```js
    import "bootstrap/dist/css/bootstrap.min.css";
  ```

# Placing Components in Folders
* We can create a folder, i.e., `src/main-page/` inside a `src/` folder then move `src/App.js`, `src/App.css` and `src/logo.svg` inside the `src/main-page/`
* You can then rename `App.js` to `index.js` and `App.css` to `main-page.css` for clarity.