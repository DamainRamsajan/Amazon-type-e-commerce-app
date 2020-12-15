import React from 'react'
import "./Checkout.css"
import CheckoutProduct from './CheckoutProduct'
import { useStateValue } from './StateProvider';
//import { getBasketTotal } from './reducer'
import Subtotal from './Subtotal'

function Checkout() {
    const[{basket, user}] = useStateValue();
    console.log("checkout basket", {basket})
    
    return (
        <div className ="checkout">
            <div className = "checkout__left">
                <img className = "checkout__add" src="/images/fcbAd.jpg" alt ="" />

                <div >
                    <h2 className = "checkout__title">
                        Your Shopping Cart                
                    </h2>
                    <h3>{user?.email}</h3>

                    {basket.map(item => (
                        <CheckoutProduct
                            id= {item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}                        
                        />
                    ))}                   
                </div>

            </div>
            <div className = "checkout__right">
                <Subtotal/>                
            </div>          
        </div>
    )
}

export default Checkout
