# `Next.js` Toolchain

## Table Of Contents
- [Further Reading]()
    1. [nextjs.org/docs](https://nextjs.org/docs)
    2. [nextjs.org/learn/foundation](https://nextjs.org/learn/foundations/about-nextjs)
    3. [dev.to - How to build and deploy a modern-day Next.js application](https://dev.to/livecycle/how-to-build-and-deploy-a-modern-day-nextjs-application-mgn)
    4. [freeCodeCamp - How to Build a Full Stack App with Next.js 13 and Firebase](https://www.freecodecamp.org/news/create-full-stack-app-with-nextjs13-and-firebase/)

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