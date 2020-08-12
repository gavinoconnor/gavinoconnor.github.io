import React from 'react';

import classes from './HabitTrackr.module.css';

const habitTrackr = () => {
  return (
    <div className={classes.HabitTrackr}>
        <div className={classes.Description}>
          <p><strong>Habit Trak</strong></p>
          Front End:
            <li>React/Redux</li>
            <li>Material</li>
              <br />
          Back End:
            <li>Ruby on Rails</li>
            <li>Postgresql</li>
          <p>Find the code at Github <a href="https://github.com/gavinoconnor/YelpCamp">here.</a></p>
        </div>
        <div className={classes.Video}>
          <iframe title="HabitTrackr demo video" width="560" height="315" src="https://www.youtube.com/embed/0I3epQ6T_Yw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>
        </div>
    </div>
  );
};

export default habitTrackr;
