import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';

const RouteSwitch = ({ cart, addToCart, deleteFromCart }) => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};

export default RouteSwitch;
