import React, { useState } from "react";
import fakeData from "../../fakeData";
import Cart from "../cart/Cart";
import Product from "../Product/Product";
import './Shop.css';

const Shop = () => {
  const first10 = fakeData.slice(0, 10);
  const [products, setProducts] = useState(first10);
  const [cart, setCart] = useState([])
  // console.log(first10);
  const handleClick = (product) => {
    // console.log('added' , product)
    const newCart = [...cart, product]
    setCart(newCart)
  }
  return (
    <div className="shop-container">
      <div className="product-container">
          {
            products.map(pd => <Product handleClick = {handleClick} product = {pd}></Product>)
          }
        
      </div>
      <div className="cart-container">
          <Cart cart= {cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
