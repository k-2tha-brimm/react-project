import React from 'react';
import './Media.css';
import { CopyToClipboard } from 'react-copy-to-clipboard';

function Media(props) {

    if(props.media.media_type === "video") {
        return (
            <div className="the-container">
                <div className="image-container">
                    <img src={props.media.cover_photo_url} 
                        alt={props.media.download_url} 
                        height="200" 
                        width="120" 
                    />
                    <i className="fas fa-play" id="play-btn"></i>
                </div>
                <div className="link-container">
                    <CopyToClipboard text={props.media.tracking_link} >
                        <a href={props.media.tracking_link} 
                            style={{borderRight: "1px solid rgb(238, 227, 227)"}}>
                                <i className="fas fa-link" id="link"></i>
                        </a>
                    </CopyToClipboard>
                    <a href={props.media.download_url}>
                        <i className="fas fa-download" id="link"></i>
                    </a>
                </div>
            </div>
        )
    } else {
        return (
            <div className="the-container">
                <div className="image-container">
                    <img src={props.media.cover_photo_url} 
                        alt={props.media.download_url} 
                        height="200" 
                        width="120" 
                    />
                </div>
                <div className="link-container">
                <CopyToClipboard text={props.media.tracking_link} >
                        <a href={props.media.tracking_link} 
                            style={{borderRight: "1px solid rgb(238, 227, 227)"}}>
                                <i className="fas fa-link" id="link"></i>
                        </a>
                    </CopyToClipboard>
                    <a href={props.media.download_url}>
                        <i class="fas fa-download" id="link"></i>
                    </a>
                </div>
            </div>
        )
    }
}

export default Media;