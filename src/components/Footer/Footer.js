import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import classes from './Footer.module.css';

const footer = () => (
  <div className={classes.Footer}>
    <FontAwesomeIcon icon={['fab', 'linkedin']} size='3x'/>
    <FontAwesomeIcon icon={['fab', 'github']} size='3x'/>
    <FontAwesomeIcon icon={['fab', 'medium']} size='3x'/>
  </div>
)





export default footer;
