import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header/Header';

const Layout = () => {
  return (
    <div className='min-h-screen bg-white font-raleway'>
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
