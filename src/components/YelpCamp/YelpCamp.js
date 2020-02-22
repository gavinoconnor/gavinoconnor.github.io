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
          <p>A Yelp clone for campgrounds. Built with Node.js, Express, and MongoDB. Styled with Bootcamp.</p>
        </div>
        <h3>Demo Video</h3>
        <h4>Github link/code preview</h4>
      </div>
    </div>
  );
}

export default yelpCamp;
