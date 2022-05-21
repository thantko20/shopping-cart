import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CartItemsWrapper from '../CartItemsWrapper';

jest.mock('../CartItem', () => ({ itemInfo }) => (
  <>
    <div data-testid='title'>{itemInfo.title}</div>
    <div data-testid='price'>{itemInfo.price}</div>
  </>
));

const cart = [
  { title: 'test 1', price: '0.99' },
  { title: 'test 2', price: '3.99' },
];

describe('CartItemsWrapper component', () => {
  it('renders', () => {
    const { container } = render(<CartItemsWrapper cart={cart} />);
    expect(container).toMatchSnapshot();
  });

  it('renders the correct amount of CartItem component', () => {
    render(<CartItemsWrapper cart={cart} />);

    expect(screen.queryAllByTestId('title').length).toBe(2);
  });

  it("renders the correct products' info", () => {
    render(<CartItemsWrapper cart={cart} />);

    const productsTitles = screen.queryAllByTestId('title');
    expect(productsTitles[0].textContent).toBe('test 1');
    expect(productsTitles[1].textContent).toBe('test 2');
  });

  it("shows 'you haven't put any item here' message when the cart is empty", () => {
    render(<CartItemsWrapper cart={[]} />);

    const message = screen.getByText(/you haven't put any item here!/i);

    expect(message).toBeInTheDocument();
  });
});
