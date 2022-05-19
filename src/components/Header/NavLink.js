import { Link } from 'react-router-dom';

const NavLink = ({ path, children }) => {
  return (
    <Link to={path} className='text-black text-base font-semibold'>
      {children}
    </Link>
  );
};

export default NavLink;
