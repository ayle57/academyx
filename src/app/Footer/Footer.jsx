const Footer = () => {
    return (
        <footer>
            <div className="footer-header reveal">
                <div className="footer-credit reveal-1">
                    <div className="footer-credit-brands reveal-2">
                        <img src="images/logo.png" alt=""/>
                    </div>
                    <nav className="footer-credit-nav reveal-3">
                        <a href="/#solution">Solution</a>
                        <a href="/#subscription">Abonnement</a>
                        <a href="/#faq">F.A.Q.</a>
                        <a href="/#reseller">Partenaire</a>
                    </nav>
                </div>

                <ul className="footer-social reveal-2">
                    <li className="reveal-2">
                        <a href="https://www.instagram.com/academyxonline/" target="blank">
                            <img src="images/Icons/instagram.svg" alt=""/>
                            Instagram
                        </a>
                    </li>
                    <li className="reveal-3">
                        <a href="https://www.tiktok.com/@academyx.online?_t=8j0Mjg2BVK5&_r=1" target="blank">
                            <img src="images/Icons/tiktok.svg" alt=""/>
                            TikTok
                        </a>
                    </li>
                    <li className="reveal-4">
                        <a href="https://t.me/AcademyXOnline" target="blank">
                            <img src="images/Icons/telegram.svg" alt=""/>
                            Telegram
                        </a>
                    </li>
                    <li className="reveal-5"></li>
                </ul>
            </div>
            <div className="footer-footer reveal">
                <p className="reveal-4">
                    © 2024 AcademyX Online. Pensé par Thomas Fuentes et developpé par Allistair
                </p>
                <nav className="reveal-5">
                    <a href="/legals" className="reveal-5">Mentions légales</a>
                    <a href="/disclaimer" className="reveal-6">Disclaimer</a>
                    <a href="/cgu" className="reveal-7">CGU</a>
                    <a href="/cgv" className="reveal-8">CGV</a>
                    <a href="/mentions" className="reveal-9">Politique de Confidentialité</a>
                </nav>
            </div>
        </footer>
    );
}

export default Footer;