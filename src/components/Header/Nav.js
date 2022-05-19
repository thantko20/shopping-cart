import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
        <StyledLink to='/cart'>
          <FontAwesomeIcon icon={faCartShopping} />
        </StyledLink>
      </li>
    </ul>
  );
};

export default Nav;
