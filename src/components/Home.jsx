import React from 'react';
import '../css/App.css';
import { NavLink } from 'react-router-dom'


const Home = () => {
  return (
    <section className="App">
      <img src='img/logoBQ.png' alt="logo" />
      <section className="formacion">
        <section className="alineacion">
          <img src='img/mozo.png' className="logo" alt="logo" />
          <NavLink to="/desayuno" className="buttonHome">
            Mozo
          </NavLink>
        </section>
        <section className="alineacion">
          <img src='img/cocina.png' className="logo" alt="logo" />
          <NavLink to="/chef" className="buttonHome">
            Chef
          </NavLink>
        </section>
      </section>
    </section>
  );
}

export default Home;
