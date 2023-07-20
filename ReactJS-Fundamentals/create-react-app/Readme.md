# create-react-app (CRA)

## Table Of Contents
- [Further Reading]()
    1. [create-react-app/docs/getting-started](https://create-react-app.dev/docs/getting-started/)
    2. [Hashnode - ReactJS 101: Let's Build Robust Web Applications with React. by Gatere Mark](https://gateremark.hashnode.dev/reactjs-101-lets-build-robust-web-applications-with-react?ref=twitter-share)

# What is CRA?
* __CRA__ is an officially supported way to __create single-page React applications__. It offers a modern build setup with no configuration.
* It is a tool that generates a new `React` site for us along with all of the _configuration_ and _dependencies_ it needs to run. This means it does all the heavy lifting for us when creating a new __React App__.

# CRA in action (Steps to Running First React App with CRA)
1. Have [Node >= 14](https://nodejs.org/en/download) installed. 
    - This is because while using CRA, we use the node package manager (`npm`), to run and build our app.

2. Run the following __CRA__ on your terminal.

    ```sh
        npx create-react-app my-app
    ```
    - `npx` is an `npm` package runner with [added advantages over using `npm`](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b)
    - It is a part of the `node` package system, which temporarily downloads a node package for us and then runs it without explicitly installing it. 
    - `create-react-app` is the command that generates our first __React App__.
    - `my-app` is the name of your `React App` or __project__ (You can use any other different name).

3. Head to the `my-app` directory and type `npm start` which will start the development server (the starting script can be found in the `package.json` file.)

    ```sh
        # head to my-app directory
        cd my-app
        # start the development server
        npm start
    ```

4. Open http://localhost:3000/ to see your app (Works only after the above process is completed successfully as shown below).
5. The page looks like this:

    ![create-react-app page]()

5. On your IDE e.g., VS Code, the folder structure looks like this:

    ![create-react-app Folder Structure on VS Code]()

# create-react-app Folder Structure
1. `node_modules`
    - stores all of our project dependencies and node packages.
    - The __React library__ itself is a node package, and it's kept inside this directory which includes any other packages that one will install in the future will also be stored in this `node_modules` directory.

2. `public`
    - contains static assets or files and will be made public to the browser, such as the `HTML` file(s), `icon`(s), `images`, and `fonts`. 
    - When you run `npm start`, this directory is served as the root directory of your app
    - Examples of files include:
      - the `favicon.co` which is the icon shown in the browser tab, 
      - the `robot.txt `file which is for communicating with search engine crawlers and web scrapers, 
      - the `manifest.json` file which contains a bunch of information about our project and is primarily used when a user wants to install a [progressive web app]().
      - `index.html`, which is the single file served to the browser when the app is loaded;  where our React application will be injected into the page

3. `src`
    - `src` directory contains the source code for the __React application__.
    - This is the directory where we build `components`.
    - When our app is compiled, it's all the files in the `src` directory that get compiled into a [JavaScript bundle](https://stackoverflow.com/questions/42727269/what-is-an-asset-and-what-is-a-bundle).
    - Files in the `src` directory include:
        1. `App.js` - This is the main component that is rendered to the DOM when your app is loaded. It contains the logic and structure of your app.
        2. `App.css` - This is a file used to style the components in the app.
        3. `index.css` - This is the global stylesheet where styling is done globally in the entire app.
        4. `logo.svg` - This is an image in the form of an SVG being used in the App component.
        5. `index.js` - This is the file that kinda kickstarts the __React application__. It is the entry point of any React application as it imports `App.js` and renders it to the root element in `index.html`.
        6. `App.test.js` - Used for writing tests for the App component.
        7. `setupTests.js` - Needed for the test files to work by importing a testing library.
        8. `reportWebVitals.js` file - This allows us to measure the performance of the React application by analyzing certain metrics.

    - __NOTE__: For the start or as a beginner, one does not work with the `App.test.js`, `setupTests.js` and `reportWebVitals.js` files, which are used at a more advanced level, hence one can delete the files and also delete their import statements in the `App.js` and `index.js` files.

4. Additionally, we have more files in the root of our directory:
   1. `.gitignore` file for version control which tells `Git` which files or directories to ignore and not track eg the node_module directory.
   2. `package.json` file:
      - This is a file that tells any developer working with the application the different libraries or packages that the project needs in order to work. 
      - In other words, it is used for tracking dependencies or packages and their versions for each specific project created with CRA. 
      - It contains information about the project, including its dependencies that are stored in the node_modules directory, scripts like building, testing, or deploying your app, and other metadata.

    3. `README.md` file - This is the file used to describe what the app does, how to install it, how to use it, and any other relevant information.