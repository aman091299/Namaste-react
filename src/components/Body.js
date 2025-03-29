import RestaurantCard from "./RestaurantCard";
import { restaurants } from "../constants";
import { useState } from "react";
const Body = () => {
  const [searchText, setSearchText] = useState("");
  let [resultantRestaurants, setResultantRestaurants] = useState(restaurants);
  const searchRestaurant = (nameOfRestaurant) => {
    const data = restaurants.filter((restaurant) => {
      return restaurant?.info?.name
        .toLowerCase()
        .includes(nameOfRestaurant?.toLowerCase());
    });
    setResultantRestaurants(data);
  };
  return (
    <div className="body-container">
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={(e) => {
            searchRestaurant(searchText);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {resultantRestaurants?.map((card) => {
          return <RestaurantCard {...card?.info} key={card?.info?.id} />;
        })}
      </div>
    </div>
  );
};

export default Body;
