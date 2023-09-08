# `Next.js` Toolchain

## Table Of Contents
- [Further Reading]()
    1. [nextjs.org/docs](https://nextjs.org/docs)
    2. [nextjs.org/learn/foundation](https://nextjs.org/learn/foundations/about-nextjs)
    3. [dev.to - How to build and deploy a modern-day Next.js application](https://dev.to/livecycle/how-to-build-and-deploy-a-modern-day-nextjs-application-mgn)
    4. [freeCodeCamp - How to Build a Full Stack App with Next.js 13 and Firebase](https://www.freecodecamp.org/news/create-full-stack-app-with-nextjs13-and-firebase/)

# Introduction to `Next.js`
* `Next.js` is a `React` Framework that enables:
    1. Server-side rendering (SSR)
    2. Additional server-side functionality
    3. An improved development and deployment toolchain
* You use `React` Components to build user interfaces, and `Next.js` for additional features and optimizations.
* By framework, we mean `Next.js` handles the tooling and configuration needed for `React`, and provides additional structure, features, and optimizations for your application.

* It's significant for web app development because it helps with things like:
  * page routing, 
  * server-side rendering, and 
  * quick loading times, which are critical for generating a great user experience.

# `Next.js` vs. `create-react-app`
* `create-react-app` does not easily help with generating server-side rendered apps.
* `Next.js` comes with speed, and SEO.


# Routing
## `app` Router
* In version 13, `Next.js` introduced a new __App Router__ which supports:
  * shared layouts, 
  * nested routing, 
  * loading states, 
  * error handling, and more.

* The __App Router__ works in a new directory named `app`. 

* Remarks:
  * Roles of Folders and Files:
    * __Folders__ are used to define routes. A route is a single path of nested folders, following the file-system hierarchy from the root folder down to a final leaf folder that includes a `page.js` file.
    * __Files__ are used to create UI that is shown for a route segment


# Setup: Create `Next.js` App
```sh
    # create a `my-test-app`
    npx create-next-app@latest my-test-app
    # move to the my-test-app directory
    cd my-test-app
    # start the server
    npm run dev
```
* Editing the Page:
  * While the `Next.js` development server is running, 
  * open `src/app/page.js` and modify any of the `html` element to see the changes.

# `Next.js` Project Folder Structure
1. `node_modules/`
2. `public/`: Static assets to be served
   
3. `src/`: Optional application source folder
   * `app/`: App router
     * `app/layout.js`
     * `page.js`

4. `next.config.js` Configuration file for Next.js
5. `package.json`	Project dependencies and scripts
6. `jsconfig.json` Configuration file for JavaScript
7. `.gitignore`	Git files and folders to ignore
8. `package-lock.json`
9.  `.estlintrc.json` Configuration file for ESLint

# Absolute imports in `Next.js`
* Wouldn’t it be great if we could avoid relative paths in imports, in our React components in `Next.js`?
* So, instead of:
    ```js
      import Home from '../../components/Home';
    ```
  we could just write
  ```js
    import Home from 'components/Home';
  ```
* This is possible, and it’s called __absolute imports__.
* Just add `jsconfig.json` file in the root of your project with this content:
  ```js
    // jsconfig.json
    {
      "compilerOptions": {
        "baseUrl": "."
      }
    }
  ```


# Navigation Between pages
## `Link` Component
* In `Next.js`, we use `Link` Component `next/link` to link between pages in an a application.
* `<Link>` allows you to do client-side navigation and accepts `props` that give you better control over the navigation behavior.
* To use `<Link>`:
  * import the `Link` component from `next/link`

## Dynamic content with the `next/router` package
* The __router__ is a library provided by `Next.js`.
* We import it from `next/router`:
    ```js
      // 
      import { useRouter } 'next/router'
    ```
* and once we have `useRouter`, we instantiate the router object using:
    ```js
      // 
      const router = useRouter();
    ```
* Once we have this router object, we can extract information from it.