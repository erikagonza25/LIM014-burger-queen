import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home";
import Chef from "./components/Chef";
import ChefOrder from "./components/ChefOrder";
import WaiterOrder from "./components/WaiterOrder";
import Breakfast from "./components/Breakfast";
import Lunch from "./components/Lunch";
import "./scss/app.scss";

function App() {
  return (
    <div className='App'>
    <BrowserRouter>

      <Route path="/" exact={true}>
        <Home />
      </Route>

      <Route path="/chef">
        <Chef />
      </Route>

      <Route path="/chefOrder">
        <ChefOrder />
      </Route>

      <Route path="/desayuno">
      <Breakfast />
      </Route>

      <Route path="/waiterOrder">
        <WaiterOrder />
      </Route>

      <Route path="/fuerte">
        <Lunch />
      </Route>

    </BrowserRouter>
    </div>
  );
}

export default App;
