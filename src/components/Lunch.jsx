import React, { Fragment, useState, useEffect } from "react";
import Product from './Products';
import OrderBreakFast from "./Cart"
import { NavLink } from "react-router-dom";
import db from '../firebase/config'

const Lunch = () => {
  const [Products, setLunch] = useState([]);
  useEffect(() => {
    db.collection('Lunch').orderBy('name', 'asc')
      .onSnapshot(snap => {
        const documents = [];
        snap.forEach(doc => {
          documents.push({ id: doc.id, ...doc.data() })
        });
        setLunch(documents);
      })
  }, [Products])

  const [cart, setCart] = useState([])

  return (
    <section>
      <header>
        <img src='img/logoBQ.png' alt="Logo" />
        <nav>
          <ul>
            <NavLink to="/">Inicio</NavLink>
            <NavLink to="/desayuno">Nueva Orden</NavLink>
            <NavLink to="/waiterOrder">Ordenes por entregar</NavLink>
          </ul>
        </nav>
      </header>
      <main>
        <section>
          <section className="containerMenu">
            <NavLink to="/desayuno">Desayuno</NavLink>
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
                    />

                  ))
                }
              </section>
            </section>
          </Fragment>
        </section>
        <OrderBreakFast
          cart={cart}
          setCart={setCart}

        />
      </main>
    </section>
  );
};

export default Lunch;
