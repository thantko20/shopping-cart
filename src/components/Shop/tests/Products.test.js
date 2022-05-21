import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Products from '../Products';

jest.mock('../Product', () => ({ productDetail }) => (
  <>
    <div data-testid='title'>{productDetail.title}</div>
    <div data-testid='price'>{productDetail.price}</div>
    <div data-testid='category'>{productDetail.category}</div>
  </>
));

const products = [
  { title: '1', price: '1.99', category: 'clothes' },
  { title: '2', price: '2.99', category: 'clothes' },
  { title: '3', price: '5.99', category: 'electronics' },
];

const addToCart = jest.fn();

describe('Products componens', () => {
  it('renders', () => {
    const { container } = render(
      <Products products={products} addToCart={addToCart} />,
    );

    expect(container).toMatchSnapshot();
  });

  it('renders the products correctly when category isnt given', () => {
    render(<Products products={products} addToCart={addToCart} />);

    const totalProducts = screen.queryAllByTestId('title').length;
    const firstProductTitle = screen.queryAllByTestId('title')[0].textContent;
    const secondProductTitle = screen.queryAllByTestId('title')[1].textContent;
    const thirdProductTitle = screen.queryAllByTestId('title')[2].textContent;

    expect(totalProducts).toBe(3);
    expect(firstProductTitle).toBe('1');
    expect(secondProductTitle).toBe('2');
    expect(thirdProductTitle).toBe('3');
  });

  it('renders only clothes when the category is clothes', () => {
    render(
      <Products
        products={products}
        addToCart={addToCart}
        currentCategory='clothes'
      />,
    );
    const clothesProducts = screen.queryAllByTestId('category');

    expect(clothesProducts.length).toBe(2);
    expect(clothesProducts[0].textContent).toBe('clothes');
    expect(clothesProducts[1].textContent).toBe('clothes');
  });

  it('renders only electronics when the category is electronics', () => {
    render(
      <Products
        products={products}
        addToCart={addToCart}
        currentCategory='electronics'
      />,
    );

    const electronicsProducts = screen.queryAllByTestId('category');

    expect(electronicsProducts.length).toBe(1);
    expect(electronicsProducts[0].textContent).toBe('electronics');
  });

  it('renders nothing when the products array is empty', () => {
    render(<Products products={[]} addToCart={addToCart} />);

    expect(screen.queryAllByTestId('title').length).toBe(0);
  });
});
