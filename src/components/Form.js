import React from 'react';
import './Form.css';
import Button from './Button';

function Form() {
    const handleFormSubmit = () => {
        alert('You just subscribed the adventure newsletter!')
    }

    return (
        <form onSubmit={handleFormSubmit}className="form">
            <h3 className="form-headline">Join the Adventure newsletter to receive our best vacation deals</h3>
            <p className="form-text">You can unsubscribe at any time.</p>
            <div className="form-input-and-btn-container">
                <input type="text" className="form-input" placeholder="Your Email" />
                <Button text="Subscribe" size="medium" styles="primary"/>
            </div>
        </form>
    )
}

export default Form;