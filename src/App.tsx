import React from 'react';
import logo from './logo.svg';
import './App.css';
import { getCategories, getProductsFromCategoryAndQuery } from './services/api';

function App() {
  getCategories();
  getProductsFromCategoryAndQuery('MLB1144', 'Games');

  return (
    <div className="App" />
  );
}

export default App;
