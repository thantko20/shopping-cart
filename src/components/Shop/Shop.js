import React from 'react';
import Products from './Products';

const Shop = ({ products, addToCart }) => {
  return (
    <div className='mb-10'>
      <Products products={products} addToCart={addToCart} />
    </div>
  );
};

export default Shop;
