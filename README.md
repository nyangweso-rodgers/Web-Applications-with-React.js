# Web Applications with `ReactJS`

## Table Of Contents
- [ReactJS - Getting Started]()
- [ReactJS - Fundamentals]()
- [Further Reading]()
  1. [react.dev](https://react.dev/learn)
  2. [freeCodeCamp - Learn React by Building a Mortgage Calculator](https://www.freecodecamp.org/news/react-mortgage-calculator-tutorial-for-beginners/)
  3. [freeCodeCamp - Learn React by Building an eCommerce Site](https://www.freecodecamp.org/news/learn-react-by-building-an-ecommerce-site/)
  4. [Hashnode - 7 Best Practices for Keeping a React Project Clean and Efficient](https://theankurtyagi.hashnode.dev/7-best-practices-for-keeping-a-react-project-clean-and-efficient)

# Setting RectJS Development Environment in VSCode
# Requirements

## VS Code Extensions
1. [LiveServer](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)

# `ReactJS` UI Frameworks
1. [Material UI](https://mui.com/material-ui/)
2. [React-Bootstrap](https://react-bootstrap.github.io/docs/getting-started/introduction/)
3. [React-Foundation](https://get.foundation/)
4. [React Toolbox](https://react-toolbox.com/)

# How to Host React Apps for Free
1. Netlify
   - Used to create, test and deploy websites 
2. Vercel
   - Static site
3. GitHub Pages
4. Firebase Hosting
   - Hosting for static and dynamic content as well as microservices
   - Offers SSD storage
   - CDN

5. Surge
6. Heroku

# `package.json` File
* The `package.json` file  is a crucial part of a `Node.js` or `npm-based` project, including `React` projects created with `create-react-app` or `pnpm create vite@latest`. It contains important information about your project, such as its `name`, `version`, `dependencies`, and `scripts`.
  
* When you push your project to GitHub, including the `package.json` file ensures that anyone who clones your repository can quickly set up and run the project without having to manually configure the dependencies and scripts.

* When you install a package using `npm`, you can use the `--save` or `-S` flag to instruct npm to update the `package.json` file with the new package and its version as a dependency. 

  ```sh
    # install node package and upddate the package.json file
    npm install package-name --save
  ```

# `package-lock.json` file
* `package-lock.json` file is a lock file that ensures that your project will always use the same __versions__ of the __dependencies__, regardless of when you install it or who installs it. It contains the following information:
  * The exact versions of all the dependencies that are required to run your project.
  * The location of each dependency.
  * The checksum of each dependency.

* It is recommended to commit the `package-lock.json` file along with your project source code so that all the developers and CI/CD will use this file to install the same version of the package. However, you should not edit the `package-lock.json` file manually, as it is automatically generated by `npm` or `Yarn`.

# `package.json` vs `package-lock.json`
* The main difference between the two files is that `package-lock.json` is a more detailed file that contains the exact versions of all the dependencies that are required to run your project. `package.json` only contains the names and versions of the dependencies, and it does not guarantee that the same versions will be installed every time.