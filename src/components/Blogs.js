import React, { Component } from 'react';
import axios from 'axios';

class Blogs extends Component {

    constructor(props) {
        super(props);
        this.state = {
            blogs: []
        }
        this.getBlogs = this.getBlogs.bind(this);

        this.getBlogs();
    }

    getBlogs() {
        //   package.json has proxy: "http://localhost:3000/"
        axios.get("/blogs").then((response) => {
            console.log(response);
            this.setState({blogs: response.data});
        });
    }

    render() {

        let blogsList = this.state.blogs.map(function(blog) {
            return(
                <div className="blog">
                    <div className="blog-title">
                        {blog.title}
                    </div>
                    <div className="blog-content">
                        {blog.content}
                    </div>
                </div>
            )
        });

        return(
            <div className="blogs-list">
                {blogsList}
            </div>
        )
    }
}

export default Blogs
