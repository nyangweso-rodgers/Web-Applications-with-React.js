# Project: Creating Components using `create-react-app` Toolchain

## Table Of Contents
- [Further Reading]()
    1. [create-react-app.dev/docs](https://create-react-app.dev/docs/getting-started)

# Requirements
## Requirements: Adding `Bootstrap5`
* Integrate `Bootstrap5` into `React`:

    ```sh
        # using npm
        npm install bootstrap
    ```
* Import `Bootstrap CSS` and optionally `Bootstrap` theme `CSS` in the beginning of your `src/index.js` file:

    ```js
        import 'bootstrap/dist/css/bootstrap.css';
        // Put any other imports below so that CSS from your
        // components takes precedence over default styles.
    ```

# Task 1: Create a `HeaderSection` Component
```js
    // App.js
    const MyHeader = () => {
        return <div>First component header!</div>
    }

    export default MyHeader;
```

# Task 2: Create a `AboutSection` Component

# Task 3: Create a `PortableSection` Component

# Task 4: Create a `FooterSection` Component
