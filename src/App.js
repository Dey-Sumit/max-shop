import React from 'react';
import HomePage from './Pages/HomePage/Homepage.page.jsx';
import ShopPage from './Pages/ShopPage/ShopPage.page.jsx';
import Header from './Components/header/header.component.jsx';
import {
  Route,
  Switch
} from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/shop' component={ShopPage}/>
      </Switch>
    </div>
  );
}

export default App;