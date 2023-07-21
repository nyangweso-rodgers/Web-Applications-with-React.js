window.onload = () => {
    const rootElement = document.getElementById('root');
    
    /*
    const ints = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    ints.forEach(i => {
        let li = document.createElement('li');
        li.innerHTML = i;
        rootElement.appendChild(li);
    });
    */
   // Replacing the above line of code with React

   // create a React Virtual DOM Root called root
   const root = ReactDOM.createRoot(rootElement);

   // create array of ints
   const ints = [1,2,3];
   // create an empty array of children elements
   const childrenElements = [];

   // insert into that array
   childrenElements.push(
    React.createElement("li", {key: ints[0]}, ints[0])
   );

   childrenElements.push(
    React.createElement("li", {key: ints[1]}, ints[1])
   );

   childrenElements.push(
    React.createElement("li", {key: ints[2]}, ints[2])
   );

   root.render(childrenElements);
};