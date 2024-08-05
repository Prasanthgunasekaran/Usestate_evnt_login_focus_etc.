import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Onsubmit = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // Event handler for form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Submitted Form Data:', { username, password });
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Username:</label>
                <input
                    type="text"
                    id="usernameInput"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />

                <label htmlFor="passwordInput">Password:</label>
                <input
                    type="password"
                    id="passwordInput"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button type="submit">Submit</button>
            </form>
            <br/>
            <Link to={'/'}>Count</Link><br />
            <Link to={'/blur'}>Blur</Link><br />
            <Link to={'/eventhandlingbtn'}>EventhandlingBtn</Link><br />
            <Link to={'/eventhandler'}>EvntHandler</Link><br />
            <Link to={'/eventhandling'}>EvntHandling</Link><br />
            <Link to={'/eventpooling'}>EvntPooling</Link><br />
            <Link to={'/login'}>Loginpage</Link><br />
            <Link to={'/loginpagecss'}>Loginpagecss</Link><br />
            <Link to={'/youtube'}>Youtube</Link><br />
        </div>
    )
}

export default Onsubmit;

