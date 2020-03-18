import React from 'react';

import { NavLink } from 'react-router-dom';
import classes from './Projects.module.css';

import yelpcamp from './yelpcamp.jpeg';
import burgerbuilder from '../../assets/burger-builder.jpg';

const projects = () => (
  <div className={classes.Projects}>
      <div className={classes.ProjectEven}>
        <h3>Tixtra</h3>
        <p>
          Grace Brewster Murray Hopper (née Murray December 9, 1906 – January 1, 1992) was an American computer scientist and United States Navy rear admiral. One of the first programmers of the Harvard Mark I computer, she was a pioneer of computer programming who invented.
        </p>
        <NavLink to="/tixtra">LAUNCH</NavLink>
        <img src={yelpcamp} alt="yelpcamp"/>
      </div>
      <div className={classes.ProjectOdd}>
        <h3>HabitTrackr</h3>
        <p>
          Grace Brewster Murray Hopper (née Murray December 9, 1906 – January 1, 1992) was an American computer scientist and United States Navy rear admiral. One of the first programmers of the Harvard Mark I computer, she was a pioneer of computer programming who invented.
        </p>
        <NavLink to="/habit">LAUNCH</NavLink>
        <img src={yelpcamp} alt="yelpcamp"/>
      </div>
      <div className={classes.ProjectEven}>
        <h3>BurgerBuilder</h3>
        <p>
          Grace Brewster Murray Hopper (née Murray December 9, 1906 – January 1, 1992) was an American computer scientist and United States Navy rear admiral. One of the first programmers of the Harvard Mark I computer, she was a pioneer of computer programming who invented.
        </p>
        <NavLink to="/burger">LAUNCH</NavLink>
        <img src={burgerbuilder} alt="burgerbuilder"/>
      </div>
      <div className={classes.ProjectOdd}>
        <h3>YelpCamp</h3>
        <p>
          Grace Brewster Murray Hopper (née Murray December 9, 1906 – January 1, 1992) was an American computer scientist and United States Navy rear admiral. One of the first programmers of the Harvard Mark I computer, she was a pioneer of computer programming who invented.
        </p>
        <NavLink to="/yelpcamp">LAUNCH</NavLink>
        <img src={yelpcamp} alt="yelpcamp"/>
      </div>
  </div>
  );

export default projects;
