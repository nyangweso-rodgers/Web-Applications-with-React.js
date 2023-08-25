# Project: Designing Components with `Next.js`

## Table Of Contents
- [Further Reading]()
    1. [Learn Next.js](https://nextjs.org/learn)


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

# Requirements: Adding Font Awesome


# Styling Components in React with `Next.js`


# # Link Component
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


# Deploy on Vercel
* The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.
* Check out [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details on deployment.
