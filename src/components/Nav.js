import React from 'react';
import { Link } from 'react-router-dom'; // Need this to render li's 

const Nav = () => {
    return (
        <div>
            <nav className="nav-wrapper">
                <ul>
                    <Link to ="/">
                        <li>Home</li>
                    </Link>
                    <Link to="/Game">
                        <li>Game</li>
                    </Link>
                </ul>
            </nav>
        </div>
    )
}

export default Nav