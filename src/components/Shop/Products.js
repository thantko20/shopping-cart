import React from 'react';
import Product from './Product';
import uniqid from 'uniqid';

const Products = ({ products, addToCart, currentCategory = 'all' }) => {
  return (
    <div className='grid grid-cols-productsSm lg:grid-cols-productsLg gap-10 items-center w-fit mx-auto'>
      {currentCategory === 'all'
        ? products.map((product) => (
            <Product
              productDetail={product}
              addToCart={addToCart}
              key={uniqid()}
            />
          ))
        : products
            .filter((product) => product.category === currentCategory)
            .map((product) => (
              <Product
                productDetail={product}
                addToCart={addToCart}
                key={uniqid()}
              />
            ))}
    </div>
  );
};

export default Products;
