import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Shop from './components/Shop/Shop';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';

const App = () => {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const req = await fetch('https://fakestoreapi.com/products/');
      const response = await req.json();

      setProducts(response);
    } catch {
      console.log('error');
    }
  };

  const addToCart = (id) => {
    const tempCart = [...cart];
    if (tempCart.some((item) => item.id === id)) {
      const index = tempCart.findIndex((item) => item.id === id);
      tempCart[index].quantity += 1;
    } else {
      const item = {
        ...products.find((product) => product.id === id),
        quantity: 1,
      };
      tempCart.push(item);
    }

    setCart(tempCart);
  };

  const deleteFromCart = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route
            path='shop'
            element={<Shop products={products} addToCart={addToCart} />}
          />
          <Route path='cart' element={<Cart cart={cart} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
