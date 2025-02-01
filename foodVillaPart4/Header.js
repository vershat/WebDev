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
export default Header;