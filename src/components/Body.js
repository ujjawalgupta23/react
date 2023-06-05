import { restaurantList } from "../config";
import RestaurantCard from "./RestaurantCard";

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

export default Body;
