import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';


function Blur() {
    const [isFocused, setIsFocused] = useState("");
    const handleFocus = () => {
        setIsFocused(true);
    }
    const handleBlur = () => {
        setIsFocused(false);
    }
    return (
        <div>
            <input
                type="text"
                onFocus={handleFocus}
                onBlur={handleBlur}
                placeholder="Type something..."
                style={{
                    border: isFocused ? '10px solid Red' : '3px solid green',
                    padding: '10px',
                }}
            />
            <p>{isFocused ? 'Input is focused!' : 'Input is not focused.'}</p>
            <br />
            <Link to={'/'}>Count</Link><br />
            <Link to={'/eventhandlingbtn'}>EventhandlingBtn</Link><br />
            <Link to={'/eventhandler'}>EvntHandler</Link><br />
            <Link to={'/eventhandling'}>EvntHandling</Link><br />
            <Link to={'/eventpooling'}>EvntPooling</Link><br />
            <Link to={'/login'}>Loginpage</Link><br />
            <Link to={'/loginpagecss'}>LoginpageCss</Link><br />
            <Link to={'/onsubmit'}>Onsubmit</Link><br />
            <Link to={'/youtube'}>Youtube</Link><br />
  
        </div>
    )
}

export default Blur
