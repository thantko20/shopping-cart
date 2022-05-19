import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import NavLink from './NavLink';

const Nav = () => {
  return (
    <ul className='flex gap-3 items-center'>
      <li>
        <NavLink path='/shop'>Shop</NavLink>
      </li>
      <li>
        <NavLink path='/about'>About</NavLink>
      </li>
      <li>
        <NavLink path='/cart'>
          <FontAwesomeIcon icon={faCartShopping} />
        </NavLink>
      </li>
    </ul>
  );
};

export default Nav;
