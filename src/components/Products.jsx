import React from "react";

const Product = ({ product, cart, setCart, Breakfast }) => {
  const { id, name, price } = product;
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
      <button>Agregar</button>
    </section>
  )
};

export default Product
