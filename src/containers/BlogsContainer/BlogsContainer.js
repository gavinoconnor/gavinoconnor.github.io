import React, { Component } from 'react';
import BlogPost from '../../components/BlogPost/BlogPost';

import classes from './BlogsContainer.module.css';

class BlogsContainer extends Component {

  state = {
    blogs: []
  }

  componentDidMount() {
    fetch('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40gavindustry')
    .then((res) => res.json())
    .then(data => {
      this.setState({blogs: data.items})
    })
  }

  render() {
    return (
      <div className={classes.BlogsContainer}>
        <div>
          {this.state.blogs.map(blog => {
            return <BlogPost key={blog.title} blog={blog}/>
          })}
        </div>
      </div>
    );
  }
}

export default BlogsContainer;
