import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';

const Layout = ({ totalItems }) => {
  return (
    <div className='flex min-h-screen flex-col bg-white font-raleway'>
      <Header totalItems={totalItems} />
      <Outlet />
    </div>
  );
};

export default Layout;
