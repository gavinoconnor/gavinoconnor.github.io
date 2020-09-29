import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

import Navbar from './containers/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import BlogsContainer from './containers/BlogsContainer/BlogsContainer';
import Projects from './containers/Projects/Projects';
// import Tixtra from './components/Tixtra/Tixtra';
// import HabitTrackr from './components/HabitTrackr/HabitTrackr';
// import BurgerBuilder from './components/BurgerBuilder/BurgerBuilder';
// import YelpCamp from './components/YelpCamp/YelpCamp';
import Footer from './components/Footer/Footer';

import classes from './App.module.css';

library.add(fab);

function App() {
  return (
    <div className={classes.App}>
      <Navbar />
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/about' component={About}/>
          <Route path='/blogs' component={BlogsContainer}/>
          <Route path='/projects' component={Projects}/>
          {/* <Route path='/tixtra' component={Tixtra}/>
          <Route path='/habit' component={HabitTrackr}/>
          <Route path='/burger' component={BurgerBuilder}/>
          <Route path='/yelpcamp' component={YelpCamp}/> */}
        </Switch>
      <Footer />
    </div>
  );
}

export default App;
