import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
// import NavLink from './NavLink';
import { NavLink } from 'react-router-dom';

const Nav = ({ totalItems }) => {
  return (
    <ul className='flex items-center gap-5 text-gray-800'>
      <li>
        <NavLink
          to='/shop'
          className={({ isActive }) => (isActive ? 'font-semibold' : '')}
        >
          Shop
        </NavLink>
      </li>
      <li>
        <NavLink
          to='/about'
          className={({ isActive }) => (isActive ? 'font-semibold' : '')}
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink to='/cart'>
          <div className='relative'>
            <div className='absolute top-[-6px] right-[-6px] flex h-4 w-4 items-center justify-center rounded-full bg-rose-600 p-1 text-sm text-white'>
              {totalItems}
            </div>
            <FontAwesomeIcon icon={faCartShopping} />
          </div>
        </NavLink>
      </li>
    </ul>
  );
};

export default Nav;
