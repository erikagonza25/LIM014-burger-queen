import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home";
import Chef from "./components/Chef";
import ChefOrder from "./components/ChefOrder";
import Waiter from "./components/Waiter";
import WaiterOrder from "./components/WaiterOrder";
import "./scss/app.scss";

function App() {
  return (
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

      <Route path="/waiter">
        <Waiter />
      </Route>

      <Route path="/waiterOrder">
        <WaiterOrder />
      </Route>
    </BrowserRouter>
  );
}

export default App;
