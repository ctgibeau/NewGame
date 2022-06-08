import React from "react"

export default function Cart(props) {

    const options = []
    for(let i = 0; i <= props.stock; i++) {
        options.push(<option key={i} value={i}>{i}</option>)
    }
    
    return (
        <div className="cart-list-item">
            <div className="cart-item-details">
                <img src={`/images/${props.img}`} alt="Dragonite-GX Pokemon card" className="cart--img"/>
                <h2 className="card--header">{props.title}</h2>
            </div>
            <div className="cart-stats">
                <label htmlFor="quantity">Quantity:</label>
                <select name="quantity" value={props.quantity} onChange={(event => props.handleChange(event, props._id))}>
                    {options}
                </select>
                <span className="card--price">{`$${props.price}`}</span>
                <span className="button-container">
                <button className="cart-btn-remove" onClick={(event) => props.handleClick(event, props._id)}>Remove</button>
            </span>
            </div>
        
        </div>
    )
}