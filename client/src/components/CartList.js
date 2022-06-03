import React from "react"
import cartIcon from '../images/bxs-cart.svg'

export default function Cart(props) {
    return (
        <div className="cart-list-item">
            <div className="cart-item-details">
                <img src={`/images/${props.img}`} alt="Dragonite-GX Pokemon card" className="cart--img"/>
                <h2 className="card--header">{props.title}</h2>
            </div>
            <div className="cart-stats">
                <span className="card--price">{`$${props.price}`}</span>
                <span className="button-container">
                <button className="button btn-cart" onClick={(event) => props.handleClick(event, props._id)}><img className="icon--cart" src={cartIcon} alt="Add to Cart"/></button>
            </span>
            </div>
        
        </div>
    )
}