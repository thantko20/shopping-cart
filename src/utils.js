import { useState, useEffect } from 'react';

const useTotalItems = (cart) => {
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    const newTotalAmount = cart.reduce((prevItem, currItem) => {
      return prevItem.quantity + currItem.quantity;
    }, 0);

    setTotalItems(newTotalAmount);
  }, [cart]);

  return totalItems;
};
