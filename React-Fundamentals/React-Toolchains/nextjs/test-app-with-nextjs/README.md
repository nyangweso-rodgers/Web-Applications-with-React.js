# Test App with `Next.js`

## Table Of Contents
- [Requirements](#requirements)
    1. [Requirements 1: Adding `bootstrap@5.1.3`]()
    2. [Requirements 2: Adding Google Fonts]()
    3. [Requirements 3: Adding Font Awesome]()
   
- [Further Reading]()
    1. [nextjs.org/deoc/app - Font Optimization](https://nextjs.org/docs/app/building-your-application/optimizing/fonts)
    2. [YouTube - Using Fonts in Next.js (Google Fonts, Local Fonts, Tailwind CSS)](https://www.youtube.com/watch?v=L8_98i_bMMA)
    3. [Font Awesome - Use React with Font Awesome](https://fontawesome.com/docs/web/use-with/react/use-with)



# Project Requirements
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
* Note:
  * Running the above command without specifying the version, `npm` will by default install the latest version of the `Bootstrap` package available in the npm registry. This behavior is true for all packages you install using `npm`, not just `Bootstrap`.


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