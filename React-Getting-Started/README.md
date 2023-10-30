# `ReactJS` - Getting Started

## Table of Contents

# Library vs. Frameworks
* A __library__ and a __framework__ are similar in that they are both _collections of pre-written code that can be used to add functionality to a software application_. However, there are some key differences between the two:

* A __library__ is a _collection of functions that can be called by the application to perform specific tasks_. The application is responsible for controlling the flow of the program, and the library provides specific functionality that can be used as needed.

* A __framework__, on the other hand, is a more opinionated and prescriptive approach to building applications. A _framework provides a structure and set of conventions for building an application, and the application is built within the constraints and guidelines provided by the framework_. The framework controls the flow of the program and the application provides the specific implementation details.

* In the context of `Angular` and `React`, __Angular__ is a framework, while `React` is a library. `Angular` provides a complete solution for building web applications, including a structure for organizing and building the application, as well as a set of conventions and tools for handling tasks such as state management and server communication. `React`, on the other hand, provides a set of components and functions that can be used to build a user interface, but it is up to the developer to choose how to handle other aspects of the application.

# Introduction to `React`

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


# `ReactJS` Features

# Feature 1: React Virtual DOM
* __Virtual DOM__: uses a strategy that updates the `DOM` without having to redraw all the webpage elements. Every time the `DOM` changes, browsers need to recalculate entire layout and then repaint the web page which makes the web app slow. To overcome this, we have __virtual DOM__. Evrey time the state of our application changes, the __virtual DOM__ gets updates instead of the real `DOM`.

* Whenever the new element is added to the UI, a new __virtual DOM__ associated with that element is created. If state of this element chnages, a second new __virtual DOM__ is created which will be compared with the previous __virtual DOM__. It then updates ONLY the object on the real `DOM`.

# Feature 2: Unidirectional Data Flow in `ReactJS`
* In `React`, data flow refers to how data is passed between `components`. 
* `React` employs a __one-way data flow__ or __unidirectional data flow__. It is sometimes referred to as the __one-way data binding model__.
* In a __unidirectional data flow__, data flows in a single direction, which is from a parent component down to its child components. 
* In `React`, this is achieved by passing data down through `props` _which are essential properties that can be passed down from a parent component to its child components._. Once a child component receives `props` from its parent, it can use those `props` to render itself.
* This __unidirectional flow__ of data helps to keep the application's data model simple and also makes it easier to debug the application, as changes to data can be easily traced back to their source.

# webpack
* __webpack__ is a static module bundler for modern JavaScript applications.
* webpack build script inside a `package.json` file
  ```json
        "scripts": {
            "build": "webpack --mode production"
        }
  ```
* A webpack loader takes something as the input and produces an output, called bundle.

# Babel
* __Babel__ is a JavaScript transpiler that converts edge JavaScript into plain old ES5 JavaScript that can run in any browser (even the old ones).