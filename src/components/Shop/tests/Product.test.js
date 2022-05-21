import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Product from '../Product';
import userEvent from '@testing-library/user-event';

const productInfo = {
  id: 1,
  title: 'Product Title 1',
  price: '4.99',
  image: 'imagesource',
};

describe('Product component', () => {
  it('renders', () => {
    const { container } = render(<Product productDetail={productInfo} />);

    expect(container).toMatchSnapshot();
  });

  it('shows the product info correctly', () => {
    render(<Product productDetail={productInfo} />);

    const title = screen.getByText('Product Title 1');
    const price = screen.getByText('4.99');
    const img = screen.getByRole('img', { name: 'Product Title 1' });

    expect(title).toBeInTheDocument();
    expect(price).toBeInTheDocument();
    expect(img).toBeInTheDocument();
  });

  it('addToCart button is called when clicked', () => {
    const mockAddToCart = jest.fn();
    render(<Product productDetail={productInfo} addToCart={mockAddToCart} />);

    const button = screen.getByRole('button', { name: /add to cart/i });

    userEvent.click(button);
    expect(mockAddToCart).toHaveBeenCalled();
  });
});
