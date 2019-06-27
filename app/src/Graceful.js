import React from 'react';
import './Graceful.css';

function Graceful() {

    return (
        <div className="error-message">
            <div className="inner-text">
                <h1>Oops!</h1>
                <p>
                    Looks like something went wrong. Please retry your request.
                </p>
            </div>
        </div>
    )
}

export default Graceful;