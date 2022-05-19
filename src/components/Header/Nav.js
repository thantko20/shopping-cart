import React from 'react';
import StyledLink from '../generic/StyledLink';

const Nav = () => {
  return (
    <ul>
      <li>
        <StyledLink to='/shop'>Shop</StyledLink>
      </li>
      <li>
        <StyledLink to='/about'>About</StyledLink>
      </li>
      <li>
        <StyledLink to='/cart'>Cart</StyledLink>
      </li>
    </ul>
  );
};

export default Nav;
