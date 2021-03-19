import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// -v- CSS and image -v-
import './About.css';
import profile from './about-profile.jpg';

class About extends React.Component {
  render() {
    return (
      <div className='about'>
      
        <div className='hello'>
          <p>Hello.<br />
            I'm Gavin O'Connor,<br />a full stack web developer.<br />
          </p>
        </div>

        <div className='intro'>
          <p>
            As a freelance developer and graduate of Flatiron School's immersive software engineering bootcamp, I’m well-versed in HTML/CSS, JavaScript, and Ruby, with a particular focus on React and Ruby on Rails.
          </p>
          <p>
            I'm comfortable with both databases and design, and my current focus is on robust, full-stack application development and site operations. I’m extremely interested in UX/UI and believe successful web development begins with empathy.
          </p>
          <div className='social'>
            <p>Find me here:</p>
            <ul>
              <li>
                <a href="https://www.linkedin.com/in/gavin-oconnor/" target='_blank' rel="noopener noreferrer">
                  <FontAwesomeIcon icon={['fab', 'linkedin']} size='1x' style={{ color: 'white' }} />
                </a>
              </li>
              <li>
                <a href="https://github.com/gavinoconnor" target='_blank' rel="noopener noreferrer">
                  <FontAwesomeIcon icon={['fab', 'github']} size='1x' style={{ color: 'white' }} />
                </a>
              </li>
              <li>
                <a href="https://medium.com/@gavindustry" target='_blank' rel="noopener noreferrer">
                  <FontAwesomeIcon icon={['fab', 'medium']} size='1x' style={{ color: 'white' }} />
                </a>
              </li>
              <li>
                <a href="https://open.spotify.com/user/gavinoconnor?si=sgILXQKlTtOAkCKshyW-xg" target='_blank' rel="noopener noreferrer">
                  <FontAwesomeIcon icon={['fab', 'spotify']} size='1x' style={{ color: 'white' }} />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/gavindustry/" target='_blank' rel="noopener noreferrer">
                  <FontAwesomeIcon icon={['fab', 'instagram']} size='1x' style={{ color: 'white' }} />
                </a>
              </li>
            </ul>
          </div>
          <div>Request a <a href='mailto:gedmund@gmail.com?subject=Resume-Request'><u>resume</u></a>.</div>
        </div>


        <div className='image-container'>
          <img src={profile} alt="profile" className='profile' />
        </div>
      </div>
    )
  }
}

export default About;
