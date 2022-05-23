import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const CartItem = ({
  itemInfo: { title, image: imgSrc, price, quantity, id },

  increaseQuantity,
  decreaseQuantity,
}) => {
  return (
    <div className='flex w-full'>
      <img src={imgSrc} alt={title} className='mr-4 aspect-square w-[100px]' />
      <div>
        <div className='mb-2 font-bold'>{title}</div>
        <div className='flex items-center gap-4'>
          <span>Qty: </span>
          <span className='flex flex-col items-center justify-center gap-2'>
            <button
              onClick={() => increaseQuantity(id)}
              aria-label='increase quantity'
              className='flex h-5 w-5 items-center justify-center rounded-[50%] bg-slate-200 hover:bg-slate-300'
            >
              <FontAwesomeIcon icon={faCaretUp} />
            </button>
            <div className='font-semibold'>{quantity}</div>
            <button
              onClick={() => decreaseQuantity(id)}
              aria-label='decrease quantity'
              className='flex h-5 w-5 items-center justify-center rounded-[50%] bg-slate-200 hover:bg-slate-300'
            >
              <FontAwesomeIcon icon={faCaretDown} />
            </button>
          </span>
        </div>
      </div>
      <div className='ml-auto self-start'>
        <span className='align-top text-sm'>$</span>
        <span className='text-lg font-semibold'>{price}</span>
      </div>
    </div>
  );
};

export default CartItem;
