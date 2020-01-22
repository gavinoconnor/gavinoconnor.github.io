import React from 'react';
import { Link } from 'react-router-dom';

const about = () => {
  return (
    <div>
      <h1>About Me</h1>
      <p>Bio</p>
      <Link to='/projects'>Projects</Link>
    </div>
    );
};

export default about;
