import React from 'react';
import CartItemsWrapper from './CartItemsWrapper';

const Cart = ({ cart, increaseQuantity, decreaseQuantity, totalAmount }) => {
  return (
    <div className='mx-auto mb-10 w-[95%] max-w-[800px]'>
      <h2 className='border-b-4 border-blue-300 text-lg font-bold'>
        Catalogue
      </h2>
      <CartItemsWrapper
        cart={cart}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
      />
      <div className='my-4 text-right text-lg'>
        Total Amount: <span className='align-top text-sm'>$</span>
        <span className='font text-lg font-semibold'>{totalAmount}</span>
      </div>
      <button className='float-right rounded border-2 border-blue-500 bg-blue-500 px-5 py-3 font-bold text-white transition-colors hover:bg-transparent hover:text-gray-900'>
        Checkout
      </button>
    </div>
  );
};

export default Cart;
