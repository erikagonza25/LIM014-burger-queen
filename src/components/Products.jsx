import React from "react";

const Products = ({ product, cart, setCart, Products }) => {
  const { id, name, price, img } = product;

  const addListProduct = () => {
    const existProduct = cart.find((products) => products.id === product.id);
    if (existProduct) {
      setCart(
        cart.map((products) =>
          products.id === product.id ? { ...existProduct, qty: existProduct.qty + 1 } : products
        )
      );
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  }

  return (
    <section>
      <section className="profile-content">
        {Products ? ((<img src={img} alt="coffe" width="80px" />))
          : (<></>)}
        <section>{name}</section>
        {Products ? ((<section>${price}</section>))
          : (<></>)}
      </section>
      {Products ? ((<button className='btnAdd' type="button" onClick={() => addListProduct(id)}>Agregar</button>))
        : (<></>)}
    </section>
  )
};

export default Products