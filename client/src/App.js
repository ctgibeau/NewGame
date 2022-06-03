import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Pages from './pages/Pages'

export default function App() {
  const [cart, setCart] = React.useState(
    () =>JSON.parse(localStorage.getItem("cart")) || [])

    React.useEffect(() => {
      localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart])

  async function addCart(event, itemId) {
    try {
        let response = await fetch(`api/item/${itemId}`);
        let data = await response.json();
        console.log(data)
        setCart(prevCart => {
          const newCart = [...prevCart, data]
          return newCart
  
      })
        
    } catch(err) {
        console.log(err)
    }
}

  return (
    <div className="App">
      <Navbar></Navbar>
      <Pages 
        cart = {cart}
        handleClick = {addCart}
      />
    </div>
  );
}
