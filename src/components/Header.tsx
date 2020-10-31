import React, {useState} from 'react';
import '../scss/header.scss';
import {ReactComponent as ChevronDown} from '../icons/down-chevron.svg';
import {ReactComponent as ChevronUp} from '../icons/up-chevron.svg';
import classNames from 'classnames';

export function Header() {
    const [chevronUp, setChevronUp] = useState(false);

    const changeChevron = () => {
        return chevronUp ? <ChevronUp className="chevron" /> : <ChevronDown className="chevron" />;
    };

    const javaBinName = '< javaBin />';

    return (
        <div className="header">
            <button className="header-logo">{javaBinName}</button>
            <div className="hamburger-menu">
                <a href="/" className="navbar-links">
                    Om oss
                </a>
                <a href="/" className="navbar-links" onClick={() => setChevronUp(!chevronUp)}>
                    Regioner
                    {changeChevron()}
                </a>
                <a href="/" className="navbar-links">
                    Styret
                </a>
                <a href="/" className="navbar-links">
                    Kontakt oss
                </a>
            </div>
        </div>
    );
}
export default Header;
