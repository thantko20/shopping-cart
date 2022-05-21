import { useState, useEffect } from 'react';

const useCalculateTotalItems = (cart) => {
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    const newTotalItems = cart.reduce((prev, curr) => {
      return prev + curr.quantity;
    }, 0);

    setTotalItems(newTotalItems);
  }, [cart]);

  return totalItems;
};

const useCalculateTotalAmount = (cart) => {
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    let newTotalAmount = cart.reduce((prev, curr) => {
      return prev + curr.price * curr.quantity;
    }, 0);

    newTotalAmount = parseFloat(newTotalAmount).toFixed(2);

    setTotalAmount(newTotalAmount);
  }, [cart]);

  return totalAmount;
};

export { useCalculateTotalItems, useCalculateTotalAmount };
