import React from 'react';
import StyledLink from '../generic/StyledLink';
import styled from 'styled-components';
import Nav from './Nav';

const StyledHeader = styled.header`
  padding: 1rem ${({ theme }) => theme.paddingX};
  width: 100%;
  background-color: inherit;
  position: sticky;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 430px) {
    flex-direction: column;
    gap: 1.2rem;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <h1>
        <StyledLink to='/'>goodies</StyledLink>
      </h1>
      <Nav />
    </StyledHeader>
  );
};

export default Header;
