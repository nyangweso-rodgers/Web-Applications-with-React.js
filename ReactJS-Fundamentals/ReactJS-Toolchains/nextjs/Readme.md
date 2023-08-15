# `NextJS` Toolchain

## Table Of Contents
- [Further Reading]()
    1. [dev.to - How to build and deploy a modern-day Next.js application](https://dev.to/livecycle/how-to-build-and-deploy-a-modern-day-nextjs-application-mgn)
    2. [freeCodeCamp - How to Build a Full Stack App with Next.js 13 and Firebase](https://www.freecodecamp.org/news/create-full-stack-app-with-nextjs13-and-firebase/)

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

* It's significant for web app development because it helps with things like:
  * page routing, 
  * server-side rendering, and 
  * quick loading times, which are critical for generating a great user experience.

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