import React from 'react';

const Product = ({ productDetail, addToCart }) => {
  const { title, price, image: imgSrc, key } = productDetail;

  return (
    <div key={key}>
      <img src={imgSrc} alt={title} />
      <div>{title}</div>
      <div>{price}</div>
      <button onClick={() => addToCart}>Add To Cart</button>
    </div>
  );
};

export default Product;
