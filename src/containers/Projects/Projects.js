import React from 'react';
import { Link } from 'react-router-dom';

const projects = () => {
  return (
    <div>
      <h1>Projects</h1>
      <Link to="/tixtra"><p>Tixtra</p></Link>
      <Link to="/habit"><p>HabitTrackr</p></Link>
      <Link to="/burger"><p>BurgerBuilder</p></Link>
    </div>
    );
};

export default projects;
