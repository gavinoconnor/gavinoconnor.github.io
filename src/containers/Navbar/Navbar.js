import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './Navbar.module.css';

const Navbar = () => {
  return (
    <div>
      <header className={classes.Navbar}>
        <NavLink to='/' style={{fontSize: '30px'}}>GOC</NavLink>
        <nav>
          <ul>
            <li><NavLink activeClassName={classes.active} to='/about'>About</NavLink></li>
            <li><NavLink activeClassName={classes.active} to='/projects'>Projects</NavLink></li>
            <li><NavLink activeClassName={classes.active} to='/blogs'>Blog</NavLink></li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
