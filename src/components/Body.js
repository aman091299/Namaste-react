import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import NoFilterData from "./NoFilterData";
import { swiggyApi } from "../constants";
import { Link } from "react-router";
import useOnline from  '../utils/Online'

const Body = () => {

  const [searchText, setSearchText] = useState("");
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);



  const filteringRestaurant = (nameOfRestaurant, restaurants) => {
 
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
   
      const data = await fetch(swiggyApi );
      const jsonData = await data.json();
      const restaurantsData =
        jsonData?.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      setRestaurants(restaurantsData);
      setFilteredRestaurants(restaurantsData);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);


  

  if(!useOnline()){
    return <h1>🔴 Hey ! Your are offline</h1>
  }

  return (
    <div className="m-4">
      <div className="m-3">
    
        <input
        className="w-64  border-black border-2 rounded mx-3 p-1"
          type="text"
         
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
          className="bg-blue-600 rounded text-white p-2 "
          onClick={() => {
            filteringRestaurant(searchText, restaurants);
          }}
        >
          Search
        </button>
      </div>
      {restaurants?.length === 0 ? (
        <Shimmer />
      ) : filteredRestaurants?.length === 0 ? (
        <NoFilterData />
      ) : (
        <div className="flex flex-wrap">
          {filteredRestaurants?.map((card) => {
            return (
              <Link to={"/restaurant/" + card?.info.id}  key={card?.info?.id}>
              <RestaurantCard {...card?.info}  />
              </Link>
              );
          })}
        </div>
      )}
    </div>
  );
};

export default Body;
