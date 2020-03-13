import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classes from './About.module.css';
import profile from './about-profile.jpg';

const about = () => (
    <div className={classes.About}>
      <div className={classes.Hello}>
        <p>
          Hello.
          <br />
          I'm Gavin O'Connor,<br />a full stack web developer.
          <br /><br />Request a <a href='mailto:gedmund@gmail.com?subject=Resume-Request'><u>resume</u></a>.
        </p>
      </div>

      <div className={classes.Intro}>
        <p>
          Full Stack Web Developer possessing 10+
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
        <div className={classes.Social}>
            <ul>Find me here:
              <li>
                <a href="https://www.linkedin.com/in/gavin-oconnor/">
              <FontAwesomeIcon icon={['fab', 'linkedin']} size='2x' style={{ color: 'white' }}/>
                </a>
              </li>
              <li>
                <a href="https://github.com/gavinoconnor">
                <FontAwesomeIcon icon={['fab', 'github']} size='2x' style={{ color: 'white' }}/>
                </a>
              </li>
              <li>
                <a href="https://medium.com/@gavindustry">
                <FontAwesomeIcon icon={['fab', 'medium']} size='2x' style={{ color: 'white' }}/>
                </a>
              </li>
              <li>
                <a href="https://open.spotify.com/user/gavinoconnor?si=sgILXQKlTtOAkCKshyW-xg">
                <FontAwesomeIcon icon={['fab', 'spotify']} size='2x' style={{ color: 'white' }}/>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/gavindustry/">
                <FontAwesomeIcon icon={['fab', 'instagram']} size='2x' style={{ color: 'white' }}/>
                </a>
              </li>
            </ul>

        </div>
      </div>


      <div className={classes.ImageContainer}>
        <img src={profile} alt="profile" className={classes.Profile} />
      </div>
    </div>
  );

export default about;
