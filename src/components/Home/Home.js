import React from 'react';

import About from '../About/About';
import Blogs from '../Blogs/Blogs';
import Projects from '../../containers/Projects/Projects';

const home = (props) => {
  return (
    <React.Fragment>
      <Projects />
      <Blogs />
      <About />
    </React.Fragment>
  );
}

export default home;
