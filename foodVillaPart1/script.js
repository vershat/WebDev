
import React from "react";
import ReactDOM from "react-dom/client";

const Title=()=>(
    <img className="logo"
    alt="logo" src="" >

    </img>
);
const Header=()=>{
    return(
       <div className="header">
        <Title/>
        <div className="nav=items">
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

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header/>);