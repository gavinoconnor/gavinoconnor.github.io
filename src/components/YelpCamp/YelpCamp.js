import React from 'react';

import classes from './YelpCamp.module.css';
import yelpcamp from './yelpcamp.jpeg';

const yelpCamp = () => {
  return (
    <div className={classes.YelpCamp}>
      <h1>YelpCamp</h1>
      <div>
        <div>
          <img src={yelpcamp} alt="yelpcamp" className={classes.Camp}/>
          <h3>About the project:</h3>
          <p>A Yelp clone for campgrounds. Built with Node.js, Express, and MongoDB. Styled with Bootcamp.</p>
        </div>
        <iframe src='https://www.youtube.com/embed/1Kuyz3Cvla4'
        frameBorder='0'
        allow='autoplay; encrypted-media'
        allowFullScreen
        title='video'/>
        <h3>Find the code at Github <a href="https://github.com/gavinoconnor/YelpCamp">here.</a></h3>
      </div>
    </div>
  );
}

export default yelpCamp;
