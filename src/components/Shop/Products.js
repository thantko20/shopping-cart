import React from 'react';
import Product from './Product';
import uniqid from 'uniqid';

const Products = ({ products, addToCart, currentCategory = 'all' }) => {
  return (
    <div className='mx-auto grid w-fit grid-cols-productsXs items-center gap-10 md:grid-cols-productsSm lg:grid-cols-productsLg'>
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
