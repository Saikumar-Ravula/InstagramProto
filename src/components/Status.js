import React from 'react';
import '../styles/Status.css';

const Status = (props) => {
    const { authorImage, authorName } = props;

    return (
        <div className="status-block">
            <button className="status-button">
                <img className="status-image" src={authorImage} alt="Status missing" />
            </button>
            <label className="status-label">
                <span className="span-label">{authorName}</span>
            </label>
        </div>
    )
}
export default Status;