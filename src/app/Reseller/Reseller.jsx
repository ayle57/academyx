
const Reseller = () => {

    return (
        <section className="section resellers" id="reseller">
            <div className="resellers-inner">

                <div className="mask"></div>
                <div className="blur"></div>


                <div className="resellers__header reveal">
                    <span className="mini-btn mini-primary reveal-1">
                        Partenaire
                    </span>
                </div>

                <div className="resellers__body">

                    <div className="resellers-body-content reveal">
                        <h2 className="reveal-1">
                            Bulls4Ever - Communauté Privée de Trading Crypto.
                        </h2>
                        <p className="reveal-2">
                            Construisons ensemble un lieu d'échange et d'opportunités de qualités.
                            Seul nous allons plus vite, ensembles nous allons plus loin !
                        </p>
                        <ul>
                            <li className="reveal-3">
                                <img src="images/icons/svg/check-icon.svg" alt=""/>
                                Des Stratégies de trading Automatisable à la pointe de la Technologie.
                            </li>
                            <li className="reveal-4">
                                <img src="images/icons/svg/check-icon.svg" alt=""/>
                                Une Communauté Francophone basée sur l'Entre Aide.
                            </li>
                            <li className="reveal-5">
                                <img src="images/icons/svg/check-icon.svg" alt=""/>
                                Une équipe expérimentée et soudée depuis plusieurs années.
                            </li>
                        </ul>
                        <div className="container reveal-6">
                            <a href="https://t.me/Bulls4Ever" target="blank">
                                Découvrir notre partenaire <img src="images/Icons/link-external.svg" alt=""/>
                            </a>
                        </div>
                    </div>
                    <div className="resellers-body-image reveal">
                        <img src="images/icons/svg/person.svg" className="reveal-2" alt="Image d'un robot"/>
                    </div>

                </div>

            </div>
        </section>
    );

}

export default Reseller;

