import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import Store from './Store'
import Contact from './Contact'
import Item  from './Item'

export default function Pages() {
    return (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/store" element={<Store />} />
          <Route path="/cart" element={<Store />} />
          <Route path="/item/:itemId" element={<Item />} />
        </Routes>
    )
}