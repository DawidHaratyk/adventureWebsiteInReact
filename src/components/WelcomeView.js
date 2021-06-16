import React from 'react';
import './WelcomeView.css';
import Button from './Button';

function WelcomeView() {
    return (
        <div className="welcome-container">
            <h1 className="welcome-headline">Adventure awaits</h1>
            <h3 className="welcome-headline-small">What are you waiting for?</h3>
            <div className="buttons-container">
                <Button text="GET STARTED" size="medium" styles="primary"/>
                <div className="button-container">
                    <Button text="WATCH TRAILER" size="medium" styles="outline" className="bigger-btn"/>
                    <i className="far fa-play-circle"></i>
                </div>
            </div>
        </div>
    )
}

export default WelcomeView;