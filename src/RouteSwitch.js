import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const RouteSwitch = ({ cart, addToCart, deleteFromCart }) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/shop' element={<Shop addToCart={addToCart} />} />
          <Route path='/about' element={<About />} />
          <Route
            path='/cart'
            element={<Cart cart={cart} deleteFromCart={deleteFromCart} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
