import React from 'react';

import Products from "./Products"

const Cart = ({ cart, setCart }) => {
  const itemsPrice = cart.reduce((a, c) => a + c.qty * c.price, 0);

  return (<div>
    <h1>Orden</h1>
    <form type='submit' action="">
      <span>Cliente:</span><input className='input' type="text" />
      {cart.length === 0 ? (<p>Cart Is Empty</p>) : (cart.map((product => <div><Products key={product.id}
        product={product} cart={cart} setCart={setCart} /><div>{product.qty} x ${parseFloat(product.price).toFixed(2)}
        </div></div>)))}{cart.length !== 0 && (
          <>
            <hr></hr>
            <div className="row">
              <div className="col-2">
                <strong>Total Price</strong>
              </div>
              <div className="col-1 text-right">
                <strong>${parseFloat(itemsPrice).toFixed(2)}</strong>
              </div>
            </div>
            <hr></hr>
          </>
        )}
      <button className='btnCancelar'>Cancelar</button>
      <button className='btnEnviar'>Enviar</button>
    </form>
  </div>

  )
};

export default Cart;