import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import classes from './Footer.module.css';

const footer = () => (
  <div className={classes.Footer}>
    <a href="https://www.linkedin.com/in/gavin-oconnor/">
    <FontAwesomeIcon icon={['fab', 'linkedin']} size='3x' style={{ color: 'white' }}/>
    </a>
    <a href="https://github.com/gavinoconnor">
      <FontAwesomeIcon icon={['fab', 'github']} size='3x' style={{ color: 'white' }}/>
    </a>
    <FontAwesomeIcon icon={['fab', 'medium']} size='3x' style={{ color: 'white' }}/>
  </div>
);

export default footer;
