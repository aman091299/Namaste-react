import { IMG_URL } from "../constants";

const FoodItems = ({name,price,ratings,imageId,description}) => {
  return (
    <>
      <div className="bg-pink-50 p-3 m-3">
           
      <img
        className="w-20"
        src={IMG_URL + imageId}
        alt="food image"
      />
        <h3>{name}</h3>
        <h3> {price}</h3>
        <h3>{ratings?.aggregatedRating?.rating}⭐</h3>
        <h3>{description}</h3>
   
      </div>

    </>
  );
};

export default FoodItems;
