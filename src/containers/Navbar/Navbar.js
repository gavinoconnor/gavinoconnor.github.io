import React from 'react';

import './Navbar.css';

class Navbar extends React.Component {
  handleClick = () => {
    console.log('clicket')
  }

  render() {
    return (
      <nav className='navbar'>
        <ul className='nav-links'>
          <li className='nav-item'>About</li>
          <li className='nav-item' onClick={this.handleClick}>Projects</li>
          <li className='nav-item' onClick={this.handleClick}>Blog</li>
        </ul>
      </nav>
    )
  }
}

export default Navbar;
