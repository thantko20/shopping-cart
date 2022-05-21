import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const CartItem = ({
  itemInfo: {
    title,
    image: imgSrc,
    price,
    quantity,
    id,
    increaseQuantiy,
    decreaseQuantity,
  },
}) => {
  return (
    <div>
      <img src={imgSrc} alt={title} />
      <div>
        <div>{title}</div>
        <div>
          <span>Qty: </span>
          <span>
            <button onClick={() => increaseQuantiy(id)}>
              <FontAwesomeIcon icon={faCaretUp} />
            </button>
            <div>{quantity}</div>
            <button onClick={() => decreaseQuantity(id)}>
              <FontAwesomeIcon icon={faCaretDown} />
            </button>
          </span>
        </div>
        <div>{price}</div>
      </div>
    </div>
  );
};

export default CartItem;
