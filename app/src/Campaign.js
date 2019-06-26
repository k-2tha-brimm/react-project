import React from 'react';
import './Campaign.css';

function Campaign(props) {
    return (
        <p>{props.campaign.campaign_name}</p>
    )
}

export default Campaign;