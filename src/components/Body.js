import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
    const [listOfRestaurant, setListOfRestaurant] = useState(resList);
    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={() =>
                    {
                        const filteredList = listOfRestaurant.filter(restaurant => restaurant.data.avgRating > 4);
                        setListOfRestaurant(filteredList);
                    }
                }>
                 Top Rated Restaurant
                </button>
            </div>
            <div className="res-container">
                {
                    listOfRestaurant.map((restaurant) => (<RestaurantCard key={restaurant.data.id} resData={restaurant.data} />))
                }
            </div>
        </div>
    );
    };

export default Body;