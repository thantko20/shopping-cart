import React, { useState } from 'react';
import styled, { ThemeProvider, Outlet } from 'styled-components';
import theme from './styles/theme';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Shop from './components/Shop/Shop';
import Cart from './components/Cart/Cart';

const Layout = styled.div`
  min-height: 100vh;
`;

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
    <ThemeProvider theme={theme}>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
