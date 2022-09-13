import React from 'react';
import './style.navbar.css';

const NavBar = (props: {className: string}) => {
    const {className} = props;
    return (
        <nav className={`navbar navbar-default ${className}`} role="navigation" id="home-menu">
            <div className="container">
                <div className="navbar-header">
                    <button type="button" aria-label="Navbar Toggle" className="navbar-toggle"
                            data-toggle="collapse"
                            data-target=".navbar-ex1-collapse" id="menu-toggle">
                        <span className="fa fa-bars"></span>
                    </button>
                    <h1><a className="navbar-brand" href="#">Nguyen Thuc</a></h1>
                </div>
                <div className="collapse navbar-collapse navbar-ex1-collapse">
                    <ul className="nav navbar-nav navbar-right">
                        <li className="current"><a href="#homepage">Home</a></li>
                        <li><a href="#intro">About</a></li>
                        <li><a href="#experience">Experience</a></li>
                        <li><a href="#last-work">Last Work</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;