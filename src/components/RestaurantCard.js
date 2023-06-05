import { IMG_CDN_URL } from "../config";

const RestaurantCard = ({ name, cuisines, cloudinaryImageId, avgRating }) => {
    // console.log(props);
    // const { name, cuisines, cloudinaryImageId, avgRating } = restaurant.data;
    return (
        <div className="card">
            <img src={IMG_CDN_URL + cloudinaryImageId} alt="restaurant card" />
            <h2>{name}</h2>
            <h3>{cuisines.join(", ")}</h3>
            <h4>{avgRating} stars</h4>
        </div>
    );
};

export default RestaurantCard;
