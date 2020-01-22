import React from 'react';
import { Route, Switch } from 'react-router-dom';

// import Navbar from './containers/Navbar/Navbar';
import About from './components/About/About';
import Blogs from './components/Blogs/Blogs';
import Projects from './containers/Projects/Projects';
import Tixtra from './components/Tixtra/Tixtra';
import HabitTrackr from './components/HabitTrackr/HabitTrackr';
import BurgerBuilder from './components/BurgerBuilder/BurgerBuilder';


function App() {
  return (
    <div>
      <Switch>
        {/* <Navbar /> */}
        <Route path='/' exact render={() => (<h1>Under Construction</h1>)}/>
        <Route path='/about' component={About}/>
        <Route path='/blogs' component={Blogs}/>
        <Route path='/projects' component={Projects}/>
        <Route path='/tixtra' component={Tixtra}/>
        <Route path='/habit' component={HabitTrackr}/>
        <Route path='/burger' component={BurgerBuilder}/>
      </Switch>
    </div>
  );
}

export default App;
