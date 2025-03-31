import { useState,useEffect } from 'react';
import {useParams} from 'react-router';
import {IMG_URL} from '../constants'

const RestaurantMenu =()=>{
     const [restaurant,setRestaurant]=useState([]);
     const [menuList,setMenuList]=useState([])
    const {restaurantId}=useParams();
    

    const getMenuItems=async()=>{
        try {
            const data=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.473632&lng=78.558398&restaurantId=" + restaurantId + "&catalog_qa=undefined&submitAction=ENTER");
            const json=await data.json();
            setMenuList(json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards)
            setRestaurant(json.data.cards[2].card.card.info)
        } catch (error) {
            console.log(error)
        }
        
      }

 useEffect(()=>{
    getMenuItems();
    const timer=setInterval(()=>{
 console.log("hey i am timer");
    },1000)

    return ()=>{
        clearInterval(timer);
     
     }
    
 },[])
  

    return (
    <div>
    <div className="menuList">
    <img src={IMG_URL+restaurant.cloudinaryImageId} alt="rest image"/>
    <h1>{restaurant.name}</h1>
        <h3>{restaurant.city}</h3>
        <h4>{restaurant.areaName}</h4>
        <h4>{restaurant.avgRating}</h4>
        <h4>{restaurant.cuisines}</h4>
    </div>

        <div className="menuList-container">
          Menu list
         {menuList?.map((card)=>{
               return(
                <div key={card.card.info?.id} className="menuList-items">
                   <div > 
                   <h3>{card.card.info?.name}</h3>
                   <h3> {card.card.info.price}</h3>
                   <h3>{card.card.info.ratings.aggregatedRating.rating 
                   }⭐</h3>
                   <h3>{card.card.info.description}</h3>

                   </div>
                  
                   <img src={IMG_URL+card.card.info.imageId} alt="food image" />
                </div>
               ) 
         })}
        </div>
    </div>)
}

export default RestaurantMenu;