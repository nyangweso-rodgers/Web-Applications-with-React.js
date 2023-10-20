# `Next.js` getting started

## Table Of Contents
- [Further Reads]()
    1. [](https://nextjs.org/learn/foundations/from-react-to-nextjs/getting-started-with-nextjs)

# History of `NextJS`
* Released in Oct. 2016 by __Vercel__ with the goal of resolving the following drawbacks of `React.js`
    1. Performance issues
    2. Routing
    3. Server-side rendering
    4. SEO

# How `Next.js` Works
## How `Next.js` Works 1: `Next.js` Compiler
* `Next.js` handles code transformations and underlying infrastructure to make it easier for your application to go to production.
* This is made possible because `Next.js` has a __compiler__ written in [Rust](), a low-level programming language, and SWC, a platform that can be used for compilation, minification, bundling, and more.
* __Compiling__ refers to the process of taking code in one language and outputting it in another language or another version of that language.
* In `Next.js`, compilation happens during the development stage as you edit your code, and as part of the build step to prepare your application for production.

## How `Next.js` Works 2: Minifying
* __Minification__ is the process of removing unnecessary code formatting and comments without changing the code’s functionality. The goal is to improve the application’s performance by decreasing file sizes.
* In `Next.js`, JavaScript and CSS files are automatically minified for production.

## How `Next.js` Works 3: Bundling
* Developers break up their application into modules, components, and functions that can be used to build larger pieces of their application. Exporting and importing these internal modules, as well as external third-party packages, creates a complex web of file dependencies.
* __Bundling__ is the process of resolving the web of dependencies and merging (or ‘packaging’) the files (or modules) into optimized bundles for the browser, with the goal of reducing the number of requests for files when a user visits a web page.

## How `Next.js` Works 4: Code Splitting
* Developers usually split their applications into multiple pages that can be accessed from different URLs. Each of these pages becomes a unique __entry point__ into the application.
* __Code-splitting__ is the process of splitting the application’s bundle into smaller chunks required by each entry point. The goal is to improve the application's initial load time by only loading the code required to run that page.
* `Next.js` has built-in support for code splitting. Each file inside your `pages/` directory will be automatically code split into its own `JavaScript` bundle during the build step.
* Further:
    * Any code shared between `pages` is also split into another bundle to avoid re-downloading the same code on further navigation.

# Rendering in `Next.js`
* This process of converting `React` into the `HTML` is called __rendering__.
* __Rendering__ can take place on the __server__ or on the __client__. It can happen either __ahead of time at build time__, or on __every request at runtime__.
* With `Next.js`, three types of rendering methods are available: 
  1. Server-Side Rendering, 
  2. Static Site Generation, and 
  3. Client-Side Rendering.

## Rendering in `Next.js` 1: Pre-Rendering
* __Server-Side Rendering__ and __Static Site Generation__ are also referred to as __Pre-Rendering__ because the fetching of external data and transformation of `React` components into `HTML` happens before the result is sent to the client.

* `Next.js` pre-renders every page by default. Pre-rendering means the HTML is generated in advance, on a server, instead of having it all done by `JavaScript` on the user's device.

* With __server-side rendering__, the `HTML` of the page is generated on a server for each request. The generated `HTML`, `JSON` data, and `JavaScript` instructions to make the page interactive are then sent to the client.
* On the client, the `HTML` is used to show a fast non-interactive page, while `React` uses the `JSON` data and `JavaScript` instructions to make components interactive (for example, attaching event handlers to a button). This process is called __hydration__.
* In `Next.js`, you can opt to __server-side render__ pages by using [getServerSideProps](https://nextjs.org/docs/pages/building-your-application/data-fetching/get-server-side-props)

* With __Static Site Generation__, the `HTML` is generated on the server, but unlike __server-side rendering__, there is no server at runtime. Instead, content is generated once, at build time, when the application is deployed, and the `HTML` is stored in a [CDN](https://nextjs.org/learn/foundations/how-nextjs-works/cdns-and-edge) and re-used for each request.

## Rendering in `Next.js` 2: Client-side rendering
* In a standard `React` application, the browser receives an empty `HTML` shell from the server along with the `JavaScript` instructions to construct the UI. This is called __client-side rendering__ because the initial rendering work happens on the user's device.

* __Note__: 
  * You can opt to use __client-side rendering__ for specific components in your `Next.js` application by choosing to fetch data with React’s `useEffect()` or a data fetching hook such as [useSWR](https://swr.vercel.app/).


# Manual Installation of `Next.js`
* To add `Next.js` to your project, you will not need to load the `react` and `react-dom` scripts from [unpkg.com](https://unpkg.com/) anymore. Instead, you can install these packages locally using the `npm`.
* create a new file, `package.json` with an empty object `{}`
* run `npm install react react-dom next`. Once the installation is complete, you should be able to see your project dependencies listed inside your `package.json` file:

    ```json
        // package.json
        {
        "dependencies": {
            "next": "^13.4.18",
            "react": "^18.2.0",
            "react-dom": "^18.2.0"
        }
        }
    ```
* You will also notice a new folder, `node_modules` that contains the actual files of our dependencies.

# Getting Started
* Recall the following `index.html` with `React`,
    ```html
        <!DOCTYPE html>

        <html>
            <head>
                <meta charset="utf-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <title></title>
                <meta name="description" content="">
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <link rel="stylesheet" href="">
            </head>
            <body>
                <div id="app"></div>

                <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
                <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>

                <!-- Babel Script -->
                <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>


                <script type="text/jsx">
                    const app = document.getElementById('app');
                    function Header(props) {
                        return (
                            <>
                                <h1>{props.title}</h1>
                            </>
                        )
                    }

                    function HomePage() {
                        const names = ['Rodgers', 'Omondi', 'Nyangweso']
                        function handleClick() {
                            console.log("Something, something")
                        }
                        return (
                            <>
                                <div>
                                    <Header title="Rodgers Nyangweso" />
                                    <ul>
                                        {names.map((name) => (
                                            <li key={name}>{name}</li>
                                        ))}
                                    </ul>
                                </div>
                                <button onClick={handleClick}>Like</button>
                            </>
                        )
                    }
                    ReactDOM.render(<HomePage />, app)
                </script>
            </body>
        </html>
    ```
* in the above file, we can delete the following codes:
  * `react` and `react-dom` scripts since you’ve installed them with `NPM`.
  * `<html>` and `<body>` tags because Next.js will create these for you.
  * The code that interacts with `app` element and `ReactDom.render()` method.
  * The `Babel` script because `Next.js` has a compiler that transforms `JSX` into valid `JavaScript` browsers can understand.
  * The `<script type="text/jsx">` tag.
  * The `React.` part of the `React.useState(0)` function

* After deleting the lines above, add `import { useState } from "react"` to the top of your file. Your code should look like this:
    ```js
        // index.html
        import { useState } from 'react';
        <div id="app"></div>
            const app = document.getElementById('app');
            function Header(props) {
                return (
                    <>
                        <h1>{props.title}</h1>
                    </>
                )
            }

            function HomePage() {
                const names = ['Rodgers', 'Omondi', 'Nyangweso']
                function handleClick() {
                    console.log("Something, something")
                }
                return (
                    <>
                        <div>
                            <Header title="Rodgers Nyangweso" />
                            <ul>
                                {names.map((name) => (
                                    <li key={name}>{name}</li>
                                ))}
                            </ul>
                        </div>
                        <button onClick={handleClick}>Like ({likes})</button>
                    </>
                )
            }
    ```
* The only code left in the `HTML` file is `JSX`, so you can change the file type from `.html `to `.js` or `.jsx`.
* Now, there are three more things you need to do to fully transition to a `Next.js` app:
    1. Move the `index.js` file to a new folder called `pages`.
    2. Add default export to your main React component to help `Next.js `distinguish which component to render as the main component of this page.

        ```js
            export default function HomePage() {

            }
        ```
    3. Add a script to your `package.json` file to run the `Next.js` development server while you develop.

        ```json
            {
                "scripts":  {
                    "dev": "next dev"
                },
                //"dependencies": {
                //"next": "^13.4.18",
                //"react": "^18.2.0",
                //"react-dom": "^18.2.0"
                //}
            }
        ```
## Running the development server
* To confirm everything works, you can view your app by running `npm run dev` inside your terminal and navigating to [localhost:3000](http://localhost:3000/) in the browser. Then, make a small change to the code and save it.

    ```sh
        # run the development server
        npm run dev
    ```