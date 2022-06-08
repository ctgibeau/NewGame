import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import Store from './Store'
import Contact from './Contact'
import Item  from './Item'
import Cart from './Cart'

export default function Pages(props) {
    return (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/store" element={<Store
            handleClick = {props.handleClick}
          />} />
          <Route path="/cart" element={<Cart 
          cart = {props.cart}
          handleClick = {props.handleClick}
          handleChange = {props.handleChange}
          />} />
          <Route path="store/item/:id" element={<Item />} />
        </Routes>
    )
}