import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Detalhes from './components/Detalhes/Detalhes';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/Cart" element={ <Cart /> } />
      <Route path="/:id" element={ <Detalhes /> } />
    </Routes>
  );
}
export default App;
