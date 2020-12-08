import React from 'react';
import {ReactComponent as Facebook} from './icons/social-media/facebook.svg';
import {ReactComponent as GitHub} from './icons/social-media/github.svg';
import {ReactComponent as Instagram} from './icons/social-media/instagram.svg';
import {ReactComponent as Twitter} from './icons/social-media/twitter.svg';
import {ReactComponent as Vimeo} from './icons/social-media/vimeo.svg';
import {ReactComponent as LinkedIn} from './icons/social-media/linkedin.svg';
import {ReactComponent as Mail} from './icons/social-media/email.svg';
import '../scss/contact.scss';

export function SocialMedia() {
    return (
        <div className="social-media_container">
            <a className="social-media-icon_wrapper" href="https://www.facebook.com/javabin" target="_blank">
                <Facebook className="social-media-icon" />
            </a>
            <a className="social-media-icon_wrapper" href="https://github.com/javaBin" target="_blank">
                <GitHub className="social-media-icon" />
            </a>
            <a className="social-media-icon_wrapper" href="https://www.instagram.com/javabin/" target="_blank">
                <Instagram className="social-media-icon" />
            </a>
            <a className="social-media-icon_wrapper" href="https://twitter.com/javaBin" target="_blank">
                <Twitter className="social-media-icon" />
            </a>
            <a className="social-media-icon_wrapper" href="https://vimeo.com/javabin" target="_blank">
                <Vimeo className="social-media-icon" />
            </a>
            <a className="social-media-icon_wrapper" href="https://www.linkedin.com/groups/107562/" target="_blank">
                <LinkedIn className="social-media-icon" />
            </a>
            <a className="social-media-icon_wrapper" href="mailto:styret@java.no">
                <Mail className="social-media-icon" />
            </a>
        </div>
    );
}

export default SocialMedia;
