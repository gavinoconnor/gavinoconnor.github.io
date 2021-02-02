import React from 'react';

import './Navbar.css';

class Navbar extends React.Component {
  testNav = () => {
    console.log('clicket')
  }

  render() {
    return (
      <nav className='navbar'>
        <ul className='nav-links'>
          <li className='nav-item' id='about' onClick={this.testNav}><a href='#'>About</a></li>
          <li className='nav-item' id='projects'><a href='#'>Projects</a></li>
          <li className='nav-item' id='blog'><a href='#'>Blog</a></li>
        </ul>
      </nav>
    )
  }
}

export default Navbar;
