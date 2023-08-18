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
# History of `NextJS`
* Released in Oct. 2016 by __Vercel__ with the goal of resolving the following drawbacks of `ReactJS`
    1. Performance issues
    2. Routing
    3. Server-side rendering
    4. SEO

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
# Setup
```sh
    # create a `my-test-app`
    npx create-next-app@latest my-test-app
    # move to the my-test-app directory
    cd my-test-app
    # start the server
    npm run dev
```

# Setup Settings
1. Would you like to use `TypeScript` with this project? … No / Yes
2. Would you like to use `ESLint` with this project? … No / Yes
3. Would you like to use `Tailwind CSS` with this project? … No / Yes
4. Would you like to use `src/` directory with this project? … No / Yes
5. Use `App Router` (recommended)? … No / Yes
6. Would you like to customize the default import alias? … No / Yes

# `NextJS` Toolchain Folder Structure
![]()

# `NextJS` Folder File(s)

## Root Files
### Root File 1: `package.json`
```json
    {
    "name": "my-test-app",
    "version": "0.1.0",
    "private": true,
    "scripts": {
        "dev": "next dev",
        "build": "next build",
        "start": "next start",
        "lint": "next lint"
    },
    "dependencies": {
        "eslint": "8.47.0",
        "eslint-config-next": "13.4.16",
        "next": "13.4.16",
        "react": "18.2.0",
        "react-dom": "18.2.0"
    }
    }
```
### Root File 2: `jsconfig.json`
```json
    {
        "compilerOptions": {
            "paths": {
            "@/*": ["./src/*"]
            }
        }
    }
```

### Root File 3: `next.config.js`
```js
    /** @type {import('next').NextConfig} */
    const nextConfig = {
    reactStrictMode: true,
    }

    module.exports = nextConfig
```

### Root File 4: `package-lock.json`

### Root File 5: `.gitignore`
### Root File 6: `.estlintrc.json`
```json
    {
    "extends": "next/core-web-vitals"
    }
```


# Root Folders
## Root Folder 1: `node_modules/`
## Root Folder 2: `public/`
## Root Folder 3: `src/`
### `src/pages`
### `src/pages/_app.js`
### `src/pages/_document.js`
### `src/pages/index.js`
### `src/pages/api/`
### `src/pages/api/hello.js`



#### `src/styles`