import React, { createRef } from 'react';


import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

import Navbar from './containers/Navbar/Navbar';
import About from './components/About/About';
import Projects from './containers/Projects/Projects';
import BlogsContainer from './containers/BlogsContainer/BlogsContainer';
import Footer from './components/Footer/Footer';

import './App.css';

library.add(fab);

class App extends React.Component {

  scrollTarget = createRef();

  handleClick = () => {
    console.log(this.scrollTarget)
    this.scrollTarget.current.scrollIntoView({ behavior: 'smooth' })
  }

  render() {
    return (
      <div className='app'>
        <Navbar scroller={this.handleClick}/>
          <About />
          <Projects ref={this.scrollTarget}/>
          <BlogsContainer ref={this.scrollTarget}/>
        <Footer />
      </div>
    )
  }
}

export default App;
