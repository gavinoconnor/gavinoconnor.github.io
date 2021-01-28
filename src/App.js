import React from 'react';


import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

import Navbar from './containers/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import BlogsContainer from './containers/BlogsContainer/BlogsContainer';
import Projects from './containers/Projects/Projects';
import Footer from './components/Footer/Footer';

import classes from './App.module.css';

library.add(fab);

class App extends React.Component {
  render() {
    return (
      <div className={classes.App}>
        <Navbar />
          <Home />
          <About />
          <Projects />
          <BlogsContainer />
        <Footer />
      </div>
    )
  }
}

export default App;
