import React from 'react';

const Product = ({ productDetail, addToCart }) => {
  const { title, price, image: imgSrc, id } = productDetail;

  return (
    <div className='w-[250px] h-[450px] text-sm shadow-md rounded-md flex flex-col'>
      <img
        src={imgSrc}
        alt={title}
        className='w-full aspect-square object-contain'
      />
      <div className='px-3 py-4 flex flex-col items-start flex-grow'>
        <div
          title={title}
          className='font-bold text-gray-700 mb-2 max-w-full overflow-hidden max-h-[7ch]'
        >
          {title}
        </div>
        <div>
          <span className='align-top text-xs'>$</span>
          <span className='text-sm font-semibold'>{price}</span>
        </div>
        <button
          onClick={() => addToCart(id)}
          className='mt-auto px-2 py-1 bg-blue-500 text-white font-semibold text-xs rounded border-2 border-blue-500 transition-colors duration-300 hover:text-black hover:bg-transparent'
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
