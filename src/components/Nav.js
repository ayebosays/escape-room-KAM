import React from 'react';
import { BrowserRouter as Link } from 'react-router-dom';   //This is necessary in order to use <Link>

const Nav = () => {
    return (
        <div>
            <nav className="nav-wrapper">
                <ul>
                    <Link to="/Game" />
                </ul>
            </nav>
        </div>
    )
}

export default Nav