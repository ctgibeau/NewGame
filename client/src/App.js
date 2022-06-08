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

  function handleChange(event, itemId) {
    if(event.target.value === "0") {
      let newCart = cart.filter(item => item._id !== itemId)
      setCart(() => newCart)
    } 
    else {
    setCart(prevCart => {
      let newCart = prevCart.map(item => {
        if(item.quantity > item.stock) {
          item.quantity = item.stock
        }
        return ({
        ...item,
        quantity: item._id === itemId ? event.target.value : item.quantity 
      })})
      return newCart
    })
  }
  }

  async function handleClick(event, itemId) {
    if (event.target.innerText === "Remove") {
      let newCart = cart.filter(item => item._id !== itemId)
      //localStorage.setItem("cart", JSON.stringify(newCart))
      setCart(() => {
        return newCart
      })
    } 
    else {
      
      if(cart.find(item => item._id === itemId)) {
        setCart(prevCart => {
          let newCart = prevCart.map(item => ({
            ...item,
            quantity: item._id === itemId ? item.quantity < item.stock ? item.quantity += 1 : item.quantity : 1 
          }))
          console.log(newCart[0].quantity)
          return newCart
        })
      } 
      else { 
        try {
          let response = await fetch(`api/item/${itemId}`);
          let data = await response.json()
          data.quantity = 1
          setCart(prevCart => {
            let newCart = [...prevCart, data]
            return newCart
          })
        }
        catch(err) {
          console.log(err)
        }
      }
    }
  }

  return (
    <div className="App">
      <Navbar></Navbar>
      <Pages 
        cart = {cart}
        handleClick = {handleClick}
        handleChange = {handleChange}
      />
    </div>
  );
}
