import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Products from './Products';
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const Cart = ({ cart, setCart }) => {
  const itemsPrice = cart.reduce((a, c) => a + c.qty * c.price, 0);

  const deleteListProduct = (id) => {
    const existProducts = cart.find((product) => product.id === id);
    if (existProducts.qty === 1) {
      setCart(cart.filter((product) => product.id !== id));
    } else {
      setCart(
        cart.map((product) =>
          product.id === id ? { ...existProducts , qty: existProducts.qty - 1 } : product
        )
      );
    }
  }

  return (<section>
    <h1>Orden</h1>
    <form type='submit' action="">
      <span>Cliente:</span><input className='input' type="text" />
      <table>
        <thead>
          <tr>
            <th>Cantidad</th>
            <th>Producto</th>
            <th>Precio</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        {cart.length === 0 ? (<td>Cart Is Empty</td>) : (cart.map((product =>
          <tbody>
            <tr>
              <td> {product.qty} </td>
              <td><Products
                key={product.id} product={product}
                cart={cart} setCart={setCart} /></td>
              <td> ${product.price}</td>
              <td>
                <FontAwesomeIcon icon={faTrash} onClick={() => deleteListProduct(product.id)} />
              </td>
            </tr>
          </tbody>
        )))}
      </table>
      <hr></hr>
      <tfoot>
        <tr className='result'>
          <td colspan="2"> Total</td>
          <td > <strong>${parseFloat(itemsPrice).toFixed(2)}</strong> </td>
        </tr>
      </tfoot>
      <hr></hr>
      <button className='btnCancel'>Cancelar</button>
      <button className='btnSend'>Enviar</button>
    </form>
  </section>

  )
};

export default Cart;