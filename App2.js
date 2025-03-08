
import React from "react";
import ReactDOM from "react-dom/client";
 /**
             * header
                Logo
                Nav Items(Right Side)
                -Cart
            * body
                   -Search bar   
                   -Restaurantcard
                      -Image
                      -Name
                      -Rating 
                      -Cusines
            
             Footer
               -links
               Copyright 
            */

const Title = () => (
    <h1 id="title" key="h2">  
    Namaste react1
    </h1> 
);

const HeaderComponent = () =>{
    return(
        <div>
            <Title/>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>cart</li>
                </ul>
            </div>
        </div>
    )
}


const AppLayout =() =>{
    return(
        {
           
        }
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent/>);
