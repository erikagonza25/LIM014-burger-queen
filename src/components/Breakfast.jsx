import React, { Fragment, useState, useEffect } from "react";
import Product from './Products';
import OrderBreakFast from "./Cart"
import { NavLink } from "react-router-dom";
import db from '../firebase/config'

const Breakfast = () => {
  const [Products, setBreakfast] = useState([]);
  useEffect(() => {
    db.collection('Breakfast')
      .onSnapshot(snap => {
        const documents = [];
        snap.forEach(doc => {
          documents.push({ id: doc.id, ...doc.data() })
        });
        setBreakfast(documents);
      })
  }, [Products])


  const [cart, setCart] = useState([])

  return (
    <body className="grid-container">
      <header className="header">
        <nav>
          <ul className="list">
            <img src='img/logoBQ.png' alt="Logo" width='100px' />
            <NavLink className='items' to="/">Inicio</NavLink>
            <NavLink className='items' to="/desayuno">Nueva Orden</NavLink>
            <NavLink className='items' to="/waiterOrder">Ordenes por entregar</NavLink>
          </ul>
        </nav>
      </header>
      <main className="main">
        <section>
          <section className="containerMenu">
            <NavLink to="/waiter">Desayuno</NavLink>
            <NavLink to="/fuerte">Fuerte</NavLink>
          </section>
          <Fragment >
            <section className="containerBox">
              <section className="cards">
                {
                  Products.map((product) => (
                    <Product
                      key={product.id}
                      product={product}
                      cart={cart}
                      setCart={setCart}
                      Products={Products}
                      img={product.idImg}
                    />

                  ))
                }
              </section>
            </section>
          </Fragment>
        </section>
      </main>
      <aside className="sidebar">
        <OrderBreakFast
          cart={cart}
          setCart={setCart}
        />
      </aside>
    </body>
  );
};

export default Breakfast;
