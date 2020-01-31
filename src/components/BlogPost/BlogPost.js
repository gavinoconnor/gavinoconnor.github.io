import React from 'react';

import classes from './BlogPost.module.css';

const blogPost = (props) => {
  // console.log("Post: ", props.blog)
  return (
    <div className={classes.BlogPost}>
      <a href={props.blog.link}>
      <img src={props.blog.thumbnail} alt="thumbnail"/>
      <h2>{props.blog.title}</h2>
      <p>{props.blog.pubDate}</p>
      <p>{props.blog.categories}</p>
      </a>
    </div>
  );
}

export default blogPost;
