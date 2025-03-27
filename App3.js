
import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./images/logo.jpg";
import food from "./images/food.jpeg";
             

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
//Config Driven UI

// const config = [
//     {
//         type:"carousel",
//         cards:[{
//             offerName: "50% off"
//         },
//                {
//                 offerName:"No Delivery Charge"
//                }
//       ]
//     },
//     {
//         type:"resutaurants",
//         cards:[{
//             name: "Burger King",
//             image:"https://img.freepik.com/premium-photo/burger-fries_1156651-705.jpg?semt=ais_hybrid",
//             cusines: ["rajasthani","punjabi"],
//             rating : 4.6
//         },
//                {
//                 name: "Burger King",
//                 image:"https://img.freepik.com/premium-photo/burger-fries_1156651-705.jpg?semt=ais_hybrid",
//                 cusines: ["rajasthani","punjabi"],
//                 rating : 4.6
//                }
//       ]
//     }
// ]



const restaurantList=[
    {
    name: "Burger King",
    image:"https://img.freepik.com/free-photo/red-lentil-soup-with-slice-lemon-breadcrumbs_140725-1001.jpg?t=st=1742869397~exp=1742872997~hmac=a2bdeac13ce9fc73b864245365e3e2b4d838005686260cc09a056ac1031f1645&w=740",
    cusines: ["rajasthani","punjabi"],
    rating : 4.6
    },
    {
        name: "KFC",
        image:"https://img.freepik.com/free-photo/red-lentil-soup-with-slice-lemon-breadcrumbs_140725-1001.jpg?t=st=1742869397~exp=1742872997~hmac=a2bdeac13ce9fc73b864245365e3e2b4d838005686260cc09a056ac1031f1645&w=740",
        cusines: ["rajasthani","punjabi"],
        rating : 4.6
    },
    {
        name: "La pi no",
        image:"https://img.freepik.com/free-photo/red-lentil-soup-with-slice-lemon-breadcrumbs_140725-1001.jpg?t=st=1742869397~exp=1742872997~hmac=a2bdeac13ce9fc73b864245365e3e2b4d838005686260cc09a056ac1031f1645&w=740",
        cusines: ["rajasthani","punjabi"],
        rating : 4.6
    }
    
];
//first

// const Restaurantcard = (props) =>{
//     console.log(props);
    
//     return(
//          <div className="card">
//             <img src={props.restaurantList.data?.image}/>
//             <h2>{props.restaurantList.data?.name}</h2>
//             <h3>{props.restaurantList.data?.cusines.join(",")}</h3>
//             <h4>{props.restaurantList.data?.rating}</h4>
             
//          </div>
//     )
// };

//Second
// const Restaurantcard = ({ restaurant}) =>{
    
   
    
//     return(
//          <div className="card">
//             <img src={restaurant.data?.image}/>
//             <h2>{restaurant.data?.name}</h2>
//             <h3>{restaurant.data?.cusines.join(",")}</h3>
//             <h4>{restaurant.data?.rating}</h4>
             
//          </div>
//     )
// };

//Third
const Restaurantcard = ({image,name,cusines,rating}) =>{
    
//    const {image,name,cusines,rating}=restaurant;
    return(
         <div className="card">
            <img src={image}/>
            <h2>{name}</h2>
            <h3>{cusines.join(",")}</h3>
            <h4>{rating}</h4>
             
         </div>
    )
};

//Optional chaining

//props - properties
const Body = () =>{
    return (
        <div className="restaurant-list">
            {/* {Restaurantcard(restaurantList[0])} */}

            <Restaurantcard restaurant = {restaurantList[0]}/>
            <Restaurantcard restaurant = {restaurantList[1]}/>
            <Restaurantcard restaurant = {restaurantList[2]}/>
            
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
