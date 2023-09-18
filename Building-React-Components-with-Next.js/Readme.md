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

4. `next.config.js` Configuration file for `Next.js`
    ```js
        /** @type {import('next').NextConfig} */
        const nextConfig = {}

        module.exports = nextConfig
    ```
5. `package.json`	Project dependencies and scripts
6. `jsconfig.json` Configuration file for JavaScript
7. `.gitignore`	Git files and folders to ignore
8. `package-lock.json`
9.  `.estlintrc.json` Configuration file for ESLint

* Remarks:
    * with `Next.js` 13, the file-based routing can be done from  the `src/app` folder. Previously, the routing was done from the `pages/`  folder instead.
    * To setup pages and routing from the `src/app` folder, we add a setting within the `next.config.js` file as follows:
        ```js
            /** @type {import('next').NextConfig} */
                const nextConfig = {
                    experimental: {
                        appDir: true
                    },
                    reactStrictMode: true,
                };

                module.exports = nextConfig
        ```


# Pages and Defining Routes
* within the `src/app` folder, we can define as many sub-folders as needed. E,g.,
  * `app/home`
  * `app/settings`
  * `app/settings/profile`
  * `app/settings/password`
  * `app/conference`
  * `app/conference/speakers`
  * `app/conference/session`
  * `app/blog`

# `Next.js` Pages
* Page is UI unique to a route
* A `page.js` file is required to make routes publicly accessible. This means that each new route folder  needs a `page.js` file.
* Pages can fetch data, render server components by default but you can configure them to be a client component is needed.
* Pages also support extensions such as `jsx`, `js`, and `tsx`.
* To create pages:
  * Head to `src/app` folder and create the following sub-folders:
    * `src/app/home`
    * `src/app/settings`
    * `src/app/blog`
  * Then, create a `page.js` file inside the above folders

# Linking and Navigation using `Link` Component
* The `Link` Component can be imported from the `next/link`

# Layout in `Next.js`
* Layout is UI shared between multiple pages. On navigation, layouts preserve state and do not re-render.
* `src/app` directory requires a root layout, `src/app/layout.js`.
* Layouts defined inside a folder apply to specific route segments and render when these segments are active.