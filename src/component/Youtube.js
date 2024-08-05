import React from 'react';
import { Link } from 'react-router-dom';

function Youtube() {

    const websiteUrl = 'https://www.youtube.com/';
    return (
        <div>
            <a href={websiteUrl} target="_blank" rel="noopener noreferrer">
                Visit Example.com
            </a>
            <br />
            <Link to={'/'}>Count</Link><br />
            <Link to={'/blur'}>Blur</Link><br />
            <Link to={'/eventhandlingbtn'}>EventhandlingBtn</Link><br />
            <Link to={'/eventhandler'}>EvntHandler</Link><br />
            <Link to={'/eventhandling'}>EvntHandling</Link><br />
            <Link to={'/eventpooling'}>EvntPooling</Link><br />
            <Link to={'/login'}>Loginpage</Link><br />
            <Link to={'/loginpagecss'}>LoginpageCss</Link><br />
            <Link to={'/onsubmit'}>Onsubmit</Link><br />
        </div>
    )
}

export default Youtube;
