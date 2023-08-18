# `ReactJS` Toolchains

## Table of Contents
- [Further Reading]()
    1. [How to remove node_modules folder](https://sebhastian.com/remove-node-modules/)
    2. [Quick way to delete node_modules folder on Windows](https://www.cloudhadoop.com/nodejs-quick-way-delete-node-modules)

# Popular Toolchains for `ReactJS`
1. `create-react-app` (`CRA`)
2. `NextJS`
3. `Vite`

# `Vite` vs. `CRA`
* Choose `CRA` if you prioritize simplicity, ease of use and no-configuration setup.
* Choose `Vite` if you value speed, performance and flexibility.

# Common Folders and Files in React Toolchains

# `node_modules`
* `node_modules` folder contains all the saved `js` dependancies of a project.
* To ignore the `node_modules` folder in `Git`, create a `.gitignore` file with this entry:
    ```gitignore
      node_modules
    ```
* To remove `node_modules` folder run the following command using `powershell` or `Git Bash`
    ```sh
      # using bash
      rm -rf node_modules
    ```
* You can also use the `npm` package called `rimraf`
    ```sh
        # using npm package
        npx rimraf node_modules
    ```