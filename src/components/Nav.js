import Link from 'react-router';

const Nav = () => {
    return (
        <div>
            <nav className="nav-wrapper">
                <ul>
                    <li><Link to="/Game" />Game</li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav