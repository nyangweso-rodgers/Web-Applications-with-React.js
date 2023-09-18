# `Next.js` Toolchain

## Table Of Contents
1. [dev.to - How to build and deploy a modern-day Next.js application](https://dev.to/livecycle/how-to-build-and-deploy-a-modern-day-nextjs-application-mgn)
2. [freeCodeCamp - How to Build a Full Stack App with Next.js 13 and Firebase](https://www.freecodecamp.org/news/create-full-stack-app-with-nextjs13-and-firebase/)





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