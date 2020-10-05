import React from 'react';
import { Route, Switch } from 'react-router-dom';

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

function App() {
  return (
    <div className={classes.App}>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/about' component={About}/>
          <Route path='/blogs' component={BlogsContainer}/>
          <Route path='/projects' component={Projects}/>
        </Switch>
        <Footer />
    </div>
  );
}

export default App;
