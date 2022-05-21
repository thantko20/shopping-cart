import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import NavLink from './NavLink';

const Nav = ({ totalItems }) => {
  return (
    <ul className='flex items-center gap-5'>
      <li>
        <NavLink path='/shop'>Shop</NavLink>
      </li>
      <li>
        <NavLink path='/about'>About</NavLink>
      </li>
      <li>
        <NavLink path='/cart'>
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
