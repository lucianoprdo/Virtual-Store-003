import React from 'react';
import './App.css';
import { getCategories, getProductsFromCategoryAndQuery } from './services/api';

function App() {
  getCategories();
  getProductsFromCategoryAndQuery();

  return (
    <div className="App" />
  );
}

export default App;
