import React, { Component } from 'react';
import axios from 'axios';
import BlogListItem from './BlogListItem';
import Blog from './Blog';

class BlogList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            blogs: [],
            currentBlogId: null,
            currentBlog: {},
            currentComments: []
        }
        this.getBlogs = this.getBlogs.bind(this);
        this.showBlog = this.showBlog.bind(this);
        this.showBlogList = this.showBlogList.bind(this);

        this.getBlogs();
    }

    getBlogs() {
        axios.get("/blogs").then((response) => {
            console.log(response);
            this.setState({blogs: response.data});
        });
    }

    showBlog(id) {
        axios.get("/blogs/" + id).then((response) => {
            console.log(response.data);
            this.setState({
                currentBlogId: id,
                currentBlog: response.data.blog,
                currentComments: response.data.comments
            });
        });

    }

    showBlogList() {
        this.setState({
            currentBlogId: null,
            currentBlog: {},
            currentComments: []
        });
    }

    render() {

        if (this.state.currentBlogId) {

            return(
                <div>
                    <button onClick={this.showBlogList}>Back to Blogs</button>
                    <Blog blog={this.state.currentBlog} comments={this.state.currentComments} />
                </div>
            );

        } else {

            let blogsList = this.state.blogs.map((blog, index) => {
                return(
                    <BlogListItem blog={blog} showBlog={this.showBlog} key={index} />
                )
            });

            return(
                <div className="blogs-list">
                    {blogsList}
                </div>
            );
        }
    }
}

export default BlogList
