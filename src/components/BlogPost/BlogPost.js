import React from 'react';

import classes from './BlogPost.module.css';

const blogPost = (props) => {
  // console.log("Post: ", props.blog)
  return (
    <div className={classes.BlogPost}>
      <h2>{props.blog.title}</h2>
      {/* <p>{props.blog.pubDate}</p> */}
      {/* <p>{props.blog.categories}</p> */}
      <p className={classes.BlogParagraph}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      </p>
      <a href={props.blog.link}>Read More<br />
      {/* <img src={props.blog.thumbnail} alt="thumbnail"/> */}
      </a>
    </div>
  );
}

export default blogPost;
