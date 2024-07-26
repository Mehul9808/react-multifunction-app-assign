import '../../App.css';

import ProductList from '../shoppingcart/ProductList';
import CartList from '../shoppingcart/CartList';
import { useState } from 'react';

function Addtocart({ handleShow, cart, addToCart, showCart }) {

  const [product, setProduct] = useState([
    {
      url: 'https://rukminim1.flixcart.com/image/300/300/l51d30w0/shoe/z/w/c/10-mrj1914-10-aadi-white-black-red-original-imagft9k9hydnfjp.jpeg?q=70',
      name: 'TRQSM White Shoes',
      category: 'Shoes',
      seller: 'AMZ Seller Ghz',
      price: 1999
    },
    {
      url: 'https://5.imimg.com/data5/KC/PC/MY-38629861/dummy-chronograph-watch-500x500.jpg',
      name: 'LOREM Watch Black',
      category: 'Watches',
      seller: 'Watch Ltd Siyana',
      price: 2599
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq39iB_cO6uhZ59vubrqVuYTJQH-4Qa0hU9g&usqp=CAU',
      name: 'AM Laptop 8GB RAM',
      category: 'Laptops',
      seller: 'Delhi Laptops',
      price: 50000
    },
   
  ])


  return (
    <div className="addtocart-container">
     
{showCart ? (
    <div className="cart-list">
        <CartList cart={cart} />
        </div>
      ) : (
        <div className="product-list">
        <ProductList product={product} addToCart={addToCart} />
        </div>
      )}


    </div>
  );
}
export default Addtocart;
