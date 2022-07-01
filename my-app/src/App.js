import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import catalogInfo from './CatalogMain.json';
import Header from './components/Header';
import CatalogRender from './components/CatalogMain';

let build = 2;

class App extends Component {
  render() {


    if (build = 1) {
      return (
        <div>
          <Header />
          <CatalogRender
            catalogInfo={catalogInfo}
          />
        </div>);

    }
    else if (build = 2) {
      return (
        <div>
          <Header />
        </div>);
    }


  }
}

export default App;
