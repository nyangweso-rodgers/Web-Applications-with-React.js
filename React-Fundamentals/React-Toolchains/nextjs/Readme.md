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


# Routing
## `app` Router
* In version 13, `Next.js` introduced a new __App Router__ which supports:
  * shared layouts, 
  * nested routing, 
  * loading states, 
  * error handling, and more.

* The __App Router__ works in a new directory named `app`. The `app` directory works alongside the `pages` directory to allow for incremental adoption.
* By default, components inside `app` are [React Server Components](https://nextjs.org/docs/getting-started/react-essentials). This is a performance optimization and allows you to easily adopt them, and you can also use [Client Components](https://nextjs.org/docs/getting-started/react-essentials).

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

# Folder Structure
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

# Pages and Layouts
## `src/app/page.js` and `src/app/layout.js`
* The `App Router` inside `Next.js` 13 introduced new file conventions to easily create [pages](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts?utm_source=hashnode&utm_medium=hashnode+rix&utm_campaign=rix_chatbot_answer#pages), [shared layouts](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts?utm_source=hashnode&utm_medium=hashnode+rix&utm_campaign=rix_chatbot_answer#layouts), and [templates](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts?utm_source=hashnode&utm_medium=hashnode+rix&utm_campaign=rix_chatbot_answer#templates). 
## `src/app/page.js`
* A __page__ is a UI unique to a route.
* You can define __pages__ by exporting a component from a `page.js` file.
* Example:
    ```js
      // page.js
      const Page = () => {
        return (
          <div>
            <h1>Home page!</h1>
          </div>
        )
      }

      export default Page;
    ```
    * This page will be served at the `/` route.
    * `Next.js` will automatically map `page.js` files to routes, based on the file and folder structure.
* Remarks:
  * `.js`, `.jsx` or `.tsx` file extensions can be used for __Pages__.
  * A `page.js` file is required to make a route segment publicly accessible.


## `src/app/layout.js`
* A __layout__ is UI that is shared between multiple __pages__.
* On navigation, __layouts__ preserve state, remain interactive, and do not re-render.
* It accepts a children `prop` that will contain either a child layout or a page component.
* Example:
  * Define a layout:
    ```js
      // layout.js
      const Layout = () => {
        return (
          <div>
            {/* Header */}
            <header>....</header>

            {children}

            {/* Footer */}
            <footer>.....</footer>
          </div>
        )
      };

      export default Layout;
    ```
  * This Layout can then be used by any __page__:
    ```js
      // 
      import Layout from '../layout';

      const Page = () => {
        return (
          <Layout>
            {/* Page content */}
          </Layout>
        )
      }

      export default Page;
    ```
* Layouts are useful for defining shared headers, footers, sidebar and other common UI.

# Navigation Between pages
* In `Next.js`, a `page` is a `React` `Component` exported from a file in the `pages/` directory.
* Pages are associated with a route based on their __file name__. For example, in development:
  * `pages/index.js` is associated with the `/` route
  * `pages/posts/first-post.js` is associated with the `/posts/first-post` route
* We already have the `pages/index.js` file, so let’s create `pages/posts/first-post.js` to see how it works.