import React from 'react';

import './Navbar.css';

class Navbar extends React.Component {

  render() {
    return (
      <nav className='navbar'>
        <ul className='nav-links'>
          <li className='nav-item'>About</li>
          <li className='nav-item' onClick={this.props.scroller}><a href='#projects'>Projects</a></li>
          <li className='nav-item' onClick={this.props.scroller}>Blog</li>
        </ul>
      </nav>
    )
  }
}

export default Navbar;
