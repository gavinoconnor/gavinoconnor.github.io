import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './Projects.module.css';

const projects = () => {
  return (
    <div>
      <ul className={classes.Projects}>
        <div className={classes.Project}>
          <li>Tixtra</li>
          <p>Grace Brewster Murray Hopper (née Murray December 9, 1906 – January 1, 1992) was an American computer scientist and United States Navy rear admiral.  One of the first programmers of the Harvard Mark I computer, she was a pioneer of computer programming who invented. One of the first programmers of the Harvard Mark I computer, she was a pioneer of computer programming who invented.</p>
          <NavLink to="/tixtra">LAUNCH</NavLink>
        </div>
        <div className={classes.Project}>
          <li>HabitTrackr</li>
          <p>Grace Brewster Murray Hopper (née Murray December 9, 1906 – January 1, 1992) was an American computer scientist and United States Navy rear admiral.  One of the first programmers of the Harvard Mark I computer, she was a pioneer of computer programming who invented. One of the first programmers of the Harvard Mark I computer, she was a pioneer of computer programming who invented.</p>
          <NavLink to="/habit">LAUNCH</NavLink>
        </div>
        <div className={classes.Project}>
          <li>BurgerBuilder</li>
          <p>Grace Brewster Murray Hopper (née Murray December 9, 1906 – January 1, 1992) was an American computer scientist and United States Navy rear admiral. One of the first programmers of the Harvard Mark I computer, she was a pioneer of computer programming who invented. One of the first programmers of the Harvard Mark I computer, she was a pioneer of computer programming who invented.</p>
          <NavLink to="/burger">LAUNCH</NavLink>
        </div>
        <div className={classes.Project}>
          <li>YelpCamp</li>
          <p>Grace Brewster Murray Hopper (née Murray December 9, 1906 – January 1, 1992) was an American computer scientist and United States Navy rear admiral. One of the first programmers of the Harvard Mark I computer, she was a pioneer of computer programming who invented. One of the first programmers of the Harvard Mark I computer, she was a pioneer of computer programming who invented.</p>
          <NavLink to="/yelpcamp">LAUNCH</NavLink>
        </div>
      </ul>
    </div>
    );
};

export default projects;
