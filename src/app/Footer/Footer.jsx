const Footer = () => {
    return (
        <footer>
            <div className="footer-header reveal">
                <div className="footer-credit reveal-1">
                    <div className="footer-credit-brands reveal-2">
                        <img src="images/logo.svg" alt=""/>
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
                            <img src="../images/icons/socials/instagram.svg" alt="Logo d'instagram"/>
                            Instagram
                        </a>
                    </li>
                    <li className="reveal-3">
                        <a href="https://www.tiktok.com/@academyxonline" target="blank">
                            <img src="../images/icons/socials/tiktok.svg" alt="Logo de tiktok"/>
                            TikTok
                        </a>
                    </li>
                    <li className="reveal-4">
                        <a href="https://t.me/AcademyXOnline" target="blank">
                            <img src="../images/icons/socials/telegram.svg" alt="Logo de telegram"/>
                            Telegram
                        </a>
                    </li>
                    <li className="reveal-5">
                        <a href="https://discord.gg/ejdu9T4HGm" target="blank">
                            <img src="../images/icons/socials/discord.png" alt="Logo de discord"/>
                            Discord
                        </a>
                    </li>
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
