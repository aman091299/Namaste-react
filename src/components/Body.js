import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import NoFilterData from "./NoFilterData";
import { swiggyApi } from "../constants";
import { Link } from "react-router";
const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  console.log("inside body res", restaurants);

  const filteringRestaurant = (nameOfRestaurant, restaurants) => {
    console.log(nameOfRestaurant);
    const data = restaurants.filter((restaurant) => {
      return restaurant.info.name
        .toLowerCase()
        .includes(nameOfRestaurant.toLowerCase().trim());
    });

    setFilteredRestaurants(data);
  };

  // if (restaurants.length === 0 ) {
  //   console.log("inside calling fetchdata ", restaurants);
  //   fetchData();

  // }

  const fetchData = async () => {
    try {
      console.log("inside fectch funtions");
      const data = await fetch(swiggyApi );
      const jsonData = await data.json();
      const restaurantsData =
        jsonData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
      setRestaurants(restaurantsData);
      setFilteredRestaurants(restaurantsData);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

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
            if (e.target.value === "") {
              setFilteredRestaurants(restaurants);
            }
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            filteringRestaurant(searchText, restaurants);
          }}
        >
          Search
        </button>
      </div>
      {restaurants.length === 0 ? (
        <Shimmer />
      ) : filteredRestaurants.length === 0 ? (
        <NoFilterData />
      ) : (
        <div className="restaurant-list">
          {filteredRestaurants.map((card) => {
            return (
              <Link to={"/restaurant/" + card?.info.id}  key={card?.info?.id}>
              <RestaurantCard {...card?.info} />
              </Link>
              );
          })}
        </div>
      )}
    </div>
  );
};

export default Body;
