# `ReactJS` - Getting Started

## Table of Contents
- []()
- [Further Reading]()
  - []()

# Library vs. Frameworks
* A __library__ and a __framework__ are similar in that they are both _collections of pre-written code that can be used to add functionality to a software application_. However, there are some key differences between the two:

* A __library__ is a _collection of functions that can be called by the application to perform specific tasks_. The application is responsible for controlling the flow of the program, and the library provides specific functionality that can be used as needed.

* A __framework__, on the other hand, is a more opinionated and prescriptive approach to building applications. A _framework provides a structure and set of conventions for building an application, and the application is built within the constraints and guidelines provided by the framework_. The framework controls the flow of the program and the application provides the specific implementation details.

* In the context of `Angular` and `React`, __Angular__ is a framework, while React is a library. Angular provides a complete solution for building web applications, including a structure for organizing and building the application, as well as a set of conventions and tools for handling tasks such as state management and server communication. React, on the other hand, provides a set of components and functions that can be used to build a user interface, but it is up to the developer to choose how to handle other aspects of the application.

*  the choice between a library and a framework depends on the specific needs and requirements of the application and the development team. A framework can provide a more structured and opinionated approach to building an application, while a library provides more flexibility and control over the application structure.

# Introduction to `ReactJS`
* `React` is a `JavaScript library` used to build _User Interfaces_ developed and maintained by __Facebook__. It is capable of building complex and highly interactive single-page web applications and can be integrated with any backend.

# How does `ReactJS` Work?
* `ReactJS` creates a __VIRTUAL DOM__ in memory. Instead of manipulating the browser's DOM directly, `ReactJS` creates a __virtual DOM__ in memory, where it does all the necessary manipulating, before making the changes in the browser DOM.

* `ReactJS` only changes what needs to be changed! i.e., it finds out what changes have been made, and changes only what needs to be changed.

# Advantages of `ReactJS`
* Very fast, gives smooth experience to users
* Easy to develop and maintain due to its __Components__ based structure. A __component__ basically represent a piece of UI. Once a __component__ is created, it can be used as many times as you wish to.
* can be use on client-side and server-side devices
* reusable components rduce development time and help build complex functionalities
* data is updated by refreshing UI, making it efficient

# Cons OF `ReactJS`
* `ReactJS` uses traditional `MVC` framework and hence requires complex configuration.
* An in depth knowledge is required for integration the UI into `MVC framework`
* __Redux__ and Routing are external tools that need to be learnt, whereas Angular has most of these tools inbuilt.\

# Angular vs React
Parameter | Angular | React
|:----------:|:-----------:|:-------------:|
Type | Complete framework (everything is inbuilt including Routers, HTTP e.t.c) | `ReactJS` is a JS library and is much older compared to `AngularJS`.
Use of Libraries | `AngularJS` is a complete solution in itself | `ReactJS` can be packaged with other programming libraries. (Since it is just a library it doesn’t have much of inbuilt functionalities)
Learning curve | Learning `Angular` is not easy for beginners. Thus, it requires lots of training. But it includes most of the concepts and thus you don’t need any external tools | It is easier to grasp compared `Angular`. However, it is difficult to learn when augmented with `Redux`. Quick to learn React whereas it takes time to learn external tools such as redux which is essential.
Installation Time | `AngularJS` is easy to set up but may lead to an increase in coding time which also results in delayed project deliveries. | `ReactJS` takes longer to set up. But, it is really fast for delivering projects and building apps.
Best Feature | `AngularJS` offers a limited amount of freedom and flexibility. | `ReactJS` gives you the freedom to choose the tools, architecture, and libraries, for developing an app.
Data Binding | `AngularJS` uses the two-way data binding method. It helps you to ensure that the model state automatically changes when any change is made. | `ReactJS` language uses one-way data binding, which means that the UI elements can’t be changed without updating the corresponding model state.
Testing and Debugging | In`AngularJS`, testing and debugging for a complete project is possible with a single tool. | `ReactJS` requires a set of tools to perform different types of testing.
Application Types | You should `AngularJS` framework If you want to develop a SPA(Single Page Application) and mobile apps. | Use `ReactJS` if you want to develop Native apps, hybrid apps, or web apps
Language used | `AngularJS` uses Typescript which requires a bit of prior learning to be done. | `ReactJS` is written in JavaScript which many programmers are familiar with, hence faster learning

# Popular Apps using `ReactJS`
* PayPal
* BBC
* Facebook
* Netflix
* Twitter

# `ReactJS` Concepts

# Concept 1: Virtual DOM
* __Virtual DOM__: uses a strategy that updates the `DOM` without having to redraw all the webpage elements. Every time the `DOM` changes, browsers need to recalculate entire layout and then repaint the web page which makes the web app slow. To overcome this, we have __virtual DOM__. Evrey time the state of our application changes, the __virtual DOM__ gets updates instead of the real `DOM`.

* Whenever the new element is added to the UI, a new __virtual DOM__ associated with that element is created. If state of this element chnages, a second new __virtual DOM__ is created which will be compared with the previous __virtual DOM__. It then updates ONLY the object on the real `DOM`.

# Concept 2: Data Flow in `ReactJS`
* In `React`, data flow refers to how data is passed between `components`. 
* `React` employs a __one-way data flow__ or __unidirectional data flow__. It is sometimes referred to as the __one-way data binding model__.
* In a __unidirectional data flow__, data flows in a single direction, which is from a parent component down to its child components. 
* In `React`, this is achieved by passing data down through `props` _which are essential properties that can be passed down from a parent component to its child components._. Once a child component receives `props` from its parent, it can use those `props` to render itself.
* This __unidirectional flow__ of data helps to keep the application's data model simple and also makes it easier to debug the application, as changes to data can be easily traced back to their source.

# `ReactJS` Frameworks
# Framework 1: `NextJS`
* `Next.js` is a framework for building server-side rendered React apps, making it suitable for generating quick and dynamic web applications.
* It's significant for web app development because it helps with things like:
  * page routing, 
  * server-side rendering, and 
  * quick loading times, which are critical for generating a great user experience.