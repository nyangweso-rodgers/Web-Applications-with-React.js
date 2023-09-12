# Project: Designing Components with `Next.js`

## Table Of Contents
- [Requirements](#requirements)
    1. [Requirements 1: Adding `bootstrap@5.1.3`]()
    2. [Requirements 2: Adding Google Fonts]()
    3. [Requirements 3: Adding Font Awesome]()
    4. 

- [Further Reading]()
    1. [Learn Next.js](https://nextjs.org/learn)
    2. [Resolving "Built-in next/font" Error in Next.js](https://nextjs.org/docs/messages/built-in-next-font)
    3. [nextjs.org/deoc/app - Font Optimization](https://nextjs.org/docs/app/building-your-application/optimizing/fonts)
    4. [YouTube - Using Fonts in Next.js (Google Fonts, Local Fonts, Tailwind CSS)](https://www.youtube.com/watch?v=L8_98i_bMMA)
    5. [Font Awesome - Use React with Font Awesome](https://fontawesome.com/docs/web/use-with/react/use-with)


# Setting Development Environment
```sh
    # create a `my-test-app`
    npx create-next-app@latest my-components-with-nextjs
    # move to the my-test-app directory
    cd my-test-app
    # start the server
    npm run dev # or
    yarn dev # or
    pnpm dev
```
* Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
* You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.
* This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

# Folder Structure
*  The original folder structure looks like this:
   * `node_modules/`
   * `public/`
     * next.svg
     * vercel.svg
   * `src/`
     * `app/`
       * favicon.ico
       * globals.css
       * layout.js
       * page.js
       * page.module.css
   * `.eslintrc.json`
   * `jsonconfig.json`
   * `next.config.js`
   * `package-lock.json`
   * `package.json`
   * `README.md`
 * We modify the structure as follows:
   * create `components/` inside the `src/app/` directory

# Requirements
## Requirements 1: Adding `bootstrap@5.1.3`
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

## Requirements 2: Adding Google Fonts
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
* __NOTE__:
  * Resolving __"Built-in next/font"__ Error in `Next.js`
  * to resolve this error which typicaaly occurs when you are using the `@next/font` package in `Next.js` 13.2 and later.
  * `next/font` will automatically optimize your fonts (including custom fonts) and remove external network requests for improved privacy and performance.
  * From version 13.2 onward, `next/font` has been built into `Next.js`, making the `@next/font` package redundant. The `@next/font` package will be completely removed in `Next.js` 14.
  * To resolve this issue, you need to uninstall `@next/font` and replace all `@next/font `imports with `next/font` in your project. This can be done automatically using the `built-in-next-font` codemod:
    ```sh
        # uninstall @next/font and replace all @next/font imports with next/font 
        npx @next/codemod built-in-next-font 
    ```
  * you can then uninstall the `@next/font` from the `package.json`
    ```sh
      # uninstall @next/font
      npm uninstall @next/font
    ```

## Requirements 3: Adding Font Awesome
* [Font Awesome](https://fontawesome.com/) is an icon's library and toolkit.
* Run the following command in the terminal to install Font Awesome to `Next.js`
    ```sh
        # install Font Awesome
        # npm uninstall @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome
        npm install --save-dev @fortawesome/fontawesome-free
    ```
* Head to `package.json` file, you will see the following dependencies has added:
    ```json
      // package.json file
      {
        "devDependencies": {
          "@fortawesome/fontawesome-free": "^6.4.2"
        }
      }
    ```
* `Next.js` allows you to import `CSS` directly in `.js` files. It handles optimization and all the necessary Webpack configuration to make this work.
* Import the following, on the `app.js` file:
    ```js
      // app.js
      import '@fortawesome/fontawesome-free/css/all.min.css';
    ```
* Usage:
    ```js
      const Home = () => {
        return (
          <div>
            <h1>
              <span className="fab fa-twitter fa-2x text-decoration-none"></span>
              Header
            </h1>
          </div>
        )
      };
    ```
* Remark:
  * you can also use the [react-fontawesome](https://www.npmjs.com/package/react-fontawesome) icon library.
  * from the `npm` install
    ```sh
      # From the NPM page, just install via npm
      npm install --save react-fontawesome
    ```


# Styling Components in React with `Next.js`





# Link Component
* When linking between pages on websites, you use the `<a>` HTML tag.
* In `Next.js`, you can use the __Link__ Component [next/link](https://nextjs.org/docs/pages/api-reference/components/link) to link between pages in your application.
* `<Link>` allows you to do client-side navigation and accepts __props__ that give you better control over the navigation behavior.
* Example:
  * consider `posts` directory with the following files:
    - `posts/index.js`
    - `posts/about.js`
    - `posts/blog/[slug].js`
  * we can have a link to each of these pages like this:
    ```js
      import Link from 'next/link';

      const Home = () => {
        return (
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About us</Link>
            </li>
            <li>
              <Link href="/blog/hello-world">Blog post</Link>
            </li>
          </ul>
        )
      }
      export default Home;
    ```

# `Next.js` Image Component, `next/image`
* Some of the optimizations built into the Image component include:
  * Improved Performance: Always deliver images of the correct size for each device, using updated image formats.
  * Visual Stability: Prevent an unexpected shift layout as the page loads automatically
  * Faster Page Loads: The images load when they enter the viewport, with blur-up placeholders as an option.
  * Asset Flexibility: Resize photos stored on remote servers on the fly

* To use the Next.js Image Component, import it at the top of the home page on `pages/index.js`:
    ```js
      // pages/index.js
      import Image from 'next/image';
    ```
* Required attributes:
  * `src`: This is the path to the image.
  * `alt`: This specifies the alternate text for an image.
  * `width`: This specifies the width of the image in pixels.
  * `height`: This specifies the height of the image in pixels.

* Making `Next.js` images responsive usin `layout` prop which has 4 options:
  * `fixed`: The image is not scalable. The image’s width and height are specified regardless of the device’s size displayed.
  * `intrinsic`: The image scales down to fit the container’s width on smaller viewports. The image does not scale up beyond its actual size on a larger viewport. The container width is set to 100%.
  * `responsive`: On different viewports, the image is scaled down or up depending on the container’s width while retaining the aspect ratio.
  * `fill`: Stretches the image’s width and height to fill the parent container.

* Reference:
  * [Cloudinary Implementing images using Next.js Image Component](https://cloudinary.com/blog/guest_post/implementing-images-using-next-js-image-component)
  * [refine.dev - Nextjs image optimization with examples](https://refine.dev/blog/using-next-image/#introduction)


# Deploy on Vercel
* The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.
* Check out [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details on deployment.
