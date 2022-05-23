import React, { useEffect, useState } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Shop from './components/Shop/Shop';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import { useCalculateTotalAmount, useCalculateTotalItems } from './utils';

const App = () => {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  const totalItems = useCalculateTotalItems(cart);
  const totalAmount = useCalculateTotalAmount(cart);

  useEffect(() => {
    loadProductsFromApi();
  }, []);

  const loadProductsFromApi = async () => {
    const req = await fetch('https://fakestoreapi.com/products/', {
      mode: 'cors',
    });
    const response = await req.json();

    setProducts(response);
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

  const increaseItemQuantity = (id) => {
    const tempCart = [...cart];
    const index = tempCart.findIndex((item) => item.id === id);
    tempCart[index].quantity += 1;

    setCart(tempCart);
  };

  const decreaseItemQuantity = (id) => {
    let tempCart = [...cart];
    const index = tempCart.findIndex((item) => item.id === id);
    tempCart[index].quantity -= 1;

    if (tempCart[index].quantity === 0) {
      tempCart = tempCart.filter((item) => item.id !== id);
    }

    setCart(tempCart);
  };

  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Layout totalItems={totalItems} />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route
            path='shop'
            element={
              <Shop
                products={products}
                addToCart={addToCart}
                loadProducts={loadProductsFromApi}
              />
            }
          />
          <Route
            path='cart'
            element={
              <Cart
                cart={cart}
                increaseQuantity={increaseItemQuantity}
                decreaseQuantity={decreaseItemQuantity}
                totalAmount={totalAmount}
              />
            }
          />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;
