import React from 'react';
import '../styles/Post.css';

const Post = (props) => {
    const {authorName, authorImage, post} = props;
    return (
        <div className="post">
            <div className="author-post">
                <img className="author-image" src={authorImage} alt="Author" />
                <label className="author-name">{authorName}</label>
                <div className="more-options">
                    <svg className="more-options-button" aria-label="More options" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><circle cx="12" cy="12" r="1.5"></circle><circle cx="6.5" cy="12" r="1.5"></circle><circle cx="17.5" cy="12" r="1.5"></circle></svg>
                </div>
            </div>
            <img className="post-image" src={post} alt="Post" />
        </div>
    )
}

export default Post;