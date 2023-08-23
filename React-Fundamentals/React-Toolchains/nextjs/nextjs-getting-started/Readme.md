# `Next.js` getting started

## Table Of Contents
- [Further Reads]()
    1. [](https://nextjs.org/learn/foundations/from-react-to-nextjs/getting-started-with-nextjs)

# History of `NextJS`
* Released in Oct. 2016 by __Vercel__ with the goal of resolving the following drawbacks of `ReactJS`
    1. Performance issues
    2. Routing
    3. Server-side rendering
    4. SEO

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