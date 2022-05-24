// Unused component
import { Link } from 'react-router-dom';

const NavLink = ({ path, children }) => {
  return (
    <Link to={path} className='text-base font-semibold text-black'>
      {children}
    </Link>
  );
};

export default NavLink;
