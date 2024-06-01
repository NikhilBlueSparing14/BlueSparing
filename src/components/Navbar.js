import React, { useState, useEffect } from 'react';


const Navbar = () => {
    const [isNavFixed, setIsNavFixed] = useState(false);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 80) {
                setIsNavFixed(true);
            } else {
                setIsNavFixed(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleNav = () => {
        setIsActive(!isActive);
        document.body.classList.toggle('noscroll', !isActive);
    };

    return (
        <header id="site-header" className={isNavFixed ? 'nav-fixed' : ''}>
            <nav className="navbar navbar-expand-lg">
                <button className="navbar-toggler" type="button" onClick={toggleNav}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse ${isActive ? 'show' : ''}`} id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item"><a className="nav-link" href="/">Home</a></li>
                        <li className="nav-item"><a className="nav-link" href="/">About</a></li>
                        <li className="nav-item"><a className="nav-link" href="/">Services</a></li>
                        <li className="nav-item"><a className="nav-link" href="/">Contact</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
