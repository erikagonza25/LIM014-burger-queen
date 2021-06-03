import React from 'react';

import Products from "./Products"

const Cart = ({cart, setCart}) => {
  return ( <div>
    <h1>Carrito</h1>
    {cart.length === 0 ? (  <p>0</p>) : (cart.map((product => <Products key={product.id} product={product} cart={cart} setCart={setCart} />)))}
  </div> )
}
 
export default Cart;