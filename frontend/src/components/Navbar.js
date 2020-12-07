import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className='navbar navbar-expand navbar-light fixed-top'>
      <div className='container'>
        <Link to='/signin' className='navbar-brand'>
          Qauth
        </Link>

        <div className='collapse navbar-collapse' id='navbarTogglerDemo02'>
          <ul className='navbar-nav ml-auto'>
            <li className='nav-item'>
              <Link className='nav-link cl' to={'/signin'}>
                Login
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link cl' to={'/signup'}>
                Sign up
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
