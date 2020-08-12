import React from 'react';

import { NavLink } from 'react-router-dom';
import classes from './Projects.module.css';

import yelpcamp from '../../assets/yelpcamp.jpeg';
import burgerbuilder from '../../assets/burger-builder.jpg';
import habitTrak from '../../assets/habit-trak.png';
import tixtra from '../../assets/tixtra.png';


const projects = () => (
  <div className={classes.Projects}>
      <div className={classes.ProjectEven}>
        <h3>Tixtra</h3>
        <p>
        Front End:
          <li>React/Redux</li>
          <li>Material</li>
            <br />
        Back End:
          <li>Ruby on Rails</li>
          <li>Postgresql</li>
        </p>
        <NavLink to="/tixtra">LAUNCH</NavLink>
        <img src={tixtra} alt="tixtra"/>
      </div>
      <div className={classes.ProjectOdd}>
        <h3>Habit Trak</h3>
        <p>
          Front End:
            <li>React/Redux</li>
            <li>Material</li>
              <br />
          Back End:
            <li>Ruby on Rails</li>
            <li>Postgresql</li>
        </p>
        <NavLink to="/habit">LAUNCH</NavLink>
        <img src={habitTrak} alt="habit-trak" style={{marginTop: '20px'}}/>
      </div>
      <div className={classes.ProjectEven}>
        <h3>BurgerBuilder</h3>
        <p>
          Front End:
            <li>React/Redux</li>
            <li>Material</li>
              <br />
          Back End:
            <li>Ruby on Rails</li>
            <li>Postgresql</li>
        </p>
        <NavLink to="/burger">LAUNCH</NavLink>
        <img src={burgerbuilder} alt="burgerbuilder"/>
      </div>
      <div className={classes.ProjectOdd}>
        <h3>YelpCamp</h3>
        <p>
          Front End:
            <li>React/Redux</li>
            <li>Material</li>
              <br />
          Back End:
            <li>Ruby on Rails</li>
            <li>Postgresql</li>
        </p>
        <NavLink to="/yelpcamp">LAUNCH</NavLink>
        <img src={yelpcamp} alt="yelpcamp"/>
      </div>
  </div>
  );

export default projects;
