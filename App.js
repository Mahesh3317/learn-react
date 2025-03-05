
// //  <div class="header">
// //  <h1>Namaste React</h1>
// //  <ul>
// //      <li>About us</li>
// //      <li>Support</li>
// //      <li>Home</li>                   
// //  </ul>
// // </div> 
// import React from "react";
// import ReactDOM from "react-dom/client";

// const heading = React.createElement(
//     "h1",//THIS IS CALLED AS REACT ELEMENT
//     {
//         id: "title",
//     },
//     "Heading 1"
// );

// const heading2 = React.createElement(
//     "h2",
//     {
//         id: "title",
//         key:"h1",
//     },
//     "Heading 2"
// );

// //React.createElement => Object => HTML(DOM)

// const container = React.createElement(
//     "div",
//     {
//         id: "container",
//     },
//     [heading,heading2]
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));

// //passing a react element inside the root
// //async defer
// root.render(container);
