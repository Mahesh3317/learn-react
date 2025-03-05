
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

//jsx ?
// jsx => React.createElement => Object =>HTML(DOM)

// const heading3 =  <h1 id="title">Namaste react</h1>
//for multiple lines we use ()

//React Element
const heading2 =() => (        
    <h1 id="title" key="h2">  
    Namaste react1
    </h1>                //JSX EXPRESSION
)

// React Component
//-1.Functional -New
//-2.Class Based Component -Old
//Name of Component start with capital latter - it not mandatory

// const HeaderComponent = () =>{
//     // return <h1>Namaste react functional Component</h1>
//     return (
//     <div>
//     <h1>Namaste react functional Component</h1>
//     </div>
//     );
// }


const HeaderComponent = () =>(
    <div>
    {/* {heading2} //for react element  */}
    <heading2/>
     {/* for functional component AS well we can also write like this {heading2()}  */}
    
    <h1>Namaste react functional Component</h1>
    </div>
    );

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent/>);
