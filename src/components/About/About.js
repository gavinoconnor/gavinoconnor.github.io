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
          <br />
          <br />
        </p>
      </div>

      <div className={classes.Intro}>
        <p>
         I came to coding as a curious business owner wanting to be more hands-on with our digital presence. I’ve always been a passionate learner, and soon realized that software development was a natural fit for my need to problem-solve.
        </p>
        <p>
          I’m well versed in HTML, CSS, Javascript, and Ruby, with a particular focus on React and Ruby on Rails. I’m extremely interested in user experience and figuring out how to reduce pain points and iteratively improve on software.
        </p>
        <p>
          As a former business owner and editor, I'm an adaptable, creative problem solver with excellent communication and interpersonal skills. And as a life-long learner, I'm independently motivated to stay current with relevant software and applications.
        </p>
        <div className={classes.Social}>
            <ul>Find me here:
              <li>
                <a href="https://www.linkedin.com/in/gavin-oconnor/" target='_blank'>
              <FontAwesomeIcon icon={['fab', 'linkedin']} size='1x' style={{ color: 'white' }}/>
                </a>
              </li>
              <li>
                <a href="https://github.com/gavinoconnor" target='_blank' rel="noopener noreferrer">
                <FontAwesomeIcon icon={['fab', 'github']} size='1x' style={{ color: 'white' }}/>
                </a>
              </li>
              <li>
                <a href="https://medium.com/@gavindustry" target='_blank' rel="noopener noreferrer">
                <FontAwesomeIcon icon={['fab', 'medium']} size='1x' style={{ color: 'white' }}/>
                </a>
              </li>
              <li>
                <a href="https://open.spotify.com/user/gavinoconnor?si=sgILXQKlTtOAkCKshyW-xg" target='_blank' rel="noopener noreferrer">
                <FontAwesomeIcon icon={['fab', 'spotify']} size='1x' style={{ color: 'white' }}/>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/gavindustry/" target='_blank' rel="noopener noreferrer">
                <FontAwesomeIcon icon={['fab', 'instagram']} size='1x' style={{ color: 'white' }}/>
                </a>
              </li>
            </ul>
        </div>
        <div>Request a <a href='mailto:gedmund@gmail.com?subject=Resume-Request'><u>resume</u></a>.</div>
      </div>


      <div className={classes.ImageContainer}>
        <img src={profile} alt="profile" className={classes.Profile} />
      </div>
    </div>
  );

export default about;
