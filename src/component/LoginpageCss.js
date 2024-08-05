// Inline css

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function LoginpageCss() {

    const [isLoggedIn, setLoggedIn] = useState(false);

    const handleLogin = () => {
        setLoggedIn(true);
    };

    const handleLogout = () => {
        setLoggedIn(false);
    };

    const buttonClass = isLoggedIn ? 'logout-button' : 'login-button';
    const buttonStyle = isLoggedIn
        ? { backgroundColor: 'red', color: 'white' }
        : { backgroundColor: 'green', color: 'white' };
    return (
        <div>
            {isLoggedIn ? (
                <div>
                    <p>Welcome! You are logged in.</p>
                    <button className={buttonClass} style={buttonStyle} onClick={handleLogout}>
                        Logout
                    </button>
                </div>
            ) : (
                <div>
                    <p>Please login to continue.</p>
                    <button className={buttonClass} style={buttonStyle} onClick={handleLogin}>
                        Login
                    </button>
                </div>
            )}
            <br/>
            <Link to={'/'}>Count</Link><br />
            <Link to={'/blur'}>Blur</Link><br />
            <Link to={'/eventhandlingbtn'}>EventhandlingBtn</Link><br />
            <Link to={'/eventhandler'}>EvntHandler</Link><br />
            <Link to={'/eventhandling'}>EvntHandling</Link><br />
            <Link to={'/eventpooling'}>EvntPooling</Link><br />
            <Link to={'/login'}>Loginpage</Link><br />
            <Link to={'/onsubmit'}>Onsubmit</Link><br />
            <Link to={'/youtube'}>Youtube</Link><br />
        </div>
    )
}

export default LoginpageCss;
