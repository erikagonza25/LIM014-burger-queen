import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'


const Product = ({ product, cart, setCart, Products }) => {
  const { id, name, price, idImg } = product;

  const addListProduct = () => {
    const exist = cart.find((x) => x.id === product.id);
    if (exist) {
      setCart(
        cart.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  }

  const deleteListProduct = () => {
    const exist = cart.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCart(cart.filter((x) => x.id !== product.id));
    } else {
      setCart(
        cart.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  }

  return (
    <section className="cards">
      <ul>
        {Products ? ((<img src={idImg} alt="coffe" width="50px" />))
          : (<></>)}

        <li>{name}</li>
        {Products ? ((<li>${price}</li>))
          : (<></>)}

      </ul>
      {Products ? ((<button type="button" onClick={() => addListProduct(id)}>Agregar</button>))
        : (<FontAwesomeIcon icon={faTrash} onClick={() => deleteListProduct(id)} />)}

    </section>
  )
};

export default Product
