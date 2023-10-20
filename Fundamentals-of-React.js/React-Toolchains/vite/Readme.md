# Vite

## Table Of Contents
- [Further Reading]()
    1. [vitejs.dev/](https://vitejs.dev/)
    2. [Hashnode - ReactJS 101: Let's Build Robust Web Applications with React. by Gatere Mark](https://gateremark.hashnode.dev/reactjs-101-lets-build-robust-web-applications-with-react?ref=twitter-share)
    3. [Why Vite - vitejs.dev/guide](https://vitejs.dev/guide/why.html)

# Introduction to `Vite`
* [Vite](https://vitejs.dev/) like [CRA](https://create-react-app.dev/) is a build tool that is designed to be fast and optimized for modern web development workflows.  It too generates a new `React` site for us along with all of the `configuration` and `dependencies` it needs to run hence doing all the heavy lifting for us as well.

# Advantages of `Vite`
1. _Speed_ - `Vite` is blazingly fast as compared to `CRA`. This is because it uses a new generation of build tooling that leverages modern `JavaScript` features hence significantly reducing the time it takes to build and reload your app during development, as compared to `CRA` which uses a more traditional build process that is slower, especially for larger applications.
   
2. _Flexibility_ - You can easily tailor it to your specific needs as it was designed to be highly configurable and customizable.

3. _Performance_ - Vite has a smaller build output than CRA hence improving the performance, and loading time of your web application.

# Features Of `Vite`

# How to Create App with `Vite`?
1. __Step 1__:
   - For `Vite`, we use `pnpm create vite@latest`
   - __Note__:
      - `pnpm` is also a package manager but faster than `npm`.
      - Learn More about [pnpm](https://pnpm.io/)
  
    - However, you can also use `npm create vite@latest` instead.

2. __Step 2__: 
   - After you run `pnpm create vite@latest` in the terminal, you are prompted to add the __Project name__, the default being `vite-project`.
   - After adding the project name, we are prompted to select the framework we are to use in our project. __Vite__ supports several libraries \ frameworks but because we are using `React`, we will select `React`.
   - After selecting '`React`', we are to select whether we are to use `React` with `TypeScript` or `JavaScript`. We are to select `JavaScript` for this project.
     - However, we have two options for both `JavaScript` and `TypeScript`;
     - we have one with `JavaScript` and the second option with `JavaScript` + SWC. 
     - [SWC](https://swc.rs/) is a transpiler for `JavaScript` / `TypeScript` that is written in `Rust` and is much faster than `Babel` (`JavaScript` option with no '**+ SWC' uses `Babel`), used for both compilation and bundling. `Rust` is known for its performance and reliability, hence for compilation, `SWC` takes `JavaScript` / `TypeScript` files using modern `JavaScript` features and outputs valid code that is supported by all major browsers 20x faster than `Babel`. It speeds up the development, production builds and outputs smaller files hence much faster than `Babel`.

3. __Step 3__:
    - Head to `my-app` directory using `cd my-app`
    - Install the project's dependencies with `npm install` or `pnpm install` (depending on the package manager you initially preferred to use).
    - Then to run our project, with CRA we were using `npm start` but for `Vite`, we are to use `pnpm run dev` or `pnpm dev` (_the starting script can be found in the `package.json `file_)
    - After running `pnpm run dev` or `pnpm dev` the development server for our application (`my-app`) is typically started and we can open our web app on our local machine, the same way we did in CRA, but this time, `vite` provides a different local host port. eg: localhost:5173.

## Complete Terminal Command
```sh
    pnpm create vite@latest
    # Enter project-name - my-test-app
    # choose framework - React
    
    # navigate to project
    cd my-test-app

    # install the project dependencies
    pnpm install # or npm install

    # run the project
    pnpm run dev # or pnpm dev
```

# Vite `my-app` Folder Structure
* Opening our project in VS Code, the folder structure of the app will appear as in the image below which is almost similar to the CRA folder structure:

    ![my-app Vite Folder Structure](/images/2023-07-20-vite-folder-structure.png)

* __NOTE__:
    - In Vite's folder structure, some files (which are not so-used files but can be added manually if need be) like the test files are not generated.
    - in CRA, JavaScript files have a `.js` file extension while using Vite, files have a `.jsx` extension.
    - Additionally, the entry point of any React application built with Vite is the `main.jsx` file which works the same as the `index.js` file in CRA

## Vite's `main.jsx` File
* Code in the `main.jsx` file

    ```jsx
        import React from 'react';
        import ReactDOM from 'react-dom/client';
        import App from './App.jsx';
        import './index.css'

        ReactDOM.createRoot(document.getElementById('root')).render(
            <React.StrictMode>
                <App />
            </React.StrictMode>
        );
    ```

* Why is this file being referred to as the _entry point of our application_?
    - After starting our development server, `pnpm run dev`, what happens under the hood is that, first, the `main.jsx` file imports a couple of libraries, which include the main ones which are `React` and `ReactDOM`. Both of these libraries are very critical in order for our `React` application to run. 
    - `React` library is kinda the underlying engine that does all of the work when it comes to how `React` functions as an application builder.
    - `ReactDOM` is related to the `DOM` which is the `Web DOM`.
    - Being that `React` is the engine that runs how these applications get built, `ReactDom` is specifying that the engine should be directed toward web-related applications. 
    - These two libraries combined is what allows us to build out all of our web application in `React`.

* __NOTE__:
  * We no longer need to import `React` and `ReactDOM` in our JavaScript files anymore. This is because when `React 17` was introduced, it has a new `JSX` transform feature that allows us to use `JSX` without importing `React` and `ReactDOM`. However, if one is using an older version of `React`, one still needs to import `React` and `ReactDOM`. Hence, we can do away with both lines of code in our `main.jsx` file since we are using the latest version of `React`:

      ```jsx
          import App from './App.jsx';
          import './index.css'

          ReactDOM.createRoot(document.getElementById('root')).render(
              <React.StrictMode>
                  <App />
              </React.StrictMode>
          );
      ```

* We also import `App` component from `App.jsx` file where the main component, __App component__ is rendered to the `DOM` when your app is loaded.

* We also import the `index.css` file which is the global stylesheet with our styles for our app at a global scope.

# How the Code Works
```jsx
    ReactDOM.createRoot(document.getElementById('root')).render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
```

* Explanation in a nutshell, "Leveraging the `ReactDOM` library, we want to render our `App` component `<App /> `and mount it in an `HTML` document element with the ID `'root'`." This is happening / the element with the ID of `'root'` is in the `index.html` file which is in the public directory.

    ```html
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <link rel="icon" type="image/svg+xml" href="/vite.svg" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Vite + React</title>
        </head>
        <body>

            <div id="root"></div> <!-- The HTML element with the root ID -->

            <script type="module" src="/src/main.jsx"></script>
        </body>
        </html>
    ```

* What is happening is that our entire `React` application, which we can also refer to as the __main App component__ is rendered into the `div` with the `root` ID. Hence, while in the browser, all the elements in other components or the `main App component` will be located in between this `div` with the `'root'` ID.

    ![rendering image]()

* To see this in practice, in case we add a new element below the root `div` element in our original project, (`my-test-app`) and run the development server:

    ```html
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <link rel="icon" type="image/svg+xml" href="/vite.svg" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Vite + React</title>
        </head>
        <body>

            <div id="root"></div> <!-- The HTML element with the root ID -->
            <h1>React Code outside the root</h1>
            <script type="module" src="/src/main.jsx"></script>
        </body>
        </html>
    ```

* In our browser developer tools, we then see that the h1 element was not rendered in between the root element but in the body tag and in its separate `h1` tag:
  
    ![]()

# The `<React.StrictMode>`
* The `<React.StrictMode>` is a useful development-only tool for identifying potential problems in a React application, especially during development and testing to identify potential problems in a React application.
* By wrapping the main App component of our application in React.StrictMode, we can get additional warnings and checks that can help us write more robust and maintainable React code. 
* It should however be used during development and removed in production builds. This is because the additional checks and warnings can add some overhead to the application, which can affect its performance.

# Using Stylesheet with `index.css` and `App.css` files
* The `index.css` file is the global stylesheet for our entire website that is used to hold basic styles for common elements or classes that are used in many different places in our application. E.g., _heading_ styles, _button_ styles, _body_ styles etc.

* This `index.css` file is then imported into the `main.jsx` file, the file that kick-starts our React application, then it is effectively injected into a style tag on the `HTML` page in the browser.

* The `App.css` file is a stylesheet for our `components`, where different `components` eg, _News Feed Component_ or _Navbar Component_ are styled. 
* Splitting our stylesheets into global and component-specific stylesheets makes it easier to manage our application especially as it starts to get larger and we start adding more and more components. Having one gigantic stylesheet may become messy and hard to update.

* However, it's worth noting that even component-specific styles are also kinda treated as global styles and hence are placed in the head of the `HTML` page as a style tag too so they can apply styles to anything or any component on the page.

# Using Images
* There are two ways how we can use images in our React application.
* Using `my-test-app` project, we can add images to the `public` directory and use them from there.
* __Note__: 
  * _anything placed in the public directory will be made public to the browser or is available at the root level of the domain._
* So if we place an image inside there, then we can just reference it in our image tags without the need of importing the image.

    ```jsx
        <img src="/vite.svg" className="logo" alt="Vite logo" />
    ```

* __Second Option__:
  * is using the `src` directory. We can create another directory (_however it already exists in our current Vite project_) known as `assets` where we can place all our images.
  * This is for easier management of our files in our `src` directory.
  * Files placed in the `src` directory have to be imported hence to use our images in our `JSX` files/components, we have to import them at the top.
  * We then use curly braces to refer to the image files in our image tags since we're outputting something dynamic.
  * In `React`, when we want to output dynamic content or expressions within our `JSX` code, we use curly braces `{ }` to enclose the dynamic content.

        ```jsx
            import reactLogo from './assets/react.svg'
            <img src={reactLogo} className="logo react" alt="React logo" />
        ```
  * _Remark_: _Which is better way to import images?_: 
    - There's no better method than the other, however, if one is using an image outside the scope of `React` which means somewhere else on the `HTML` page outside of the root element where the application is injected, or even when using site-wide images that might be used in many different places, one can use the `public` directory.
    - But for images that are used in specific components, one can use the `src` directory.

# `pnpm build` command
* Opening our `package.json` file, in the `scripts` section we have the following scripts:

    ```json
        "scripts": {
            "dev": "vite",
            "build": "vite build",
            "lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0",
            "preview": "vite preview"
        },
    ```

* The built script, `pnpm build`, is the script used to build our project and generate a set of optimized static assets that can be deployed to a web server.
* After running the `pnpm build` command in the terminal while in our projects directory, a `dist` directory will be generated with optimized files ready for deployment.
* The resulting assets after the build process is complete are ready for deployment and can be served by a web server or a cloud-based service.
