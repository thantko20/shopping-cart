import React, { useState } from 'react';
import RouteSwitch from './RouteSwitch';

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    const newCart = [...cart, item];
    setCart(newCart);
  };

  const deleteFromCart = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  };

  return (
    <RouteSwitch
      cart={cart}
      addToCart={addToCart}
      deleteFromCart={deleteFromCart}
    />
  );
};

export default App;
