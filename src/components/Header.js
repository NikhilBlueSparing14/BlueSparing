import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/images/logo1.png'
const Header = ({ featuresRef, servicesRef, contactRef }) => {
    const [scrolled, setScrolled] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const navigate = useNavigate();
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY || window.scrollX > lastScrollY) {
                // Scrolling down
                if (window.scrollY || window.scrollX > 0) {
                    setScrolled(true);
                }
            } else {
                // Scrolling up
                setScrolled(false);
            }
            setLastScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    const scrollToRef = (ref) => {
        if (ref && ref.current) {
            window.scrollTo({
                top: ref.current.offsetTop,
                behavior: 'smooth'
            });
        }
    };

    return (
        <header id="site-header" className="fixed-top">
            <div className="container">
                <nav className={`navbar navbar-expand-lg navbar-light ${scrolled ? 'scrolled' : ''}`}>
                    <button className="navbar-brand none" to="/">
                        <img src={logo} alt='logo' className='logo'/>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarScroll">
                        <ul className="navbar-nav mx-auto my-2 my-lg-0 navbar-nav-scroll">
                            <li className="nav-item">
                                <button className="nav-link active none" aria-current="page" to="/">Home</button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link none" onClick={()=>scrollToRef(featuresRef)}>About</button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link none" onClick={() => scrollToRef(servicesRef)}>Services</button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link none" onClick={() => scrollToRef(contactRef)}>Contact</button>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
