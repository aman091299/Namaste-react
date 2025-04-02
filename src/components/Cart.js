
import {useSelector } from 'react-redux';
import FoodItems from './FoodItems';

const Cart=()=>{

const  cartItems=useSelector(store=>store.cart.items);
console.log("cartItems",cartItems)
    return(
        <>
        <div>Cart No.-- {cartItems.length}</div>
        {
         cartItems.map((card,index)=>(
            <FoodItems {...card} key={index}/>
         ))
        }
       
        </>
    )


    
}

export default Cart;