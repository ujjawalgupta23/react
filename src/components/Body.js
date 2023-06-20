import { restaurantList } from "../config";
import RestaurantCard from "./RestaurantCard";

import { useEffect, useState } from "react";

function filterData(searchText, restaurants) {
    return restaurants.filter((restaurant) =>
        restaurant.data.name.toLowerCase().includes(searchText.toLowerCase())
    );
}

const Body = () => {
    const [searchText, setSearchText] = useState("");
    const [searchClicked, setSearchClicked] = useState(false);

    const [restaurants, setRestaurant] = useState(restaurantList);

    useEffect(() => {
        getRestaurants();
    }, []);

    async function getRestaurants() {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.8537051&lng=80.9484195&sortBy=RELEVANCE&filters=%7B%22SHOW_RESTAURANTS_WITH%22%3A%5B%22Pure%20Veg%22%5D%7D&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();
        console.log(json);

        setRestaurant(json?.data?.cards[0]?.data?.data?.cards);
    }

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
