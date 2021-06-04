import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'


const Product = ({ product, cart, setCart, Products}) => {
  const { id, name, price } = product;

const addBreakFast = () => {
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

const deleteBreakFast = () =>{
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
        <li>{name}</li>
        {Products ? (( <li>${price}</li>)) 
      : (<></>)}
        
      </ul>
      {Products ? (( <button type="button" onClick={() => addBreakFast(id)}>Agregar</button>)) 
      : (<FontAwesomeIcon icon={faTrash} onClick={() => deleteBreakFast(id)} />)}
     
    </section>
  )
};

export default Product
