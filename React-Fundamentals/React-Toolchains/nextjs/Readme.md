# `Next.js` Toolchain

## Table Of Contents
- [Further Reading]()
    1. [nextjs.org/docs](https://nextjs.org/docs)
    2. [nextjs.org/learn/foundation](https://nextjs.org/learn/foundations/about-nextjs)
    3. [dev.to - How to build and deploy a modern-day Next.js application](https://dev.to/livecycle/how-to-build-and-deploy-a-modern-day-nextjs-application-mgn)
    4. [freeCodeCamp - How to Build a Full Stack App with Next.js 13 and Firebase](https://www.freecodecamp.org/news/create-full-stack-app-with-nextjs13-and-firebase/)

# 9 Building Blocks of a Web Application
* There are a few things you need to consider when building modern applications. Such as:
    1. __UI__: how users will consume and interact with your application.
    2. __Routing__ - how users navigate between different parts of your application.
    3. __Data Fetching__ - where your data lives and how to get it.
    4. __Rendering__ - when and where you render static or dynamic content.
    5. __Integrations__ - what third-party services you use (CMS, auth, payments, etc) and how you connect to them.
    6. __Infrastructure__ - where you deploy, store, and run your application code (Serverless, CDN, Edge, etc).
    7. __Performance__ - how to optimize your application for end-users.
    8. __Scalability__ - how your application adapts as your team, data, and traffic grow.
    9. __Developer Experience__ - your team’s experience building and maintaining your application.

# Introduction to `NextJS`
* `NextJS` is a `React` Framework that enables:
    1. Server-side rendering (SSR)
    2. Additional server-side functionality
    3. An improved development and deployment toolchain
* You use `React` Components to build user interfaces, and `Next.js` for additional features and optimizations.
* By framework, we mean `Next.js` handles the tooling and configuration needed for `React`, and provides additional structure, features, and optimizations for your application.

* It's significant for web app development because it helps with things like:
  * page routing, 
  * server-side rendering, and 
  * quick loading times, which are critical for generating a great user experience.

# How `Next.js` Works
## How `Next.js` Works: `Next.js` Compiler
* `Next.js` handles code transformations and underlying infrastructure to make it easier for your application to go to production.
* This is made possible because `Next.js` has a __compiler__ written in [Rust](), a low-level programming language, and SWC, a platform that can be used for compilation, minification, bundling, and more.
* __Compiling__ refers to the process of taking code in one language and outputting it in another language or another version of that language.
* In `Next.js`, compilation happens during the development stage as you edit your code, and as part of the build step to prepare your application for production.

## How `Next.js` Works: Minifying
* __Minification__ is the process of removing unnecessary code formatting and comments without changing the code’s functionality. The goal is to improve the application’s performance by decreasing file sizes.
* In `Next.js`, JavaScript and CSS files are automatically minified for production.

## How `Next.js` Works: Bundling
* Developers break up their application into modules, components, and functions that can be used to build larger pieces of their application. Exporting and importing these internal modules, as well as external third-party packages, creates a complex web of file dependencies.
* __Bundling__ is the process of resolving the web of dependencies and merging (or ‘packaging’) the files (or modules) into optimized bundles for the browser, with the goal of reducing the number of requests for files when a user visits a web page.

## How `Next.js` Works: Code Splitting
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

## Rendering in `Next.js`: Pre-Rendering
* __Server-Side Rendering__ and __Static Site Generation__ are also referred to as __Pre-Rendering__ because the fetching of external data and transformation of `React` components into `HTML` happens before the result is sent to the client.

* `Next.js` pre-renders every page by default. Pre-rendering means the HTML is generated in advance, on a server, instead of having it all done by `JavaScript` on the user's device.

* With __server-side rendering__, the `HTML` of the page is generated on a server for each request. The generated `HTML`, `JSON` data, and `JavaScript` instructions to make the page interactive are then sent to the client.
* On the client, the `HTML` is used to show a fast non-interactive page, while `React` uses the `JSON` data and `JavaScript` instructions to make components interactive (for example, attaching event handlers to a button). This process is called __hydration__.
* In `Next.js`, you can opt to __server-side render__ pages by using [getServerSideProps](https://nextjs.org/docs/pages/building-your-application/data-fetching/get-server-side-props)

* With __Static Site Generation__, the `HTML` is generated on the server, but unlike __server-side rendering__, there is no server at runtime. Instead, content is generated once, at build time, when the application is deployed, and the `HTML` is stored in a [CDN](https://nextjs.org/learn/foundations/how-nextjs-works/cdns-and-edge) and re-used for each request.

## Rendering in `Next.js`: Client-side rendering
* In a standard `React` application, the browser receives an empty `HTML` shell from the server along with the `JavaScript` instructions to construct the UI. This is called __client-side rendering__ because the initial rendering work happens on the user's device.

* __Note__: 
  * You can opt to use __client-side rendering__ for specific components in your `Next.js` application by choosing to fetch data with React’s `useEffect()` or a data fetching hook such as [useSWR](https://swr.vercel.app/).

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


# Requirements: Adding `bootstrap@5.1.3`
* Run the following command in the terminal:
    ```sh
        # install bootstrap
        npm install bootstrap@5.1.3
    ```
* Import `bootstrap.css` to the `pages.js` file.
  ```js
    // pages.js
    // import bootstrap to pages.js
    import 'bootstrap/dist/css/bootstrap.css';
  ```
* Note:
  * Running the above command without specifying the version, `npm` will by default install the latest version of the `Bootstrap` package available in the npm registry. This behavior is true for all packages you install using `npm`, not just `Bootstrap`.

# Requirements: Adding Google Fonts
* Check the [Google font](https://fonts.google.com/) and choose the best for your project.
## next/font
* `Next.js` 13 introduces a new font system, that provides you with easy access to all the fonts stored in [Google fonts](https://fonts.google.com/). These get downloaded when you build your app, so no requests get sent to Google client-side. This helps with speed and performance since the fonts get stored locally. `Next.js` also includes automatic optimization for fonts, similar to how it optimises images with its Image component.
  
* Installation with `npm`:
    ```sh
      # install next/font
      npm install @next/font
    ```
* Now you can import any fonts from Google fonts inside the `src/layout.js` file:
    ```js
      // import '@next/font 
      import { Trirong } from '@next/font/google';
    ```
* Now, on the `src/layout.js` file
  ```js
      import './globals.css'
      import { Trirong } from 'next/font/google'

      const trirong = Trirong({ 
        subsets: ['latin'],
        weight: ['300']
      })


      export default function RootLayout({ children }) {
        return (
          <html lang="en">
            <body className={trirong.className}>{children}</body>
          </html>
        )
      }
  ```
