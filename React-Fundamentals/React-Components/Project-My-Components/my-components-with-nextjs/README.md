# Project: Designing Components with `Next.js`


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
