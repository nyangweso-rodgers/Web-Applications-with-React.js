# Server Side Rendering (SSR) and React Server Components (RSC)

## Table of Contents
- [Further Reading]()
    1. [freeCodeCamp - React Server Components – How and Why You Should Use Them in Your Code](https://www.freecodecamp.org/news/how-to-use-react-server-components/)


# React Server Components (RSC)
* With __RSCs__, you can move your data fetching logic to the server (so that your component fetches the data without a network call) and get it ready on the server itself. The data that comes back to the client is a well constructed component along with all the data fit into it.

* With __RSC__, you may not need to use useEffect (ever!).
* Some of the __Limitations__ of __RSC__ include:
    - __RSCs__ stay on the server and get rendered on the server. They don't have anything that is related to the client-side. This means that you can't add any user interactivity to the server components. For example, you can't use any event handlers or React hooks like `useState`, `useReducer`, `useEffect` in your server components.
    - You can not use Browser Web APIs like localstorage, bluetooth, web USB, and so on in server components.
    - For everything that's related to client interactions, you must continue to use client components.

## How to Use Client and Server Components Together
* Server components can import and render client components, but client components can't render the server components in it.  If you want to use a server component in a client component, you can pass it as props and use it that way.

* It is better to have the server components at the root of your component hierarchy and push the client components towards the leaves of the component tree.

* The data fetching can happen at the top in the server components and you can pass them how `React` allows. User interactions (event handlers) and accessing browser APIs can be handled in the client component at the leaf level.


## React Server Components (RSC) vs. SSR
* With __SSR__ we send the raw `HTML` from the server to the client, then all the client side `JavaScript` gets downloaded. `React` starts the __Hydration__ process to transform the `HTML` to an interactive `React` component. In __SSR__ the component doesn't stay on the server.

* With __RSC__, the components stay on the server and have access to the server infrastructure without making any network roundtrips.

* __SSR__ is useful for faster loading of the initial page of your application. You can use __SSR__ and __RSCs__ together in your application without any problems.

# Project: Build `HomePage` using `Next.js` with RSC and `MongoDB`
* `Next.js` is the leading web framework that has adopted __RSCs__ in its recent release.
* Steps:
    1. Add some data in data store in MongoDB.
    2. Create a utility function to establish a connection to MongoDB.
        - This is generic code you can use for any `JavaScript`-based project to connect to __MongoDB__ using __Mongoose__ and __MongoDB__ URI.
            ```js
                // Connect to MongoDB using Mongoose
                import mongoose from "mongoose";

                export async function dbConnect(): Promise<any> {
                    try {
                        const conn = await mongoose.connect(String(process.env.MONGO_DB_URI));
                        console.log(`Database connected : ${conn.connection.host}`);
                        return conn;
                    } catch (err) {
                        console.error(err);
                    }
                    }
            ```