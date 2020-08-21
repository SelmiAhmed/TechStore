import React, { Component } from "react";
import {Switch, Route} from 'react-router-dom'
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Cart from "./components/Cart/";
import Default from "./components/Default";
import Modal from './components/Modal';
import Login from "./Login";
import contact from "./contact";
import SearchBox  from './components/Searchbox'


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route exact path="/details" component={Details} />
          <Route exact path="/cart" component={Cart} />
<Route path="/Login" exact component={Login} />
<Route path="/contact" exact component={contact} />
<SearchBox/>
          <Route component={Default} />
        </Switch>
        <Modal />
      </React.Fragment>
    );
  }
}

export default App;
