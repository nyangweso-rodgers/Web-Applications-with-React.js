# `ReactJS` - Getting Started

## Table of Contents
- [Further Reading]()
  - []()

# Introduction to `ReactJS`
* `React` is a `JavaScript library` used to build _User Interfaces_. 
* It is developed and maintained by __Facebook__. It is capable of building complex and highly interactive single-page web applications and can be integrated with any backend.

# How does React Work?
* __React__ creates a __VIRTUAL DOM__ in memory. Instead of manipulating the browser's DOM directly, __React__ creates a __virtual DOM__ in memory, where it does all the necessary manipulating, before making the changes in the browser DOM.

* __React__ only changes what needs to be changed! __React__ finds out what changes have been made, and changes only what needs to be changed.

# Advantages of `ReactJS`
* Very fast, gives smooth experience to users
* Easy to develop and maintain due to its __Components__ based structure. A __component__ basically represent a piece of UI. Once a __component__ is created, it can be used as many times as you wish to.
* can be use on client-side and server-side devices
* reusable components rduce development time and help build complex functionalities
* data is updated by refreshing UI, making it efficient

# Cons OF `ReactJS`
* React uses traditional `MVC` framework and hence requires complex configuration.
* An in depth knowledge is required for integration the UI into `MVC framework`
* __Redux__ and Routing are external tools that need to be learnt, whereas Angular has most of these tools inbuilt.

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

# Data Flow in `ReactJS`
* In `React`, data flow refers to how data is passed between `components`. 
* `React` employs a __one-way data flow__ or __unidirectional data flow__. It is sometimes referred to as the __one-way data binding model__.
* In a __unidirectional data flow__, data flows in a single direction, which is from a parent component down to its child components. 
* In `React`, this is achieved by passing data down through `props` _which are essential properties that can be passed down from a parent component to its child components._. Once a child component receives `props` from its parent, it can use those `props` to render itself.
* This __unidirectional flow__ of data helps to keep the application's data model simple and also makes it easier to debug the application, as changes to data can be easily traced back to their source.