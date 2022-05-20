import React from 'react';
import Product from './Product';

const Products = ({ products, addToCart, currentCategory = 'all' }) => {
  return (
    <div>
      {currentCategory === 'all'
        ? products.map((product) => (
            <Product
              productDetail={product}
              addToCart={addToCart}
              key={product.id}
            />
          ))
        : products
            .filter((product) => product.category === currentCategory)
            .map((product) => (
              <Product
                productDetail={product}
                addToCart={addToCart}
                key={product.id}
              />
            ))}
    </div>
  );
};

export default Products;
