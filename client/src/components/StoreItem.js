import React from "react"
import { Link } from 'react-router-dom'
import cartIcon from '../images/bxs-cart.svg'
import infoIcon from '../images/bxs-info-circle.svg'


export default function StoreItem(props) {
    
    return (
        <div className="card"> 
            <img src={`/images/${props.img}`} alt="Dragonite-GX Pokemon card" className="card--img"/>
            <h2 className="card--header">{props.title}</h2>
            <div className="card--stats">
                <span className="card--rarity">{props.rarity}</span>
                <span className="card--price">{`$${props.price}`}</span>
            </div>
            <p className="card--text">{props.description}</p>
            <div className="button-container">
                <button className="button btn-cart" onClick={(event) => props.handleClick(event, props._id)}><img className="icon--cart" src={cartIcon} alt="Add to Cart"/></button>
                <Link className="button btn-info" to={`item/${props._id}`}><img className="icon--cart" src={infoIcon} alt="Add to Cart"/></Link>
            </div>
        </div>
        
    )
}