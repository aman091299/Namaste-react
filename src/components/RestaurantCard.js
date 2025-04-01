import { IMG_URL } from "../constants";

const RestaurantCard =({name,cuisines,avgRating,
  cloudinaryImageId})=>{

    
    const imageUrl = IMG_URL+cloudinaryImageId;
    return(
      <div className="m-4 p-4 bg-pink-50 w-50  break-words">
      <img  className="w-40" src={imageUrl} alt='restaurant logo'/>
      
      <h2>{name}</h2>
      <h3>{cuisines?.join(',')}</h3>
      <h4>{avgRating} stars</h4>
      </div>
    )
  }

  export default RestaurantCard;