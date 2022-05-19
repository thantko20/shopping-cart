import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';
import StyledLink from '../generic/StyledLink';

const StyledNav = styled.ul`
  display: flex;
  gap: 2rem;
`;

const Nav = () => {
  return (
    <StyledNav>
      <li>
        <StyledLink to='/shop'>Shop</StyledLink>
      </li>
      <li>
        <StyledLink to='/about'>About</StyledLink>
      </li>
      <li aria-label='Cart Icon'>
        <StyledLink to='/cart'>
          <FontAwesomeIcon icon={faCartShopping} />
        </StyledLink>
      </li>
    </StyledNav>
  );
};

export default Nav;
