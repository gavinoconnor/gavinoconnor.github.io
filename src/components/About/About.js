import React from 'react';

import classes from './About.module.css';
import profile from './profile_pic_1.jpeg';

const about = () => (
    <div className={classes.About}>
      <div className={classes.Hello}>
        <p>
          Hello.
          <br />
          A headline here.
          <br />A <u>resume</u> here.
        </p>
      </div>

      <div className={classes.Intro}>
        <p>
          Grace Brewster Murray Hopper. Full Stack Web Developer possessing 10+
          years of diverse technical, marketing, and entrepreneurial experience
          with a passion for coding. Flatiron School graduate, adept at building
          fully-functioning applications.
        </p>
        <p>
          Extensive cross-functional experience shepherding projects through
          their lifecycle. An adaptable, creative problem solver with excellent
          communication and interpersonal skills. Independently motivated to
          stay current with relevant software and applications.
        </p>
      </div>

      <div className={classes.ImageContainer}>
        <img src={profile} alt="profile" className={classes.Profile} />
      </div>
    </div>
  );

export default about;
