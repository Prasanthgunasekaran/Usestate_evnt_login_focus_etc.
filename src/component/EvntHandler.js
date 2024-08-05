// Event Handlers 

// OnChange 

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function EvntHandler() {

    const [inputValue, setInputValue] = useState('');

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    return (
        <div>
            <label>Type something:</label>
            <input
                type="text"
                id="exampleInput"
                value={inputValue}
                onChange={handleChange}
            />
            <p>You typed: {inputValue}</p>
            <br />
            <Link to={'/'}>Count</Link><br />
            <Link to={'/blur'}>Blur</Link><br />
            <Link to={'/eventhandlingbtn'}>EventhandlingBtn</Link><br />
            <Link to={'/eventhandling'}>EvntHandling</Link><br />
            <Link to={'/eventpooling'}>EvntPooling</Link><br />
            <Link to={'/login'}>Loginpage</Link><br />
            <Link to={'/loginpagecss'}>LoginpageCss</Link><br />
            <Link to={'/onsubmit'}>Onsubmit</Link><br />
            <Link to={'/youtube'}>Youtube</Link><br />
        </div>
    )
}

export default EvntHandler;

