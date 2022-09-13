import React from 'react';
import NavBar from "./NavBar";

const HomePage = (props: {navBarClassName: string}) => {
    const {navBarClassName} = props;
    return (
        <section id="homepage">
            <canvas id="homepage-canvas"></canvas>
            <div className="home-overlay"></div>
            <div className="homapage-content">
                <NavBar className={navBarClassName} />
                <div className="home-user text-center">
                    <h2>Nguyen Thuc</h2>
                    <p>
                        <a href="#last-work">#Web Developer</a>
                        <a href="#last-work">#PHP</a>
                        <a href="#last-work">#Java Spring</a>
                        <a href="#last-work">#Node.js</a>
                    </p>
                </div>
            </div>
        </section>
    );
}

export default HomePage;