// src/components/Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';


function Navbar(props) {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" onClick={() => props.handleShow(false)}>
          My App
        </Link>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/" onClick={() => props.handleShow(false)}>Home</Link>
        </li>
        <li>
          <Link to="/todo" onClick={() => props.handleShow(false)}>To-Do List</Link>
        </li>
        <li>
          <Link to="/cart" onClick={() => props.handleShow(false)}>Shopping Cart</Link>
        </li>
        <li>
          <Link to="/weather" onClick={() => props.handleShow(false)}>Weather App</Link>
        </li>
        <li>
          <Link to="/about" onClick={() => props.handleShow(false)}>About Us</Link>
        </li>
        <li>
          <Link to="/contact" onClick={() => props.handleShow(false)}>Contact</Link>
        </li>
        <li className="cart-link">
          {/* <Link to="/addtocart" onClick={() => props.handleShow(true)}>
            Cart <sup>{props.count}</sup>
          </Link> */}
          <div onClick={() => props.handleShow(true)}> Cart
                <sup> {props.count} </sup>
            </div>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
