import React from 'react';

import classes from './BurgerBuilder.module.css';

const burgerBuilder = () => {
  return (<div className={classes.BurgerBuilder}>
    <div className={classes.Description}>
      <p>
        <strong>BurgerBuilder</strong>
      </p>
      <p>TK.<br/><br/>Built with ...
        <br/>Styled with ...</p>
      <p>Find the code at Github
        <a href="https://github.com/gavinoconnor/YelpCamp">here.</a>
      </p>
    </div>
    <div className={classes.Video}>
      <iframe title="BurgerBuilder demo video" width="560" height="315" src="https://www.youtube.com/embed/1Kuyz3Cvla4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>
    </div>
  </div>);
};

export default burgerBuilder;
