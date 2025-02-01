import {restaurantList} from "../../config.js"  //restaurantList is being imported from ../../config.js, which likely contains an array of restaurant data.

import RestrauntCard from "./Restraunt.js";     //RestrauntCard is a React component (probably for displaying restaurant information) that is being imported from ./Restraunt.js.
const Body =()=>{    //Defines a functional React component named Body.
    const searchTxt="KFC"     //Initializes a constant variable searchTxt with the default value "KFC".
   // Issue: This should be a state variable if you intend to update it dynamically.
    
 //  Returns JSX (React's way of describing the UI structure).
//The <>...</> is a React Fragment, which is used to return multiple elements without adding an extra parent element.

   return (
    <>
    <div className="search-container">
        <input                      //An input field where users can type search queries.
        /* Props Explained:
          type="text": Specifies the input type as text.
          className="search-imput": Adds a CSS class (but there's a typo: "search-imput" should be "search-input").
          placeholder="Search": Displays a placeholder text inside the input field.
          value={searchTxt}: Binds the input value to searchTxt (but since searchTxt is a constant, this won't update the UI dynamically).
          onChange={(e) => searchTxt = e.target.value}: Attempts to update searchTxt when typing.
          Issue: Since searchTxt is a constant (const), this will cause an error. It should be managed using React state (useState).
*/
        type="text"
        className="search-imput"
        placeholder="Search"
        value={searchTxt}
        onChange={(e)=>
            searchTxt=e.target.value}
        />
        <button className="search-btn">Search</button>
    </div>
    
    <div className="restaurant-list">
    
    {restaurantList.map((restaurant) => {
        return (
            <RestrauntCard {...restaurant.data} key={restaurant.data.id} /> /*
            .map() loops through restaurantList and renders a RestrauntCard component for each restaurant.
            {...restaurant.data}: Spreads all properties of restaurant.data as props to RestrauntCard.
            key={restaurant.data.id}: Assigns a unique key to each component (important for React rendering optimization).

            */
        );
    })}
</div>

    </>
  

    );

};
   export default Body;

   /*Issues & Fixes
State Management Issue:

searchTxt should be a state variable instead of a constant.
Fix:
js
Copy
Edit
import { useState } from "react";

const Body = () => {
  const [searchTxt, setSearchTxt] = useState("");

  return (
    <div className="search-container">
      <input
        type="text"
        className="search-input"
        placeholder="Search"
        value={searchTxt}
        onChange={(e) => setSearchTxt(e.target.value)}
      />
      <button className="search-btn">Search</button>
    </div>
  );
};

Summary
This component renders a search input, a button, and a list of restaurants.
The search input does not work properly due to state issues.
Fixing searchTxt using useState will allow proper updates.
The RestrauntCard component is used to display each restaurant in the list.*/


// when we want to change variable inside react we have to use state variable instead of local variables