import React from 'react';

import About from '../About/About';
import BlogsContainer from '../../containers/BlogsContainer/BlogsContainer';
import Projects from '../../containers/Projects/Projects';

const home = (props) => (
    <React.Fragment>
      <About />
      <Projects />
      <BlogsContainer />
    </React.Fragment>
  );

export default home;
