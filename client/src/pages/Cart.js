import React from "react"
import CartList from '../components/CartList'

export default function Cart(props) {

    let cartTotal = 0
    const cartElements = props.cart.map(item => {
        cartTotal += item.price
        
        return(
            <CartList 
                key={item._id}
                {...item}
            />
        )
    })
    return(
        <section className="cart">
            {cartElements}
            <p>Total: {cartTotal}</p>
        </section>
    )
}