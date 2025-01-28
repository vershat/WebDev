
import React from "react";
import ReactDOM from "react-dom/client";

const Title=()=>(
    <a href="/">
    <img className="logo"
    alt="logo" src="https://www.foodiesfeed.com/wp-content/uploads/2023/08/grilled-crispy-pork-with-rice.jpg">
    </img>
    </a>
);
const Header=()=>{
    return(
       <div className="header">
        <Title/>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Cart</li>
            </ul>
        </div>

       </div>
    );
};
const burgerKing={
   name: "burgerKing",
   image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/60497022-434e-4d21-bc0e-813fea770ae5_654087.JPG",
   cusines:["Burgers","Americans"],
   rating:"4.2",
};
const RestrauntCard=()=>{
  return(
  <div className="card">
    <img src={burgerKing.image}/>
    <h2>{burgerKing.name}</h2>
    <h3>{burgerKing.cusines.join(",")}</h3>
    <h4>{burgerKing.rating}</h4>
  </div>
  );
};
// const RestrauntCard=()=>{
//    return(
// <div className="card">
//     <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/60497022-434e-4d21-bc0e-813fea770ae5_654087.JPG" ></img>
//     <h3>Burger King</h3>
//     <h4>Burgers,American</h4>
//     <h5>4.2 stars</h5>
// </div>
//    );
// };
const Body=()=>{
 return(
   <div class="restaurant-list">
 <RestrauntCard/>
 <RestrauntCard/>
 <RestrauntCard/>
 <RestrauntCard/>
 <RestrauntCard/>
 <RestrauntCard/>
 <RestrauntCard/>
 <RestrauntCard/>
 <RestrauntCard/>
 <RestrauntCard/>
 <RestrauntCard/><RestrauntCard/>
 </div>
 );
};
const Footer=()=>{
return(
<h4>Footer</h4>
);
};
const AppLayout=()=>{
    return(
        <>
   <Header/>
   <Body/>
   <Footer/>
   </>
    );
};

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);