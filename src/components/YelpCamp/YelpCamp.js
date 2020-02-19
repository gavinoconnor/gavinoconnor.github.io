import React from 'react';

import classes from './YelpCamp.module.css';
import yelpcamp from './yelpcamp.jpeg';

const yelpCamp = () => {
  return (
    <div>
      <h1>YelpCamp</h1>
      <div>
        <div>
          <img src={yelpcamp} alt="yelpcamp" className={classes.Camp}/>
          <h3>About the project:</h3>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
        </div>
        <h3>Demo Video</h3>
        <h4>Github link/code preview</h4>
      </div>
    </div>
  );
}

export default yelpCamp;
