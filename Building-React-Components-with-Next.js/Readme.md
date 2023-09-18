# Building React Components using `Next.js`

## Table Of Contents
- [Further Reading]()
    1. [nextjs.org/docs](https://nextjs.org/docs)
    2. [nextjs.org/learn/foundation](https://nextjs.org/learn/foundations/about-nextjs)

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

# Setup a `Next.js` 13 App
```sh
    # create a `my-test-app`
    npx create-next-app@latest my-test-app
    # move to the my-test-app directory
    cd my-test-app
    # start the server
    npm run dev
```

# `Next.js` 13 Folder Structure
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