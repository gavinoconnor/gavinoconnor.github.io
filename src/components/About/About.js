import React from "react";
import { Link } from "react-router-dom";

import classes from "./About.module.css";
import winter from "./winter-bed.jpeg";

const about = () => {
  return (
    <div className={classes.About}>
      <h1>About Me</h1>
      <img src={winter} alt="winter" className={classes.Winter} />
      <p>
        Full Stack Web Developer possessing 10+ years of diverse technical,
        marketing, and entrepreneurial experience with a passion for coding.
        Flatiron School graduate, adept at building fully-functioning
        applications.
        <br /> Extensive cross-functional experience shepherding projects
        through their lifecycle. An adaptable, creative problem solver with
        excellent communication and interpersonal skills. Independently
        motivated to stay current with relevant software and applications.
      </p>
    </div>
  );
};

export default about;
