import React from 'react';
// import Media from './Media.js'
import './Campaign.css';

function Campaign(props) {

    let medias = (
        props.campaign.medias.map((media, idx) => (

            <div className="the-container">
                <div className="image-container">
                    <img src={media.cover_photo_url} alt={props.campaign.campaign_name} height="200" width="120" />
                    <i class="fas fa-play" id="play-btn"></i>
                </div>
                <div className="link-container">
                    <a href={media.tracking_link} style={{borderRight: "1px solid rgb(238, 227, 227)"}}><i class="fas fa-link" id="link"></i></a>
                    <a href={media.download_url}><i class="fas fa-download" id="link"></i></a>
                </div>
            </div>
        ))
    )

    return (
        <div className="campaign-container">
            <div className="info-container">
            <img src={props.campaign.campaign_icon_url} alt="app-icon" height="60" width="60"></img>
                <div className="name-cpi-container">
                    <p className="campaign-name"><strong>{props.campaign.campaign_name}</strong></p>
                    <p className="cpi" style={{marginTop: "5"}}><strong>{props.campaign.pay_per_install}</strong> per install</p>
                </div>
            </div>
            <div className="media-carousel-container">
                {medias}
            </div>
        </div>
    )
}

export default Campaign;