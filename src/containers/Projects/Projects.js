import React from 'react';

// import { NavLink } from 'react-router-dom';
import classes from './Projects.module.css';

// import yelpcamp from '../../assets/yelpcamp.jpeg';
// import burgerbuilder from '../../assets/burger-builder.jpg';
// import habitTrak from '../../assets/habit-trak.png';
import tixtra from '../../assets/tixtra.png';


const projects = () => (
  <div className={classes.Projects}>

      <div className={classes.ProjectEven}>
        <h3>Tixtra</h3>
        <p>
        Tixtra is a ticket-sharing application that connects users based on similar musical interests. The <strong>backend</strong> was built with Ruby on Rails, Postgresql, and the Ticketmaster API. The <strong>frontend</strong> was built with React-Redux and Material UI.
        <br /><br />
        Users can upload extra tickets in their possession, search for tickets (by artist, venue, or other users), and connect with like-minded music lovers.
        <br /><br />
        See the code <a href="https://github.com/gavinoconnor/tixtra">here</a>.
        </p>
        {/* <NavLink to="/tixtra">LAUNCH</NavLink> */}
        <img src={tixtra} alt="tixtra"/>
      </div>

      <div className={classes.ProjectOdd}>
        <h3>Habit Trak</h3>
        <p>
        Habit Trak is a web application that helps users set goals and track their progress. The <strong>backend</strong> was built with Ruby on Rails and Postgresql. The <strong>frontend</strong> was built with React and Bootstrap.
        <br /><br />
        Users select from a library of habits, define their goals, and record when a habit or goal has been completed. A simple chart illustrates their progress in real time.
        <br /><br />
        See the frontend code <a href="https://github.com/gavinoconnor/habit-trak-client">here</a>. <br />
        See the backend code <a href="https://github.com/gavinoconnor/habit-trak-api">here</a>.
        </p>
        <iframe title="HabitTrackr demo video" width="560" height="315" src="https://www.youtube.com/embed/0I3epQ6T_Yw" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="allowfullscreen"></iframe>
      </div>

      <div className={classes.ProjectEven}>
        <h3>BurgerBuilder</h3>
        <p>
        Burger Builder is a mobile-first application that replicates a meal-delivery app for customized burgers. The <strong>backend</strong> uses Axios and Firebase for data handling. The <strong>frontend</strong> was built with React and custom CSS.
        <br /><br />
        Users select their toppings, confirm their order, and select between pickup or delivery.
        <br /><br />
        See the code <a href="https://github.com/gavinoconnor/burger-builder">here</a>.
        </p>
        {/* <NavLink to="/burger">LAUNCH</NavLink> */}
        <iframe title="BurgerBuilder demo video" width="560" height="315" src="https://www.youtube.com/embed/xIrDxvx40Ys" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="allowfullscreen"></iframe>
      </div>
      <div className={classes.ProjectOdd}>
        <h3>YelpCamp</h3>
        <p>
        A Yelp-like application for uploading, rating, and reviewing campgrounds. The <strong>backend</strong> was built with Node.js, Express and MongoDB. The <strong>frontend</strong> was styled with Bootstrap.
        <br /><br />
        See the code <a href="https://github.com/gavinoconnor/YelpCamp">here</a>.
        </p>
        {/* <NavLink to="/yelpcamp">LAUNCH</NavLink> */}
        <iframe title="YelpCamp demo video" width="560" height="315" src="https://www.youtube.com/embed/1Kuyz3Cvla4" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
  </div>
  );

export default projects;
