import React, { Fragment, useState, useEffect } from "react";
import Product from './Products';
import OrderBreakFast from "./OrderBreakFast"
import { NavLink } from "react-router-dom";
import logoBq from "../img/logoBQ.png";
import db from '../firebase/config'

const Waiter = () => {
  const [Breakfast, setBreakfast] = useState([]);
  useEffect(() => {
    db.collection('Breakfast')
      .onSnapshot(snap => {
        const documents = [];
        snap.forEach(doc => {
          documents.push({ id: doc.id, ...doc.data() })
        });
        setBreakfast(documents);
      })
  }, [Breakfast])

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
            <NavLink to="/desayuno">Desayuno</NavLink>
            <NavLink to="/fuerte">Fuerte</NavLink>
          </section>
          <Fragment >
            <section className="containerBox">
              <section className="cards">
                {
                  Breakfast.map((product) => (
                    <Product
                      key={product.id}
                      product={product}
                      cart={cart}
                      setCart={setCart}
                      Breakfast={Breakfast}
                    />

                  ))
                }
              </section>
            </section>
            <OrderBreakFast 
            cart={cart}
            setCart={setCart}
            
            />
          </Fragment>
        </section>

      </main>
    </section>
  );
};

export default Waiter;