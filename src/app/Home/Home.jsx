
const Home = () => {
    return (
        <section className="section home">
            <div className="home-inner">

                <div className="home-container reveal">
                    <div className="mini-buttons-container">
                            <span className="mini-btn reveal-1">
                                Trading View
                            </span>
                        <span className="mini-btn reveal-2">
                                Bourse
                            </span>
                        <span className="mini-btn reveal-3">
                                Forex
                            </span>
                        <span className="mini-btn reveal-4">
                                Crypto
                            </span>
                    </div>
                    <h1 className="reveal-1">
                        AcademyX Online : La <span>Puissance Cumulée</span> à Votre Service !
                    </h1>
                    <p className="reveal-2">
                        Décuplez vos performances de trading avec notre suite d'outils d'analyse avancée, regroupant
                        trois fonctionnalités puissantes en un seul ensemble inégalé.
                    </p>
                    <div className="container reveal-3">
                        <a href="/#subscription" className="btn btn-lg btn-primary">
                            Tester GRATUITEMENT pendant 14 jours
                        </a>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Home;
