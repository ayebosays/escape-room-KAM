// This is the new landing page. All the other components that were named "Header", "How It Works" and "About Us" all live in here now 
import React from 'react'

const Home = () => {
    return (
        <div>
            {/* Main section when page loads */}
            <header>
                <div className="header-text-container">
                    <h1>Name of our App</h1>
                    <h3>One sentence describing the app</h3>
                    <p>More text describing the app. What softwares we used to create.</p>
                </div>
                <div className="header-screenshot">
                    <h1>Screenshot or GIF of app</h1>
                    
                </div>
            </header>

            {/* How the game works - explain the game  */}
            <section className="howitworks-container">
                <h1>How the app works section</h1>

            </section>

            {/* About Us section  */}
            <section className="about-us">
                <ul className="about-us-container">
                    <li className="aboutus-card">
                        <div className="changetoimg">Headshot here</div>
                        <div className="aboutus-contact">
                            <h3>Abel</h3>
                            <p>description about dev</p>
                            <a href="#.html">Social 1</a>
                            <a href="#.html">Social 2</a>
                        </div>
                    </li>
                    <li className="aboutus-card">
                        <div className="changetoimg">Headshot here</div>
                        <div className="aboutus-contact">
                            <h3>Kent</h3>
                            <p>description about dev</p>
                            <a href="#.html">Social 1</a>
                            <a href="#.html">Social 2</a>
                        </div>
                    </li>
                    {/* <li className="aboutus-card">
                        <div className="changetoimg">Headshot here</div>
                        <div className="aboutus-contact">
                            <h3>Maria</h3>
                            <p>description about dev</p>
                            <a href="#.html">Social 1</a>
                            <a href="#.html">Social 2</a>
                        </div>
                    </li> */}
                </ul>
            </section>
        </div>
    )
}

export default Home