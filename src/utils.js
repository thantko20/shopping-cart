import { useState, useEffect } from 'react';

const useCalculateTotalItems = (cart) => {
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    const newTotalItems = cart.reduce((prevItem, currItem) => {
      return prevItem.quantity + currItem.quantity;
    }, 0);

    setTotalItems(newTotalItems);
  }, [cart]);

  return totalItems;
};

const useCalculateTotalAmount = (cart) => {
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    const newTotalAmount = cart.reduce((prevItem, currItem) => {
      return (
        prevItem.price * prevItem.quantity + currItem.price * currItem.quantity
      );
    }, 0);

    setTotalAmount(newTotalAmount);
  }, [cart]);
};

export { useCalculateTotalItems, useCalculateTotalAmount };
