import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Header from './Header/Header';

const StyledLayout = styled.div`
  min-height: 100vh;
`;

const Layout = () => {
  return (
    <StyledLayout>
      <Header />
      <Outlet />
    </StyledLayout>
  );
};

export default Layout;
