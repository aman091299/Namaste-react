import { IMG_URL } from "../constants";
import { useContext, useState } from "react";
import UseContext from "../utils/UserContext";

const RestaurantCard =({name,cuisines,avgRating,cloudinaryImageId})=>{


 
  const {user}=useContext(UseContext);
  console.log("inside restaurantCard",user)
  console.log("inside restaurantCard use context",UseContext)

    const imageUrl = IMG_URL+cloudinaryImageId;
    return(
      <div>

<div className="m-4 p-4 bg-pink-50 w-50  break-words">
      <img  className="w-40" src={imageUrl} alt='restaurant logo'/>
      <h2>{name}</h2>
      <h3>{cuisines?.join(',')}</h3>
      <h4>{avgRating} stars</h4>
      <h4>{user?.name}</h4>
      </div>
      </div>

    )
  }

  export default RestaurantCard;