import React from 'react';

const Product = ({ productDetail, addToCart }) => {
  const { title, price, image: imgSrc, id } = productDetail;

  return (
    <div className='flex h-[450px] w-[250px] flex-col rounded-md shadow-md'>
      <img
        src={imgSrc}
        alt={title}
        className='aspect-square w-full object-contain'
      />
      <div className='flex flex-grow flex-col items-start bg-slate-100 px-3 py-4'>
        <div
          title={title}
          className='mb-4 max-h-[7ch] max-w-full overflow-hidden font-bold text-gray-900'
        >
          {title}
        </div>
        <div>
          <span className='align-top text-xs'>$</span>
          <span className='font-medium text-gray-900'>{price}</span>
        </div>
        <button
          onClick={() => addToCart(id)}
          className='mt-auto rounded border-2 border-blue-500 bg-blue-500 px-2 py-1 text-sm font-semibold text-white transition-colors duration-300 hover:bg-transparent hover:text-black'
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
