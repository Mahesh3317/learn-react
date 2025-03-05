
//  <div class="header">
//  <h1>Namaste React</h1>
//  <ul>
//      <li>About us</li>
//      <li>Support</li>
//      <li>Home</li>                   
//  </ul>
// </div> 
import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
    "div",
    {
        id: "title",
    },
[
    React.createElement(
        "h1",
        {
            id: "title",
        },
        "Heading 1"
    ),

    React.createElement(
        "h1",
        {
            id: "title",
        },
        "Heading 1"
    ),
    
    React.createElement(
        "h1",
        {
            id: "title",
        },
        "Heading 1"
    )
]
);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
