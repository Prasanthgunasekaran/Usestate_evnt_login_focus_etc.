import React, { useState } from 'react';
import './Counter.scss';
import { Link } from 'react-router-dom';


function Counter() {

    const [count, setcount] = useState(0);
    const Increase = () => {
        setcount(count + 2)
        // setcount("Login")

    }

    const Decrese = () => {
        setcount(count - 1)
        // setcount("LogOut")
    }

    //IsOn
    const [ison, setison] = useState(false);

    const on = () => {
        setison(true)
    };
    const off = () => {
        setison(false)
    };
    let text;
    if (ison) {
        text = 'ON';
    } else {
        text = 'OFF'
    }

    // MouseOver
    const [isHover, setIsHover] = useState(false);

    const handelHover = () => {
        setIsHover(true);
    }
    const handelOut = () => {
        setIsHover(false);
    }


    return (
        <div>
            <h1>count:{count}</h1>
            <button onClick={Increase}>Increase</button>
            <button onClick={Decrese}>Decrese</button>
            <br />
            <br />
            <button onClick={on}>On</button>
            <button onClick={off}>Off</button>
            <p> TEXT : {text}</p>
            <br />
            <br />
            <div className='HoverStyle'
                MouseOver={handelHover}
                MouseOut={handelOut}

            >
                <p>
                    Move your mouse over this area to see the background color change!
                </p>
            </div>

            <br />
            <Link to={'/blur'}>Blur</Link><br />
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

export default Counter