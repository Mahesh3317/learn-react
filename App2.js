
import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./images/logo.jpg";
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
                <img 
                   className="logo"
                   alt="logo"
                   src={logo} // Now it should work
                />
            );

const HeaderComponent = () =>{
    return(
        <div className="header">
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

const burger={
    name: "Burger King",
    image:"https://img.freepik.com/premium-photo/burger-fries_1156651-705.jpg?semt=ais_hybrid",
    cusines: ["rajasthani","punjabi"],
    rating : 4.6
};

const Restaurantcard = () =>{
    return(
         <div className="card">
            <img src={burger.image}/>
            <h2>{burger.name};</h2>
            <h3>{burger.cusines.join(",")}</h3>
            <h4>{burger.rating}</h4>
             
         </div>
    )
};

// const Restaurantcard = () =>{
//     return(
//          <div>
//             <img src=""/>
//             <h2>Burger King</h2>
//             <h3>[Burger,American]</h3>
//             <h4>4.2 stars</h4>
//          </div>
//     )
// };
const Body = () =>{
    return (
        <div className="restaurant-list">
            <Restaurantcard/>
            <Restaurantcard/>
            <Restaurantcard/>
            <Restaurantcard/> 
            <Restaurantcard/>
            <Restaurantcard/>
            <Restaurantcard/>
            <Restaurantcard/>
        </div>
    )
    
};

const Footer = () =>{
    return <h4>Body</h4>
    
};
const AppLayout = () =>{
    return(
        <React.Fragment>
          <HeaderComponent/>
          <Body/>
          <Footer/> 
          </React.Fragment>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);
