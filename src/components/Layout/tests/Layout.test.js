import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Layout from '../Layout';
import { BrowserRouter } from 'react-router-dom';

describe('Layout component', () => {
  it('renders', () => {
    const { container } = render(<Layout />, { wrapper: BrowserRouter });

    expect(container).toMatchSnapshot();
  });
});
