# React `Context API`

## Table Of Contents
- [Further Reading]()
    1. [freeCodeCamp - How to Use the React Context API in Your Projects](https://www.freecodecamp.org/news/context-api-in-react/)


# Problem with Passing `props`
* to pass data down to a particular component, we need to pass it down through all the intermediate components, even if those components don't actually use the data themselves. This is what is referred to as "__prop drilling__."

* it can be annoying to pass `props` when you have to send the same data to lots of components or when components are far away from each other. This can make an application slower and harder to work with.

# Overview of `contect Api`
* __Prop drilling__ can make your code more difficult to read and maintain, and can also make it harder to refactor your components later on.
* Fortunately, `React` provides a built-in feature known as the `context API` that helps  “teleport” data to the components that need it without passing `props`.

# How the Context API Works
* Basically, `Context API` consists of two main components: the __context provider__ and the __context consumer__. 
* The __provider__ is responsible for _creating and managing the context_, which holds the data to be shared between components. 
* On the other hand, the __consumer__ is used to access the context and its data from within a component.

# Steps to using `Context API`
* __Step 1__:
  * Create a Context Object using `createContext` function from `react` library.
  * This object will hold the data that you want to share across your application
  * Create a new file named `MyContext.js` in the `src` folder with the following code:

    ```js
        // create MyContext.js inside the src directory
        import { createContext } from 'react';

        export const MyContext = createContext("");
    ```
    * we are importing `createContext` from `React` and using it to create a new context object named "`MyContext`".
    * Then, we are exporting the context object so that we can use it in other parts of our application.

* __Step 2__:
  * Wrap Components with a __Provider__.
  * wrap the components that need access to the shared data with a __Provider__ component. 
  * The __Provider__ component accepts a "value" `prop` that holds the shared data, and any component that is a child of the __Provider__ component can access that shared data.
  * It's important to note that the __Provider__ component should be wrapped around the top-level component in an application to ensure that all child components have access to the shared data.

    ```js
        // Create a parent component that wraps child components with a Provider
        import { useState, React } from "react";
        import { MyContext } from "./MyContext";
        import MyComponent from "./MyComponent";

        const App = () => {
            const [text, setText] = useState("");

            return (
                <div>
                    <MyContext.Provider value={{ text, setText }}>
                    <MyComponent />
                    </MyContext.Provider>
                </div>
            );
        }

        export default App;
    ```
    * here, we have a parent component called, `App` which has a state variable called "`text`"t, which is initially set to an empty string.
    * We've also defined a function called `setText` that can be used to update the value of `text`.
    * Inside the return statement of the `App` component, we've wrapped the children of this component with the provider component ("MyContext.Provider"). Then we've passed an object to the value prop of the provider component that contains "text" and "setText" values.

* __Step 3__:
  * consume the Context
  * Now that we've created the __provider__ component, we need to consume the __context__ in other components. To do this, we use the "`useContext`" hook from React.

    ```js
        import { useContext } from 'react';
        import { MyContext } from './MyContext';

        const MyComponent() {
            const { text, setText } = useContext(MyContext);

            return (
                <div>
                    <h1>{text}</h1>
                    <button onClick={() => setText('Hello world!')}>Click the Button!</button>
                </div>
            );
        }

        export default MyComponent;
    ```

# Use Cases of Context API
1. __Theming__: You can use Context API to store the current theme of your application and make it available to all components. This way, whenever the user switches the theme (such as enabling dark mode), all components will be updated with the new theme.

2. __User Authentication__: You can also use Context API to store a user's authentication status and pass it down to all the components that need it. This way, you can easily restrict access to certain parts of your application based on the user's authentication status.

3. __Multilingual Support__: You can store the current language of your application in the context and pass it down to all the components that need it. This way, you can easily switch between different languages without having to pass the language down as props to all the components.

4. __Accessing data from external sources__: Finally, you can use the Context API to store data retrieved from external sources such as APIs or databases and make it available to all components. This can simplify your code and make it easier to manage data across your application.

# Best Practices for Context API
1. Use a separate file to define your Context: It's a good practice to define your context object in a separate file to keep your code organized and easy to maintain.

2. Keep Context API limited to global state management only: It's best to use the Context API for managing state that needs to be accessed across multiple components in your application. Avoid using it for state that only needs to be accessed within a single component, as it can lead to unnecessary complexity and performance issues.

3. Use context providers sparingly: While context providers can be a powerful tool for managing global state, it's generally a good idea to use them sparingly. Instead, consider using props to pass data down through your component tree whenever possible.

4. Use default values: When creating a new context, it's a good idea to provide a default value that will be used if no provider is present. This can help prevent unexpected errors and make your code more robust.