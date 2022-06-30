import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import catalogInfo from './CatalogMain.json';
import Header from './components/Header';
import CatalogRender from './components/CatalogMain';

class App extends Component {
  render() {
    return (<div>
      <Header />
      <CatalogRender
        catalogInfo={catalogInfo}
      />
    </div>
    );
  }
}

export default App;
