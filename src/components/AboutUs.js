import React from 'react';
import './AboutUs.css';
import { Link } from 'react-router-dom';

const aboutInformations = [
    [
        'How it works',
        'Testimonials',
        'Careers',
        'Investors',
        'Terms of Service',
    ],
    [
        'Contact',
        'Support',
        'Destinations',
        'Sponsorships',
    ],
    [
        'Submit Video',
        'Ambassadors',
        'Agency',
        'Influencer',
    ],
    [
        'Instagram',
        'Facebook',
        'Youtube',
        'Twitter',
    ],
]

function AboutUs() {
    const handleShowLinks = links => {
        const linksList = links.map(link => (
            <Link to="/" key={link}>
                {link}
            </Link>
        ))
        return linksList;
    }

    return (
        <div className="about-us-container">
            <div className="about-us-items-container">
                <div className="about-us-items">
                    <div className="about-us-item">
                        <h3 className="about-us-headline">About Us</h3>
                        <div className="about-us-links-container">
                            {handleShowLinks(aboutInformations[0])}
                        </div>
                    </div>
                    <div className="about-us-item">
                        <h3 className="about-us-headline">Contact Us</h3>
                        <div className="about-us-links-container">
                            {handleShowLinks(aboutInformations[1])}
                        </div>
                    </div>
                </div>
                <div className="about-us-items">
                    <div className="about-us-item video-item">
                        <h3 className="about-us-headline">Videos</h3>
                        <div className="about-us-links-container">
                            {handleShowLinks(aboutInformations[2])}
                        </div>
                    </div>
                    <div className="about-us-item">
                        <h3 className="about-us-headline">Social Media</h3>
                        <div className="about-us-links-container">
                            {handleShowLinks(aboutInformations[3])}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs;