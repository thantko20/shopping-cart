import React from 'react';
import CartItem from './CartItem';
import uniqid from 'uniqid';

const CartItemsWrapper = ({ cart, increaseQuantity, decreaseQuantity }) => {
  return (
    <div>
      {cart.map((itemInfo) => (
        <CartItem
          itemInfo={itemInfo}
          increaseQuantity={increaseQuantity}
          decreaseQuantity={decreaseQuantity}
          key={uniqid()}
        />
      ))}
    </div>
  );
};

export default CartItemsWrapper;
