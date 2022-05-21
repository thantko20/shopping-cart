import React from 'react';
import CartItem from './CartItem';
import uniqid from 'uniqid';

const CartItemsWrapper = ({ cart, increaseQuantity, decreaseQuantity }) => {
  return (
    <div className='flex w-full flex-col gap-10 border-b-4 border-blue-300 py-8'>
      {cart.map((itemInfo) => (
        <CartItem
          itemInfo={itemInfo}
          increaseQuantity={increaseQuantity}
          decreaseQuantity={decreaseQuantity}
          key={uniqid()}
        />
      ))}
      {cart.length === 0 && (
        <div className='text-center text-lg text-gray-900'>
          You haven't put any item here!
        </div>
      )}
    </div>
  );
};

export default CartItemsWrapper;
