import React, { useEffect, useState } from "react";

function Navbar() {
    const [isBurger, setIsBurger] = useState(false);
    const [isBurgerActive, setIsBurgerActive] = useState(false);

    const handleResize = () => {
        const windowWidth = window.innerWidth;
        const breakpoint = 1300;
        setIsBurger(windowWidth <= breakpoint);
    };

    const toggleBurger = () => {
        setIsBurgerActive(!isBurgerActive);
    };

    useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <header className={`${isBurger ? 'burger' : ''}`}>
            <div className="fake-navbar"></div>

            <nav className={`navbar reveal ${isBurgerActive ? 'burger-active' : ''}`}>
                <div className="navbar-header">
                    <div className="navbar-brand">
                        <a href="/">
                            <img src="images/logo.svg" alt="Logo d'academyx"/>
                        </a>
                    </div>
                    <ul className="navbar-links reveal-2">
                        <li>
                            <a href="/#solution">
                                notre solution
                            </a>
                        </li>
                        <li>
                            <a href="/#subscription">
                                abonnements
                            </a>
                        </li>
                        <li>
                            <a href="/#affiliation">
                                affiliation
                            </a>
                        </li>
                        <li>
                            <a href="/#faq">
                                f.a.q.
                            </a>
                        </li>
                        <li>
                            <a href="/#reseller">
                                partenaire
                            </a>
                        </li>
                        <li>
                            <a href="https://linktr.ee/AcademyXOnline" target="blank">
                                nous rejoindre
                            </a>
                        </li>
                        <li>
                            <a href="https://blog.academyxonline.com/">
                                Blog
                            </a>
                        </li>
                    </ul>
                </div>
                <a className={`navbar-burger ${isBurger ? 'active' : ''}`} onClick={toggleBurger}>
                    <img src="images/icons/tools/menu.png" alt="Logo d'un menu burger"/>
                </a>
                <div className="navbar-button reveal-3">
                    <a href="/#subscription" className="btn btn-phantom">
                        Formez vous <span>gratuitement</span>
                    </a>
                </div>
            </nav>

            <div className={`all-nav ${isBurgerActive ? 'show' : ''}`}>
                <div className="all-nav-inner">
                    <ul className="navbar-links">
                        <li>
                            <a href="/#solution">
                                notre solution
                            </a>
                        </li>
                        <li>
                            <a href="/#subscription">
                                abonnements
                            </a>
                        </li>
                        <li>
                            <a href="/#faq">
                                f.a.q.
                            </a>
                        </li>
                        <li>
                            <a href="/#reseller">
                                partenaire
                            </a>
                        </li>
                        <li>
                            <a href="/#affiliation">
                                affiliation
                            </a>
                        </li>
                        <li>
                            <a href="https://linktr.ee/AcademyXOnline" target="blank">
                                nous rejoindre
                            </a>
                        </li>
                    </ul>
                    <div className="navbar-button">
                        <a href="/#subscription" className="btn btn-phantom">
                            Bénéficier de -15% de réduction
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Navbar;
