import React from 'react';

import classes from './BlogPost.module.css';

const blogPost = (props) => {
  console.log("Post: ", props.blog)

const tagToText = (node) => {
let tag = document.createElement('div');
tag.innerHTML = node;
node = tag.innerText;
return node;
};

const shortenText = (text, start, maxLength) => {
  return text.length > maxLength ?
  text.slice(start, maxLength):
  text;
};

  return (
    <div className={classes.BlogPost}>
      <h2>{props.blog.title}</h2>
      <p className={classes.BlogParagraph}>
        {'. . . ' + shortenText(tagToText(props.blog.content), 83, 300) + ' . . .'}
      </p>
      <a href={props.blog.link}>Read More<br />
      </a>
    </div>
  );
}

export default blogPost;
