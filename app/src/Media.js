import React from 'react';
import './Media.css'

function Media(props) {
    console.log(props);
    return (
        <div className="media-container">
            <div className="thumbnail">
                <img src={props.media.cover_photo_url}></img>
            </div>
        </div>
    )
}

export default Media;