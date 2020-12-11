import React from 'react'
import "./Product.css"

function Product() {
    return (
        <div className = "product">
            <div className = "product__info">
                <p>product one</p>
                <p className = "product__price">
                    <small>$</small>
                    <strong>$9.99 </strong>
                </p>                
                <div className = "product__rating">
                    <p>⭐</p>
                    <p>⭐</p>
                    <p>⭐</p>
                    <p>⭐</p>
                </div>
            </div>

            <img src = "/images/TriniCarnivalBook.jpg" alt =""/>

            <button>Add to Cart</button>


        </div>
    )
}

export default Product
