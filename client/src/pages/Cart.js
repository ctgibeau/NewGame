import React from "react"
import CartList from '../components/CartList'

export default function Cart(props) {
    let cartTotal = 0
    const cartElements = props.cart.map(item => {
        cartTotal += item.quantity * item.price
        
        return(
            <CartList 
                key={item._id}
                {...item}
                handleChange = {props.handleChange}
                handleClick = {props.handleClick}
            />
        )
    })
    return(
        <section className="cart">
            <div className="cart-items">
                {cartElements}
            </div>
            <div className="cart-summary">
                <p>Total: {cartTotal.toFixed(2)}</p>
                <button>Checkout</button>
            </div>
        </section>
    )
}