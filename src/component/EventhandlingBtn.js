import React from 'react';
import { Link } from 'react-router-dom';

function EventhandlingBtn() {

    const handelclick = () => {
        alert("Button Clicked")
    }

    return (
        <div><button onClick={handelclick}>Buttom Clicked</button>
            <br />
            <br/>
            <Link to={'/'}>Count</Link><br />
            <Link to={'/blur'}>Blur</Link><br />
            <Link to={'/eventhandler'}>EvntHandler</Link><br />
            <Link to={'/eventhandling'}>EvntHandling</Link><br />
            <Link to={'/eventpooling'}>EvntPooling</Link><br />
            <Link to={'/login'}>Loginpage</Link><br />
            <Link to={'/loginpagecss'}>LoginpageCss</Link><br />
            <Link to={'/onsubmit'}>Onsubmit</Link><br />
            <Link to={'/youtube'}>Youtube</Link><br /></div>

    )
}

export default EventhandlingBtn
