# Building React Components using `Next.js`

## Table Of Contents

- [Further Reading]()
  1. [nextjs.org/docs](https://nextjs.org/docs)
  2. [nextjs.org/learn/foundation](https://nextjs.org/learn/foundations/about-nextjs)
  3. [Resolving "Built-in next/font" Error in Next.js](https://nextjs.org/docs/messages/built-in-next-font)
  4. [dev.to - How to build and deploy a modern-day Next.js application](https://dev.to/livecycle/how-to-build-and-deploy-a-modern-day-nextjs-application-mgn)
  5. [freeCodeCamp - How to Build a Full Stack App with Next.js 13 and Firebase](https://www.freecodecamp.org/news/create-full-stack-app-with-nextjs13-and-firebase/)

# Introduction to `Next.js` 13

- `Next.js` is a `React` Framework that enables:
  1. Server-side rendering (SSR)
  2. Additional server-side functionality
  3. An improved development and deployment toolchain
- You use `React` Components to build user interfaces, and `Next.js` for additional features and optimizations.
- By framework, we mean `Next.js` handles the tooling and configuration needed for `React`, and provides additional structure, features, and optimizations for your application.
- It's significant for web app development because it helps with things like:
  - page routing,
  - server-side rendering, and
  - quick loading times, which are critical for generating a great user experience.

# `Next.js` vs. `create-react-app`

- `create-react-app` does not easily help with generating server-side rendered apps.
- `Next.js` comes with speed, and SEO.

# Setup a `Next.js` 13 App

```sh
    # create a `my-test-app`
    npx create-next-app@latest my-test-app
    # move to the my-test-app directory
    cd my-test-app
    # start the server
    npm run dev
```

- Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# `Next.js` 13 Folder Structure

1. `node_modules/`
2. `public/`: Static assets to be served
3. `src/`: Optional application source folder

   - `app/`: App router
     - `app/layout.js`
     - `page.js`

4. `next.config.js` Configuration file for `Next.js`

   ```js
   /** @type {import('next').NextConfig} */
   const nextConfig = {};

   module.exports = nextConfig;
   ```

5. `package.json` Project dependencies and scripts
6. `jsconfig.json` Configuration file for JavaScript
7. `.gitignore` Git files and folders to ignore
8. `package-lock.json`
9. `.estlintrc.json` Configuration file for ESLint

- Remarks:

  - with `Next.js` 13, the file-based routing can be done from the `src/app` folder. Previously, the routing was done from the `pages/` folder instead.
  - To setup pages and routing from the `src/app` folder, we add a setting within the `next.config.js` file as follows:

    ```js
    /** @type {import('next').NextConfig} */
    const nextConfig = {
      experimental: {
        appDir: true,
      },
      reactStrictMode: true,
    };

    module.exports = nextConfig;
    ```

# Pages and Defining Routes

- within the `src/app` folder, we can define as many sub-folders as needed. E,g.,
  - `app/home`
  - `app/settings`
  - `app/settings/profile`
  - `app/settings/password`
  - `app/conference`
  - `app/conference/speakers`
  - `app/conference/session`
  - `app/blog`

# `Next.js` Pages

- Page is UI unique to a route
- A `page.js` file is required to make routes publicly accessible. This means that each new route folder needs a `page.js` file.
- Pages can fetch data, render server components by default but you can configure them to be a client component is needed.
- Pages also support extensions such as `jsx`, `js`, and `tsx`.
- To create pages:
  - Head to `src/app` folder and create the following sub-folders:
    - `src/app/home`
    - `src/app/settings`
    - `src/app/blog`
  - Then, create a `page.js` file inside the above folders

# Linking and Navigation using `Link` Component

- The `Link` Component can be imported from the `next/link`

# Layout in `Next.js`

- Layout is UI shared between multiple pages. On navigation, layouts preserve state and do not re-render.
- `src/app` directory requires a root layout, `src/app/layout.js`.
- Layouts defined inside a folder apply to specific route segments and render when these segments are active.

# `@next/font`

- `Next.js` 13 introduces a new font system, that provides you with easy access to all the fonts stored in [Google fonts](https://fonts.google.com/). These get downloaded when you build your app, so no requests get sent to Google client-side. This helps with speed and performance since the fonts get stored locally. `Next.js` also includes automatic optimization for fonts, similar to how it optimises images with its Image component.
- The `Next.js` Font Component comes in a separate package and is not part of the `Next.js` package itself.
- The package includes:
  - Built-in automatic self-hosting for any font file.
- i.e., @next/font will automatically optimize fonts and remove external requests for improved privacy and performance.
- With `Next.js` Font, you automatically self-host any [Google Font](https://fonts.google.com/) which are automatically included in the deployment and serve from the same domain as your deployment. So, no request is sent to Google by the browser.
- To get started, install:
  ```sh
      # install dependencies - install next/font
      npm install @next/font
  ```
- Then on the `src/app/layout.js` file, import the font package:

  ```js
  // layout.js
  import { Open_Sans } from "@next/font/google";

  const openSans = Open_Sans({
    subsets: ["latin"],
    weight: ["400"],
  });

  export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body className={openSans.className}>{children}</body>
      </html>
    );
  }
  ```

* **NOTE**:
  - Resolving **"Built-in next/font"** Error in `Next.js`
  - to resolve this error which typicaaly occurs when you are using the `@next/font` package in `Next.js` 13.2 and later.
  - `next/font` will automatically optimize your fonts (including custom fonts) and remove external network requests for improved privacy and performance.
  - From version 13.2 onward, `next/font` has been built into `Next.js`, making the `@next/font` package redundant. The `@next/font` package will be completely removed in `Next.js` 14.
  - To resolve this issue, you need to uninstall `@next/font` and replace all `@next/font `imports with `next/font` in your project. This can be done automatically using the `built-in-next-font` codemod:
    ```sh
        # uninstall @next/font and replace all @next/font imports with next/font
        npx @next/codemod built-in-next-font
    ```
  - you can then uninstall the `@next/font` from the `package.json`
    ```sh
      # uninstall @next/font
      npm uninstall @next/font
    ```

# Styling in `Next.js`

- `Next.js` supports different styling options such as:
  - CSS Modules
  - Tailwind CSS
  - global styles
  - CSS-in-JS

## CSS Module

- `Next.js` has a built-in support for CSS Modules which are identified using the extension, `.module.css`
- E.g., we can create a `header.module.css` with the following structure:

  ```css
  /* header.module.css */
  .speaker {
    font-size: 24px;
  }
  ```

  - we can then import the above css module directly into our `page.js` file

    ```js
    import styles from "./header.module.css";

    const Page = () => {
      return (
        <>
          <p className={styles.speaker}>Header</p>
        </>
      );
    };
    ```

  ```

  ```

## Global Styles in `Next.js` 13

- **CSS Modules** are useful for styling components.
- **Global Styles** can be used for CSS that needs to be loaded by every page.
- **NOTE**: the global styles can be imported into any layout, page, or component inside the `/app` directory.
- E.g.,
  ```css
  /* app/global.css */
  body {
    margin: 0 auto;
    max-width: 680px;
    padding: 20px 20px 60px;
  }
  ```
  - then import the `app/global.css` file into any of the pages
    ```js
    import "./global.css";
    ```

# Image in `Next.js` 13

- Directly import the Image component from the `Next.js` package via `next/image`.

# Rendering in `Next.js`

## Client Components

- **Client components** are rendered on the client. In `Next.js`, Client components can also be pre-rendered on the server and hydrated on the client.
- To use Client component, you would create a file inside the `/app` folder and add the `'use client'` directive to the top of the file. This should be before any imports are added.

  ```js
      // app/Counter.js
      'use client';

      import { useState } from 'react';

      const Page =() => {
          return ()
      };
  ```

- You only need to mark components as `'use client'` when they use client hooks such as `useState` or `useEffect`.
- Other components that do not depend on client hooks can be automatically rendered as **Server Components**, without `'use client'`
- In summary, use Client Components when:
  - Use React Hooks such as `useState`, `useEffect`, `useReducer`, e.t.c.,
  - Interactivity within the componentm with event listeners like `onClick()`
  - Use custom hooks that depend on client state, effects.

## Server Components

- **Server Components**: all components inside the `/app` directory are server components by default. You can choose to use a **client component** instead by specifying it explicitly.
- **Server components** allow you to render components on the server and reduce the amount of `js` sent to the client.
- User **Server components** when:
  - Fetching data
  - Soring sensitive information on server (tokens, API keys, etc.)
  - access backend resources directly.
  - keep large dependencies on the server

# Data Fetching in `Next.js`

- Data fetching in `Next.js` can be done on a page-by-page basis.
- The default data fetching in `Next.js` is called **static data fetching** also known as **static site generation**.

  - In this approach, data is fetched at build time once then cached. The cached data is then reused on every request.
  - This is a good technique to use for pages that do not change often within your website e.g., blog posts page, it can always be fetched from the cached.
  - This boosts performance to some extent since the pages are now static and the content are retrieved from the cache instead.
  - This method ensures that the load on the database is reduced by minimizing the number of requests.

- Another data fetching method in `Next.js` is called **Incremental Static Regeneration** (ISR).

  - In this approach, data is fetched and cached which is then reused on each request until it reaches a specific internal of time.
  - This method is useful if the data changes and you want to ensure the application shows the latest version without having to rebuild the application.

- Final approach of data fetching in `Next.js` is called **Dynamic Data Fetching** or **Server-Side Rendering**
  - In this method, the data is fetched on each request.
  - Dynamic data changes often and could be specific to users like a shopping cart.

## Fetch in `Next.js`

# Deploy `Next.js` App on Vercel

- The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.
- Check out [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details on deployment.