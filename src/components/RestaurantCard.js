
const RestaurantCard =({name,cuisines,avgRating})=>{

    return(
      <div className='card'>
      <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/11/22/ffb555da-2d9f-4561-bf9c-5d799a310db3_490849.jpg"  alt='restaurant logo'/>
      <h2>{name}</h2>
      <h3>{cuisines?.join(',')}</h3>
      <h4>{avgRating} stars</h4>
      </div>
    )
  }

  export default RestaurantCard;