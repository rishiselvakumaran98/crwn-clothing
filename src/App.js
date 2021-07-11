import {BrowserRouter, Switch, Route} from 'react-router-dom'
import React from 'react';

import Homepage from './pages/homepage/homepage.components'
import ShopPage from './pages/shop/shop.components'
import Header from './components/header/header.components'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header/>
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={ShopPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
