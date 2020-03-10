import React from 'react';

import classes from './YelpCamp.module.css';
import yelpcamp from './yelpcamp.jpeg';

const yelpCamp = () => {
  return (
    <div className={classes.YelpCamp}>
        <div className={classes.Description}>
          <p><strong>YelpCamp</strong></p>
          <p>A Yelp-like application for uploading, rating, and reviewing campgrounds.<br /><br />Built with Node.js, Express, and MongoDB. <br />Styled with Bootcamp.</p>
          <p>Find the code at Github <a href="https://github.com/gavinoconnor/YelpCamp">here.</a></p>
        </div>
        <div className={classes.Video}>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/1Kuyz3Cvla4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    </div>
  );
}

export default yelpCamp;
{/* <img src={yelpcamp} alt="yelpcamp" className={classes.Camp}/> */}
