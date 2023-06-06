import { restaurantList } from "../config";
import RestaurantCard from "./RestaurantCard";

import { useState } from "react";

function filterData(searchText, restaurants) {
    return restaurants.filter((restaurant) =>
        restaurant.data.name.toLowerCase().includes(searchText.toLowerCase())
    );
}

const Body = () => {
    const [searchText, setSearchText] = useState("");
    const [searchClicked, setSearchClicked] = useState(false);

    const [restaurants, setRestaurant] = useState(restaurantList);

    return (
        <>
            <div className="search-container">
                <input
                    type="text"
                    className="search-input"
                    placeholder="Search"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                />
                {/* <h1>{searchClicked.toString()}</h1> */}
                <button
                    className="search-btn"
                    // onClick={() => setSearchClicked(!searchClicked)}
                    onClick={() => {
                        const data = filterData(searchText, restaurants);
                        setRestaurant(data);
                    }}
                >
                    Search
                </button>
            </div>
            {/* <h1>{searchText}</h1> */}
            {/* {console.log(searchText)} */}
            <div className="restaurant-list">
                {restaurants.map((restaurant) => (
                    <RestaurantCard
                        {...restaurant.data}
                        key={restaurant.data.id}
                    />
                ))}
            </div>
        </>
    );
};

export default Body;
