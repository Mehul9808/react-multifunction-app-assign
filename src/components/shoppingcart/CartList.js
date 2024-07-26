// CartList Component
// Displays a list of cart items with functionality to adjust item quantities and calculate total price.

import { useEffect, useState } from 'react';
import '../../App.css';

function CartList({ cart }) {
  // State to store the current cart items
    const [CART, setCART] = useState([])
  // useEffect to update the CART state whenever the cart prop changes
    useEffect(() => {
        setCART(cart)
    }, [cart])

    return (
        <div  className="cart-container">

             {/* Map through the CART items and display each item  */}
            {
                CART?.map((cartItem, cartindex) => {
                    return (
                        <div className="cart-item" >
                            <img src={cartItem.url} width={40} />
                            <div>
                            <label className="cart-item-label" htmlFor={`item-name-${cartindex}`}>
                            Item:
                        </label>
                            <span> {cartItem.name} </span>
                            </div>
                            <button  className="quantity-btn decrement-btn"
                                onClick={() => {
                                    const _CART = CART.map((item, index) => {
                                        return cartindex === index ? { ...item, quantity: item.quantity > 0 ? item.quantity - 1 : 0 } : item
                                    })
                                    setCART(_CART)
                                }}
                            >-</button>
                            <div>
                             <label className="cart-item-label" htmlFor={`item-quantity-${cartindex}`}>
                            Quantity:
                        </label>
                            <span> {cartItem.quantity} </span>
                            </div>
                            <button  className="quantity-btn increment-btn"
                                onClick={() => {
                                    const _CART = CART.map((item, index) => {
                                        return cartindex === index ? { ...item, quantity: item.quantity + 1 } : item
                                    })
                                    setCART(_CART)
                                }}
                            >+</button>
                            <div>
                             <label className="cart-item-label" htmlFor={`item-price-${cartindex}`}>
                            Price:
                        </label>
                            <span> Rs. {cartItem.price * cartItem.quantity} </span>
                            </div>
                        </div>
                    )
                })
            }

            <p className="total-amount-para"> Total: Rs. &nbsp; <span></span>
                {
                    CART.map(item => item.price * item.quantity).reduce((total, value) => total + value, 0)
                }
            </p>
        </div >
    )
}

export default CartList;