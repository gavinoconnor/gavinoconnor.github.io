import React, { useState } from 'react';

import { FaArrowCircleUp } from 'react-icons/fa';
import './ScrollArrow.css';

const ScrollArrow = () => {
  const [ showScroll, setShowScroll ] = useState(false);

  const checkScroll = () => {
    if (!showScroll && window.pageYOffset > 500) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 500) {
      setShowScroll(false);
    }
  };

  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  window.addEventListener('scroll', checkScroll);

  return (
    <FaArrowCircleUp className='scroll-arrow' onClick={scrollUp} style={{height: 40, display: showScroll ? 'flex' : 'none'}}/>
  )
}

export default ScrollArrow;