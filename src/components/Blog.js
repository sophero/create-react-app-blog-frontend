import React from 'react';

function Blog(props) {

    let comments = props.comments.map(function(comment, index) {
        return(
            <div className="comment" key={index}>
                {comment.content}
            </div>
        );
    });

    return(
        <div className="blog">
            <div className="blog-title">
                {props.blog.title}
            </div>
            <div className="blog-content">
                {props.blog.content}
            </div>
            <div className="comments-container">
                {comments}
            </div>
        </div>
    );
}

export default Blog
