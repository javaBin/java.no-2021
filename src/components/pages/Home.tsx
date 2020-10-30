import React from 'react';
import Page from './Page';

class Home extends Page {
    render() {
        return (
            <div>
                <h1>Welcome to javaBin</h1>
                <AboutUs />
                <WhatsUp />
                <Contact />
            </div>
        );
    }
}

const AboutUs = () => {
    return (
        <div>
            <h2>About us</h2>
            <p>We're super swell</p>
        </div>
    );
};
const WhatsUp = () => {
    return (
        <div>
            <h2>Things happening</h2>
            <p>Here's some cool upcoming events</p>
        </div>
    );
};
const Contact = () => {
    return (
        <div>
            <h2>Contact</h2>
            <p>Let's keep in touch!</p>
        </div>
    );
};
export default Home;
