import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Loginpage() {

    const [isLoggedIn, setLoggedIn] = useState(false);

    const handleLogin = () => {
        setLoggedIn(true);
    };

    const handleLogout = () => {
        setLoggedIn(false);
    };
    
    return (
        <div>
            {isLoggedIn ? (
                <div>
                    <p>Welcome! You are logged in.</p>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            ) : (
                <div>
                    <p>Please login to continue.</p>
                    <button onClick={handleLogin}>Login</button>
                </div>
            )}
            <br />
            <Link to={'/'}>Count</Link><br />
            <Link to={'/blur'}>Blur</Link><br />
            <Link to={'/eventhandlingbtn'}>EventhandlingBtn</Link><br />
            <Link to={'/eventhandler'}>EvntHandler</Link><br />
            <Link to={'/eventhandling'}>EvntHandling</Link><br />
            <Link to={'/eventpooling'}>EvntPooling</Link><br />
            <Link to={'/loginpagecss'}>LoginpageCss</Link><br />
            <Link to={'/onsubmit'}>Onsubmit</Link><br />
            <Link to={'/youtube'}>Youtube</Link><br />
        </div>
    )
}

export default Loginpage;