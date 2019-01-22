import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Sub from './pages/sub/sub'
import store from './store';
import logo from './logo.svg';
import Menu from './pages/menu/menu'
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
     <Provider store={store}>
        <BrowserRouter>
          <div className="app">
            <Sub>
            
            </Sub>
            <Route path="/" component={Menu} ></Route>
          </div>
        </BrowserRouter>
     </Provider>
    );
  }
}

export default App;
