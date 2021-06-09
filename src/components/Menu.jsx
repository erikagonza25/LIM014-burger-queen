import React, { Fragment, useState, useEffect } from "react";
import Product from './Products';
import OrderBreakFast from "./Cart"
import db from '../firebase/config'

const Menu = () => {
  const [Products, setMenu] = useState([]);
  const [Type, setType] = useState('breakfast');

  useEffect(() => {
    db.collection('products')
      .onSnapshot(snap => {
        const documents = [];
        snap.forEach(doc => {
            documents.push({ id: doc.id, ...doc.data() })
        });
        setMenu(documents.filter(doc => doc.type === Type));
      })
  }, [Products, Type])
  

  const [cart, setCart] = useState([])

  return (
    <body className="grid-container">
      <nav className="navbar">
            <ul>
            <li onClick={() => { setType('breakfast');}}>Desayuno</li>
            <li onClick={() => { setType('lunch'); }}>Fuerte</li>
            </ul>
          </nav>
      <main className="main">
        <section>
          <Fragment >
            <section className="containerBox">
            <section className="cards">
                {
                  Products.filter(product => product.type === Type).map((product) => (
                    
                    <Product
                      key={product.id}
                      product={product}
                      cart={cart}
                      setCart={setCart}
                      Products={Products}
                      img={product.img}
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

export default Menu;