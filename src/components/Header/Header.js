import React from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';

const Header = () => {
  return (
    <header className='flex flex-col justify-between items-center px-10 py-3 lg:flex-row gap-4 mb-4 shadow-md sticky top-0 bg-inherit'>
      <h1 className='text-4xl font-bold font-lobster underline transition-colors duration-300 hover:text-blue-500'>
        <Link to='/'>goodies</Link>
      </h1>
      <Nav />
    </header>
  );
};

export default Header;
