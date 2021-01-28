import React from 'react';

import About from '../About/About';
import BlogsContainer from '../../containers/BlogsContainer/BlogsContainer';
import Projects from '../../containers/Projects/Projects';
import Freelance from '../Freelance/Freelance';

const home = (props) => (
    <React.Fragment>
      <About />
      <Freelance />
      <Projects />
      <BlogsContainer />
    </React.Fragment>
  );

export default home;
