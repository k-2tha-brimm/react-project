import React from 'react';
import './Campaign.css';

function Campaign(props) {
    return (
        <div className="campaign-container">
            <div className="info-container">
            <img src={props.campaign.campaign_icon_url} height="60" width="60"></img>
                <div className="name-cpi-container">
                    <p className="campaign-name"><strong>{props.campaign.campaign_name}</strong></p>
                    <p className="cpi" style={{marginTop: "5"}}><strong>{props.campaign.pay_per_install}</strong> per install</p>
                </div>
            </div>
        </div>
    )
}

export default Campaign;