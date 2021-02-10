import React from 'react';

import './BlogPost.css';

class BlogPost extends React.Component {

  tagToText = (node) => {
    let tag = document.createElement('div');
    tag.innerHTML = node;
    node = tag.innerText;
    return node;
  }

  shortenText = (text, start, maxLength) => {
    return text.length > maxLength ?
      text.slice(start, maxLength) :
      text;
  }

  render() {
    return (
      <div className='blog-post'>
       <h2>{this.props.blog.title}</h2>
        <p className='blog-paragraph'>
          {'. . . ' + this.shortenText(this.tagToText(this.props.blog.content), 83, 300) + ' . . .'}
        </p>
        <a href={this.props.blog.link}>Read More<br />
        </a>
      </div>
    )
  }
}


export default BlogPost;
