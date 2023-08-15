# Project: Creating `React` Components using `create-react-app` Toolchain

## Table Of Contents
- [Further Reading]()
    1. [create-react-app.dev/docs](https://create-react-app.dev/docs/getting-started)

# Requirements

## Setting Up a Development Environment
### `create-react-app`
* Install `create-react-app` globally
    ```sh
        # globally install create-react-app
        npm install -g create-react-app
        # OR
        sudo npm install -g create-react-app
    ```
* Start the `create-react-app`
```sh
    # with npm
    npm create-react-app my-components-with-create-react-app
    # OR
    # with npx
    npx create-react-app my-components-with-create-react-app
```
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
## Structuring Component Files
* In `React` it's common practice to classify `components` into:
  * `containers`
  * `components`
### Step 1: Create `components` folder inside the `/src/`
* For having a `stateless component`
### Step 2: Create `containers` folder inside the `/src/` folder
* `containers` is created to hold other components.
* It's also common to also handle any logic in the application, as well as changes to the application state.
* A `component` that does more than just rendering a piece of UIs is also known as `stateful component` or a `smart component`

### Step 3: Create `images` Folder inside `public/` folder


# Task 1: Create a `HeaderSection` and `AboutSction` Component with `Bootstrap5`
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
