import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import BreakFast from "./components/BreakFast";
import Lunch from "./components/Lunch";
import Chef from "./components/Chef";
import ChefOrder from "./components/ChefOrder";
import WaiterOrder from "./components/WaiterOrder";
import Layout from "./components/Layout";
import NotFound from "./components/NotFound";
import "./scss/app.scss";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Layout>
          <Route path="/chef" component={Chef} />
          <Route path="/chefOrder" component={ChefOrder} />
          <Route path="/waiter" component={BreakFast} />
          <Route path="/waiterOrder" component={WaiterOrder} />
          <Route path="/fuerte" component={Lunch} />
        </Layout>
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
