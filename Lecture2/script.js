import React from "react";
import ReactDOM from "react-dom/client";

const HeaderComponent=()=>{
    return <h1>Namaste react functional component</h1>;
    // if it is in one line then dont use parenthis or you can use parenthesis
};
//this is how we create functional component in react
// function component is nothing but a simple javascript function


const HeaderComponent2= ()=>{
    return(
    <div>
        <h1>Namaste React functional component</h1>
        <h2>This is a h2 tag</h2>
    </div>
    );
};

const heading4=(
    <h1 id="title" key="h2">
        This is react element
    </h1>
);
//or you can write in this way also

// we will write like this
const HeaderComponent3=()=>(
    <div>
        {heading4}    // like this we can make use of react element inside our functional component
    
        <h1>Namaste Raect functional component</h1>
        <h2>This is a h2 tag</h2>
    </div>
);
const Title=()=>(
    <h1 id="title" key="h2">
        functional component
    </h1>
);

const HeaderComponent5=()=>{
    return(
        <div>
            <Title/> // this is known as component compositon 
                      // using component inside component
            <h2>
                This is how we can use functional component inside our another functional componet
            </h2>
        </div>
    )
}
// all are same like functional commponent returning jsx 

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent/>);


