import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function EvntHandling() {
    const [keyPressed, setKeyPressed] = useState('');

    const handleKeyDown = (event) => {
        setKeyPressed(`Keypressed:${event.key}`);
    };
    return (
        <div>
            <h2>Key Events Example</h2>
            <input
                type="text"
                placeholder="Type something..."
                onKeyDown={handleKeyDown}
            />
            <p>{keyPressed}</p>
            <br />
            <Link to={'/'}>Count</Link><br />
            <Link to={'/blur'}>Blur</Link><br />
            <Link to={'/eventhandlingbtn'}>EventhandlingBtn</Link><br />
            <Link to={'/eventhandler'}>EvntHandler</Link><br />
            <Link to={'/eventpooling'}>EvntPooling</Link><br />
            <Link to={'/login'}>Loginpage</Link><br />
            <Link to={'/loginpagecss'}>LoginpageCss</Link><br />
            <Link to={'/onsubmit'}>Onsubmit</Link><br />
            <Link to={'/youtube'}>Youtube</Link><br />
        </div>
    )
}

export default EvntHandling;
