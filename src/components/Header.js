import { useState } from "react";
import Logo from "../assets/img/food-waala.jpeg";
import { Link } from "react-router-dom";

// this is export by name
export const Title = () => (
    <a href="/">
        <img className="logo" src={Logo} alt="logo" />
    </a>
);

const loggedIn = () => {
    // Some Authentication
    return false;
};

const Header = () => {
    // with arrow fn. no need to return
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <div className="header">
            <Title />
            <div className="nav-items">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>

                    <li>
                        <Link to="/about">About Us</Link>
                    </li>

                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>Cart</li>
                </ul>
            </div>
            {isLoggedIn ? (
                <button onClick={() => setIsLoggedIn(false)}>Logout</button>
            ) : (
                <button onClick={() => setIsLoggedIn(true)}>Login</button>
            )}
        </div>
    );
};
// this is export by default
export default Header;
