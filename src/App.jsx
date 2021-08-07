import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import BnavBar from './components/bootsnavbar';
import Home from './components/Home/Home';
import ItemListContainer from './containers/ItemListContainer';
import ItemDetail from './containers/ItemDetail';
import Checkout from './containers/Checkout';
import { CartProvider } from './context/cartContext.jsx';
import AfterCheckout from './containers/AfterCheckout';

const App = () => {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="App">
          <BnavBar />
          <Switch>
            <Route exact path="/home" component={Home} />
            <Route exact path="/">
              <ItemListContainer />
            </Route>
            <Route path="/category/:id">
              <ItemListContainer />
            </Route>
            <Route path="/itemDetail/:id">
              <ItemDetail />
            </Route>
            <Route exact path="/Checkout">
              <Checkout />
            </Route>
            <Route exact path="/afterCheckout/:token/:name">
              <AfterCheckout />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}
export default App;
