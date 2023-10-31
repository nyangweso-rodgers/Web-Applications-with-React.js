# Web Applications with `React.js`

## Table Of Contents

- [ReactJS - Getting Started]()
- [ReactJS - Fundamentals]()
  - [React Toolschains]()
    1. [create-react-app toolchain]()
    2. [nextjs toolchain]()
    3. [vite toolchain]()
- [Further Reading]()
  1. [react.dev/learn](https://react.dev/learn)
  2. [freeCodeCamp - Learn React by Building a Mortgage Calculator](https://www.freecodecamp.org/news/react-mortgage-calculator-tutorial-for-beginners/)
  3. [freeCodeCamp - Learn React by Building an eCommerce Site](https://www.freecodecamp.org/news/learn-react-by-building-an-ecommerce-site/)
  4. [Hashnode - 7 Best Practices for Keeping a React Project Clean and Efficient](https://theankurtyagi.hashnode.dev/7-best-practices-for-keeping-a-react-project-clean-and-efficient)
  5. [freeCodeCamp - Front End JavaScript Development Handbook – React, Angular, and Vue Compared](https://www.freecodecamp.org/news/front-end-javascript-development-react-angular-vue-compared/)

# 9 Building Blocks of a Web Application

- There are a few things you need to consider when building modern applications. Such as:
  1. **UI**: how users will consume and interact with your application.
  2. **Routing** - how users navigate between different parts of your application.
  3. **Data Fetching** - where your data lives and how to get it.
  4. **Rendering** - when and where you render static or dynamic content.
  5. **Integrations** - what third-party services you use (CMS, auth, payments, etc) and how you connect to them.
  6. **Infrastructure** - where you deploy, store, and run your application code (Serverless, CDN, Edge, etc).
  7. **Performance** - how to optimize your application for end-users.
  8. **Scalability** - how your application adapts as your team, data, and traffic grow.
  9. **Developer Experience** - your team’s experience building and maintaining your application.

# Project Requirements

## Requirements 1: Chrome Extension for `ReactJS` Development

1. [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)

## Requirements 2: VS Code Extensions

1. [LiveServer](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
2. [Simple React Snippets](https://marketplace.visualstudio.com/items?itemName=burkeholland.simple-react-snippets)
3. [Debugger for Chrome](https://code.visualstudio.com/blogs/2016/02/23/introducing-chrome-debugger-for-vs-code)
4. [JavaScript Debigger (Nightly)](https://learn.microsoft.com/en-us/visualstudio/javascript/debug-nodejs?view=vs-2022)
5. [Prettier](https://prettier.io/)

## Requirements 3: React UI Frameworks

1. [Material UI](https://mui.com/material-ui/)
2. [React-Bootstrap](https://react-bootstrap.github.io/docs/getting-started/introduction/)
3. [React-Foundation](https://get.foundation/)
4. [React Toolbox](https://react-toolbox.com/)

## Requirements 4: React Framemeworks

1. Next.js
2. Gatsby
3. Blitz.js
4. Redwood
5. Remix

## Requirements 5: How to Host React Apps for Free

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

# Introduction to React

- `React` is a `JavaScript library` used to build _User Interfaces_ developed and maintained by **Facebook**. It is capable of building complex and highly interactive single-page web applications.

## How does `ReactJS` Work?

- `ReactJS` creates a **VIRTUAL DOM** in memory. Instead of manipulating the browser's `DOM` directly, `ReactJS` creates a **virtual DOM** in memory, where it does all the necessary manipulating, before making the changes in the browser `DOM`.
- `ReactJS` only changes what needs to be changed! i.e., it finds out what changes have been made, and changes only what needs to be changed.

## Advantages of `ReactJS`

- Very fast, gives smooth experience to users
- Easy to develop and maintain due to its **Components** based structure. A **component** basically represent a piece of UI. Once a **component** is created, it can be used as many times as you wish to.
- can be use on client-side and server-side devices
- reusable components rduce development time and help build complex functionalities
- data is updated by refreshing UI, making it efficient

## Cons OF `ReactJS`

- `ReactJS` uses traditional `MVC` framework and hence requires complex configuration.
- An in depth knowledge is required for integration the UI into `MVC framework`
- **Redux** and **Routing** are external tools that need to be learnt, whereas `Angular` has most of these tools inbuilt.

## Popular Apps using `ReactJS`

- PayPal
- BBC
- Facebook
- Netflix
- Twitter

## Features of React

### Feature 1: React Virtual DOM

- **Virtual DOM**: uses a strategy that updates the `DOM` without having to redraw all the webpage elements. Every time the `DOM` changes, browsers need to recalculate entire layout and then repaint the web page which makes the web app slow. To overcome this, we have **virtual DOM**. Evrey time the state of our application changes, the **virtual DOM** gets updates instead of the real `DOM`.

- Whenever the new element is added to the UI, a new **virtual DOM** associated with that element is created. If state of this element chnages, a second new **virtual DOM** is created which will be compared with the previous **virtual DOM**. It then updates ONLY the object on the real `DOM`.

### Feature 2: Unidirectional Data Flow in `ReactJS`

- In `React`, data flow refers to how data is passed between `components`.
- `React` employs a **one-way data flow** or **unidirectional data flow**. It is sometimes referred to as the **one-way data binding model**.
- In a **unidirectional data flow**, data flows in a single direction, which is from a parent component down to its child components.
- In `React`, this is achieved by passing data down through `props` _which are essential properties that can be passed down from a parent component to its child components._. Once a child component receives `props` from its parent, it can use those `props` to render itself.
- This **unidirectional flow** of data helps to keep the application's data model simple and also makes it easier to debug the application, as changes to data can be easily traced back to their source.

### Feature 3: webpack

- **webpack** is a static module bundler for modern JavaScript applications.
- webpack build script inside a `package.json` file
  ```json
        "scripts": {
            "build": "webpack --mode production"
        }
  ```
- A webpack loader takes something as the input and produces an output, called bundle.

### Feature 4: Babel

- **Babel** is a JavaScript transpiler that converts edge JavaScript into plain old ES5 JavaScript that can run in any browser (even the old ones).

# Analyzing `React` App Performance

## Analyzing `React` App Performance: using `React` Developer Tools

# Improving `React` App Performance & Managing Large Datasets

## Improving `React` App Performance: using Pagination

- Pagination also helps in managing and viewing larger data sets in `React`.
- _Limitations_ of Pagination:
  - Requires additonal UI elements
  - Discountinous UI experience

## Improving `React` App Performance: Infinite Scroll

- **Infinite Scroll** is an improved version of **pagination**.
- _Limitations_ of Infinite Scroll:
  - Users get lost

## Improving `React` App Performance: Windowing

- Using `react-window` library
- _Limitations_ of **Windowing**:
  - Complex implementation
  - height and positioning constraints

## Improving `React` App Performance: Eliminating Needles Renders

- When Does React Re-render Components?
  - _State changes_: state or prop changes in a component or its parent
  - _Key changes_:
  - _Life cycle methonds_:
- **React Component Keys**
