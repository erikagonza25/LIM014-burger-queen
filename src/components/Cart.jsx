import React from 'react';
import Products from "./Products"

const Cart = ({ cart, setCart }) => {
  const itemsPrice = cart.reduce((a, c) => a + c.qty * c.price, 0);

  return (<div>
    <h1>Orden</h1>
    <form type='submit' action="">
      <span>Cliente:</span><input className='input' type="text" />
        <table>
          <thead>
            <tr>
              <th>Cantidad</th>
              <th>Producto</th>
              <th>Precio</th>
            </tr>
          </thead>
          {cart.length === 0 ? (<p>Cart Is Empty</p>) : (cart.map((product =>
          <tbody>
            <tr>
              <td> {product.qty} </td>
              <td><Products
                key={product.id} product={product}
                cart={cart} setCart={setCart} /></td>
              <td> ${product.price}</td>
            </tr>
          </tbody>
       )))}
        </table>
      <hr></hr>
      <tfoot>
        <tr className='resultado'>
          <td colspan="2"> Total</td>
          <td class="PrecioTotal"> <strong>${parseFloat(itemsPrice).toFixed(2)}</strong> </td>
        </tr>
      </tfoot>
      <hr></hr>
      <button className='btnCancelar'>Cancelar</button>
      <button className='btnEnviar'>Enviar</button>
    </form>
  </div>

  )
};

export default Cart;