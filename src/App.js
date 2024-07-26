import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Mytodolist from './components/Mytodo.jsx';
import Navbar from './components/Navbar'
import Addtocart from './components/shoppingcart/Addtocart'
import CartList from './components/shoppingcart/CartList'
import Weather from './components/weatherapp/Weather.jsx'
import Homepage from './components/Homepage.jsx'
import AboutUs from './components/AboutUs'
import Contact from './components/Contact'
import { useState } from 'react';



function App() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const addToCart = (data) => {
    setCart([...cart, { ...data, quantity: 1 }]);
  };

  const handleShow = (value) => {
    setShowCart(value);
  };


  return (
    
    <Router>
      <Navbar  count={cart.length} handleShow={handleShow}/>
    <Routes>
      <Route path="/" exact element={<Homepage />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/todo" element={<Mytodolist />} />
      <Route path="/cart" element={<Addtocart handleShow={handleShow}
        cart={cart}
        addToCart={addToCart}
        showCart={showCart} />} />
        <Route path="/cartpage" element={<CartList />} />
      <Route path="/weather" element={<Weather />} />
    </Routes>
  </Router>
  );
}

export default App;
