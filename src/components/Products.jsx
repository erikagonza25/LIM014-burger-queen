import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'


const Product = ({ product, cart, setCart, Products}) => {
  const { id, name, price, img} = product;

const addListProduct = () => {
  const exist = cart.find((products) => products.id === product.id);
  if (exist) {
    setCart(
      cart.map((products) =>
        products.id === product.id ? { ...exist, qty: exist.qty + 1 } : products
      )
    );
  } else {
    setCart([...cart, { ...product, qty: 1 }]);
  }
}

const deleteListProduct = () =>{
  const exist = cart.find((products) => products.id === product.id);
    if (exist.qty === 1) {
      setCart(cart.filter((products) => products.id !== product.id));
    } else {
      setCart(
        cart.map((products) =>
          products.id === product.id ? { ...exist, qty: exist.qty - 1 } : products
        )
      );
    }
}

  return (
    <div>
      <div className="profile-content">
        {Products ? ((<img src={img} alt="coffe" width="80px" />))
          : (<></>)}
        <div>{name}</div>
        {Products ? ((<div>${price}</div>))
          : (<></>)}
      </div>
      {Products ? ((<button className='btnAgregar' type="button" onClick={() => addListProduct(id)}>Agregar</button>))
        : (<FontAwesomeIcon icon={faTrash} onClick={() => deleteListProduct(id)} />)}
    </div>
  )
};

export default Product