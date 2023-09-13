# Web Applications with `ReactJS`

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
* There are a few things you need to consider when building modern applications. Such as:
    1. __UI__: how users will consume and interact with your application.
    2. __Routing__ - how users navigate between different parts of your application.
    3. __Data Fetching__ - where your data lives and how to get it.
    4. __Rendering__ - when and where you render static or dynamic content.
    5. __Integrations__ - what third-party services you use (CMS, auth, payments, etc) and how you connect to them.
    6. __Infrastructure__ - where you deploy, store, and run your application code (Serverless, CDN, Edge, etc).
    7. __Performance__ - how to optimize your application for end-users.
    8. __Scalability__ - how your application adapts as your team, data, and traffic grow.
    9. __Developer Experience__ - your team’s experience building and maintaining your application.
# Project Requirements

## Requirements: Chrome Extension for `ReactJS` Development
1. [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)

## Requirements: VS Code Extensions
1. [LiveServer](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
2. [Simple React Snippets](https://marketplace.visualstudio.com/items?itemName=burkeholland.simple-react-snippets)
3. [Debugger for Chrome](https://code.visualstudio.com/blogs/2016/02/23/introducing-chrome-debugger-for-vs-code)
4. [JavaScript Debigger (Nightly)](https://learn.microsoft.com/en-us/visualstudio/javascript/debug-nodejs?view=vs-2022)
5. [Prettier](https://prettier.io/)

# Requirements: `ReactJS` UI Frameworks
1. [Material UI](https://mui.com/material-ui/)
2. [React-Bootstrap](https://react-bootstrap.github.io/docs/getting-started/introduction/)
3. [React-Foundation](https://get.foundation/)
4. [React Toolbox](https://react-toolbox.com/)

## Requirements: How to Host React Apps for Free
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

# Analyzing `React` App Performance
## Analyzing `React` App Performance:  using `React` Developer Tools

# Improving `React` App Performance & Managing Large Datasets
## Improving `React` App Performance:  using Pagination
* Pagination also helps in managing and viewing larger data sets in `React`.
* _Limitations_ of Pagination:
   - Requires additonal UI elements
   - Discountinous UI experience

## Improving `React` App Performance: Infinite Scroll
* __Infinite Scroll__ is an improved version of __pagination__.
* _Limitations_ of Infinite Scroll:
   - Users get lost

## Improving `React` App Performance: Windowing
* Using `react-window` library
* _Limitations_ of __Windowing__:
   * Complex implementation
   * height and positioning constraints

## Improving `React` App Performance: Eliminating Needles Renders
* When Does React Re-render Components?
  * _State changes_: state or prop changes in a component or its parent
  * _Key changes_:
  * _Life cycle methonds_:
* __React Component Keys__
