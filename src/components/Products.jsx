import React from "react";
import Tachito from "../img/tachito.png"

const Product = ({ product, cart, setCart, Breakfast }) => {
  const { id, name, price } = product;

const addBreakFast = id => {
  const products = Breakfast.filter((product)=> product.id === id)
  setCart([...cart, ...products])
}

const deleteBreakFast = id =>{
  const product = cart.filter(product => product.id !== id)
  setCart(product)
}

  return (
    <section className="cards">
      <ul>
        <li>{id}</li>
        <li>{name}</li>
        <li>${price}</li>
      </ul>
      <i>+</i>
      <input type="number" />
      <i>-</i>
      {Breakfast ? (( <button type="button" onClick={() => addBreakFast(id)}>Agregar</button>)) 
      : (<button type="button" onClick={() => deleteBreakFast(id)}><img src={Tachito} alt="logo" width="30px" /></button>)}
     
    </section>
  )
};

export default Product
