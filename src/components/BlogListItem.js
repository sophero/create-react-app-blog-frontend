import React from 'react';

function BlogListItem(props) {

    return(
        <div className="blog">
            <div onClick={handleShowBlog} className="blog-title">
                {props.blog.title}
            </div>
            <div className="blog-content">
                {props.blog.content}
            </div>
        </div>
    );

    function handleShowBlog() {
        props.showBlog(props.blog.id);
    }
}

export default BlogListItem
