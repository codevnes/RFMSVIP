import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import ProductDetail from './components/ProductDetail';
impor

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/">
            <ProductList />
          </Route>
          <Route path="/product/:id">
            <ProductDetail />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;