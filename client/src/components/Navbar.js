import React from "react"
import Logo from "./Logo"
import logo from '../images/logo.png'
import cartIcon from '../images/bxs-cart.svg'
import homeIcon from '../images/bxs-home.svg'
import storeIcon from '../images/bxs-store-alt.svg'
import contactIcon from '../images/bxs-message-alt-check.svg'
import { Link } from 'react-router-dom'


export default function Navbar(props) {
    return (
        <header className="app--header">
            <nav className="app--nav">
                <Logo isMain={true} src={logo} alt="Store Logo"/>
                <h1 className="nav--header">New Game Plus</h1>
                <ul className="nav--links">
                    <li className="nav--item"> 
                        <Link to="/"><Logo src={homeIcon} alt="Home page"/></Link>
                    </li>
                    <li className="nav--item">
                        <Link to="/store"><Logo src={storeIcon} alt="Store page"/></Link>
                    </li>
                    <li className="nav--item">
                        <Link to="/cart">
                            <Logo src={cartIcon} alt="Cart page"/>
                        </Link>
                    </li>
                    <li className="nav--item">
                        <Link to="/contact">
                            <Logo src={contactIcon} alt="Contact page"/>
                        </Link>
                    </li>
                </ul>
            </nav> 
        </header>
    )
}