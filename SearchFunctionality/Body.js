import {restaurantList} from "../../config.js"
import {useState} from "react";

import RestrauntCard from "./Restraunt.js";  

function filterData(searchText,restaurants){
   const filterData=restaurants.filter((restaurant)=>
restaurant?.data?.name.toLowerCase().includes(searchText.toLowerCase()));

   return filterData;
}
const Body =()=>{    
    
    const[searchText,setSearchText]=useState("");
    const[restaurants,setRestaurants]=useState(restaurantList);
 
   return (
    <>
    <div className="search-container">
        <input                      
        type="text"
        className="search-input"
        placeholder="Search"
        value={searchText}
        onChange={(e)=>setSearchText(e.target.value)}
    ></input>
        <button
         className="search-btn"
         onClick={()=>{
            const data=filterData(searchText,restaurants);
            setRestaurants(data);
         }}
         >
            Search
            </button>
    </div>
    
    <div className="restaurant-list">
    
    {restaurants.map((restaurant) => {
        return (
            <RestrauntCard {...restaurant.data} key={restaurant.data.id} /> 
        );
    })}
</div>
    </>
    );
};
   export default Body;

 