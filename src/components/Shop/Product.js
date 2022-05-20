import React from 'react';

const Product = ({ productDetail, addToCart }) => {
  const { title, price, image: imgSrc } = productDetail;

  return (
    <div>
      <img src={imgSrc} alt={title} />
      <div>{title}</div>
      <div>{price}</div>
      <button onClick={() => addToCart}>Add To Cart</button>
    </div>
  );
};

export default Product;
