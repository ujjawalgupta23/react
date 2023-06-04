import React from "react";
import ReactDOM from "react-dom/client";
import restaurantList from "./data";

// React Element
const Title = () => (
    <a href="/">
        <img
            className="logo"
            src="https://cdn.cp.adobe.io/content/2/dcx/7bfaff9a-958a-4d26-bd10-9ead917802ad/rendition/preview.jpg/version/1/format/jpg/dimension/width/size/1200"
            alt="logo"
        />
    </a>
);

// React Components:-
// 1. Functional Component
// - it is a normal function
// - Name of the Component starts with Capital Letter

// This is a functional component returning JSX
const Header = () => (
    // with arrow fn. no need to return
    <div className="header">
        <Title />
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
);

// Config Driven UI

const RestaurantCard = ({ name, cuisines, cloudinaryImageId, avgRating }) => {
    // console.log(props);
    // const { name, cuisines, cloudinaryImageId, avgRating } = restaurant.data;
    return (
        <div className="card">
            <img
                src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${cloudinaryImageId}`}
                alt="restaurant card"
            />
            <h2>{name}</h2>
            <h3>{cuisines.join(", ")}</h3>
            <h4>{avgRating} stars</h4>
        </div>
    );
};

const Body = () => {
    return (
        <div className="restaurant-list">
            {/* <RestaurantCard restaurant={restaurantList[0]} /> */}
            {
                /* <RestaurantCard {...restaurantList[0].data} />
            <RestaurantCard {...restaurantList[1].data} />
            <RestaurantCard {...restaurantList[2].data} />
            <RestaurantCard {...restaurantList[3].data} />
            <RestaurantCard {...restaurantList[4].data} />
            <RestaurantCard {...restaurantList[5].data} />
            <RestaurantCard {...restaurantList[6].data} /> */
                // This has limitations, suppose i don't know no. of restaurants.
                // Then I have to use map
            }
            {restaurantList.map((restaurant) => (
                <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
            ))}
        </div>
    );
};

const Footer = () => <h4>Footer</h4>;

const AppLayout = () => {
    return (
        <React.Fragment>
            <Header />
            <Body />
            <Footer />
        </React.Fragment>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
