import React, { Fragment, useState, useEffect } from "react";
import Product from './Products';
import OrderBreakFast from "./Cart"
import { NavLink } from "react-router-dom";
import logoBq from "../img/logoBQ.png";
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
    <section>
      <header>
        <img src={logoBq} alt="Logo" />
        <nav>
          <ul>
            <NavLink to="/">Inicio</NavLink>
            <NavLink to="/waiter">Nueva Orden</NavLink>
            <NavLink to="/waiterOrder">Ordenes por entregar</NavLink>
          </ul>
        </nav>
      </header>
      <main>
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

export default Breakfast;