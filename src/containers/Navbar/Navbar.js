import React from 'react';
// import { Link } from 'react-router-dom';

import classes from './Navbar.module.css';

const Navbar = () => {
  return (
    <div className={classes.Font}>
      <header className={classes.Navbar}>
        {/* <Link to='/' style={{fontSize: '32px'}}>GOC</Link> */}
        <nav>
          <ul>
            <li>About</li>
            <li>Projects</li>
            <li>Blog</li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
