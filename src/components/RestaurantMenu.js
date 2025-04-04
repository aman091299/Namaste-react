import { useState,useEffect } from 'react';
import {useParams} from 'react-router';
import {IMG_URL} from '../constants';
import { useDispatch } from 'react-redux';
import { addToCart } from '../utils/cartSlice';

const RestaurantMenu =()=>{

     const [restaurant,setRestaurant]=useState([]);
     const [menuList,setMenuList]=useState([])
    const {restaurantId}=useParams();
    const dispatch=useDispatch();
    

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
 function addItem(item){
    dispatch(addToCart(item))
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
    <img src={IMG_URL+restaurant.cloudinaryImageId} className="w-20" alt="rest image"/>
    <h1>{restaurant.name}</h1>
        <h3>{restaurant.city}</h3>
        <h4>{restaurant.areaName}</h4>
        <h4>{restaurant.avgRating}</h4>
        <h4>{restaurant.cuisines}</h4>
    </div>

        <div className="menuList-container">
          Menu list
         {menuList?.map((card)=>
               (
                <div key={card.card.info?.id} className="menuList-items">
                   <div > 
                   <h3>{card.card.info?.name}</h3>
                   <h3> {card.card.info.price}</h3>
                   <h3>{card.card.info.ratings.aggregatedRating.rating 
                   }⭐</h3>
                   <h3>{card.card.info.description}</h3>

                   </div>
                  
                   <img className="w-20" src={IMG_URL+card.card.info.imageId} alt="food image" />
                   <button  className="bg-green-50 p-3 m-2" onClick={()=>addItem(card?.card?.info)}>Add to Cart</button>
                </div>
                
               ) 
         )}
        </div>
    </div>)
}

export default RestaurantMenu;