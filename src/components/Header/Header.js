import React from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';

const Header = ({ totalItems }) => {
  return (
    <header className='sticky top-0 mb-10 flex flex-col items-center justify-between gap-4 border-t-8 border-blue-500 bg-inherit px-10 py-3 shadow-md lg:flex-row'>
      <h1 className='font-lobster text-4xl font-bold underline transition-colors duration-300 hover:text-blue-500'>
        <Link to='/'>goodies</Link>
      </h1>
      <Nav totalItems={totalItems} />
    </header>
  );
};

export default Header;
