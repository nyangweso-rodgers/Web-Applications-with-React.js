# server-side-rendered-react-app

# Steps
1. Create `package.json`and install dependencies, Express, React, Babel, and Webpack:
     - on the terminal, type the following
     - this creates a new empty `package.json` where all the dependencies will be listed
        ```sh
            npm init --y
        ```
    - install the dependencies
        ```sh
            # install the dependencies
            npm install react@16.12.0 --save
            npm install react-dom@16.12.0 --save
            npm install express --save
        ```
    - install __Babel__ packages needed to transform `JS` to `JSX` 
        ```sh
            # save to devDependencies
            npm install --save-dev @babel/core@7.7.7 @babel/node@7.7.7 babel-loader@8.0.6
        ```
    - install __webpack__ dependencies
        ```sh
            # save to devDependencies
            npm install save-dev webpack@4.41.5 webpack-cli@3.3.10 webpack-dev-server@3.10.1
        ```

2. Create a simple `hello world` server