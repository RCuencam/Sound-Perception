import React from 'react'
import {BrowserRouter as Router,
    Switch,
    Route,
    Redirect,} from "react-router-dom"
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Store from "../context/Store/StoreProvider";
import Cart from "../views/Cart";
import Home from "../views/Home";
import ListProducts from "../views/ListProducts";
import Product from "../views/Product";

function DashBoardRoutes() {
    return (
        <>
        <Navbar />
          <Switch>
              <Store>
                <Route exact path="/" component={Home}/>
                <Route exact path="/products/:category" component={ListProducts}/>
                <Route exact path="/products/:category/:id" component={Product}/>
                <Route path="/cart" component={Cart}/>
                <Redirect to="/" />
              </Store>
          </Switch>
        <Footer />
        </>
    )
}

export default DashBoardRoutes
