import React from 'react';

import './Navbar.css';

const Navbar = () => {
  return (
    <nav className='navbar'>
      {/* <div>GOC</div> */}
      <ul className='nav-links'>
        <li className='nav-item'><a href='#'>About</a></li>
        <li className='nav-item'><a href='#'>Projects</a></li>
        <li className='nav-item'><a href='#'>Blog</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
