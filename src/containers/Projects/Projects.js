import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './Projects.module.css';

const projects = () => {
  return (
    <div>
      <h1>Projects</h1>
      <ul className={classes.Projects}>
        <li><NavLink to="/tixtra">Tixtra</NavLink></li>
        <li><NavLink to="/habit">HabitTrackr</NavLink></li>
        <li><NavLink to="/burger">BurgerBuilder</NavLink></li>
        <li><NavLink to="/yelpcamp">YelpCamp</NavLink></li>
      </ul>
    </div>
    );
};

export default projects;
