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

  projectRef = createRef();
  blogRef = createRef();

  
  scrollToContent = (event) => {
    switch(event.target.innerHTML) {
      case 'Projects':
        this.projectRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'Blog':
        this.blogRef.current.scrollIntoView({ behavior: 'smooth' });
      // no default
    }
  }

  render() {
    return (
      <div className='app'>
        <Navbar scroller={this.scrollToContent}/>
          <About />
          <Projects refProp={this.projectRef}/>
          <BlogsContainer refProp={this.blogRef}/>
        <Footer />
      </div>
    )
  }
}

export default App;
