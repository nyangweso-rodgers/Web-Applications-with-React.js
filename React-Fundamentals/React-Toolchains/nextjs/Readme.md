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

# Navigation Between pages
* In `Next.js`, a `page` is a `React` `Component` exported from a file in the `pages/` directory.
* Pages are associated with a route based on their __file name__. For example, in development:
  * `pages/index.js` is associated with the `/` route
  * `pages/posts/first-post.js` is associated with the `/posts/first-post` route
* We already have the `pages/index.js` file, so let’s create `pages/posts/first-post.js` to see how it works.

# `Next.js` Project Structure
## `Next.js` Top-level Folders
1. `app` App router
2. `pages` Pages router
3. `public` Static assets to be served
4. `src` Optional application source folder

## `src/` Directory
* As an alternative to having the special Next.js `app/` or `pages/` directories in the root of your project, `Next.js` also supports the common pattern of placing application code under the `src` directory.
* This separates application code from project configuration files which mostly live in the root of a project, which is preferred by some individuals and teams.
* To use the `src` directory, move the `app` Router folder or `pages` Router folder to `src/app` or `src/pages` respectively.
## `Next.js` Top-level Files
1. `next.config.js` Configuration file for Next.js
2. `package.json`	Project dependencies and scripts
3. `jsconfig.json` Configuration file for JavaScript
4. `.gitignore`	Git files and folders to ignore
5. `package-lock.json`
6. `.estlintrc.json` Configuration file for ESLint


# Adding `bootstrap@5.1.3`
* Run the following command in the terminal:
    ```sh
        # install bootstrap
        npm install bootstrap@5.1.3
    ```
* Note:
  * Running the above command without specifying the version, `npm` will by default install the latest version of the `Bootstrap` package available in the npm registry. This behavior is true for all packages you install using `npm`, not just `Bootstrap`.
* Import `'bootstrap/dist/css/bootstrap.css'` to the `pages.js` file.