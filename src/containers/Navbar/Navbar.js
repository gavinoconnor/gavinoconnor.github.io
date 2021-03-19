import React from 'react';

import './Navbar.css';
import logo from './logo_transparent.png';

class Navbar extends React.Component {

  render() {
    return (
      <nav className='navbar'>
      <a href='/'><img src={logo} alt='logo_image'/></a>
        <ul className='nav-links'>
          {/* <li className='nav-item'>About</li> */}
          <li className='nav-item'><button className='button' onClick={this.props.scroller}>Projects</button></li>
          <li className='nav-item'><button className='button' onClick={this.props.scroller}>Blog</button></li>
        </ul>
      </nav>
    )
  }
}

export default Navbar;
