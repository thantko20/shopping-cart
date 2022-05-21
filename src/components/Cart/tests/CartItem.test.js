import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import CartItem from '../CartItem';

const mockIncreaseQuantity = jest.fn();
const mockDecreaseQuantity = jest.fn();

const itemInfo = {
  title: 'test',
  image: 'some src',
  price: '4.99',
  quantity: '2',
  id: '1',
};

describe('CartItem component', () => {
  it('renders', () => {
    const { container } = render(
      <CartItem
        itemInfo={itemInfo}
        increaseQuantity={mockIncreaseQuantity}
        decreaseQuantity={mockDecreaseQuantity}
      />,
    );

    expect(container).toMatchSnapshot();
  });

  it('renders the information correctly', () => {
    render(
      <CartItem
        itemInfo={itemInfo}
        increaseQuantity={mockIncreaseQuantity}
        decreaseQuantity={mockDecreaseQuantity}
      />,
    );

    const title = screen.getByText('test');
    const img = screen.getByAltText('test');
    const price = screen.getByText('4.99');
    const quantity = screen.getByText('2');

    expect(title).toBeInTheDocument();
    expect(img).toBeInTheDocument();
    expect(price).toBeInTheDocument();
    expect(quantity).toBeInTheDocument();
  });

  it('increaseQuantiy button gets called when clicked', () => {
    render(
      <CartItem
        itemInfo={itemInfo}
        increaseQuantity={mockIncreaseQuantity}
        decreaseQuantity={mockDecreaseQuantity}
      />,
    );

    const button = screen.getByRole('button', { name: 'increase quantity' });

    userEvent.click(button);
    expect(mockIncreaseQuantity).toBeCalled();
  });

  it('decreaseQuantiy button gets called when clicked', () => {
    render(
      <CartItem
        itemInfo={itemInfo}
        increaseQuantity={mockIncreaseQuantity}
        decreaseQuantity={mockDecreaseQuantity}
      />,
    );

    const button = screen.getByRole('button', { name: 'decrease quantity' });

    userEvent.click(button);
    expect(mockDecreaseQuantity).toBeCalled();
  });
});
