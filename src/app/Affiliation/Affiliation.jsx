
const Affiliation = () => {
    return (
        <section className="section affiliation" id="affiliation">
            <div className="affiliation-inner">

                <div className="affiliation__header reveal">
                    <span className="mini-btn mini-primary reveal-1">
                        Affiliation
                    </span>
                    <h2 className="reveal-2">
                        Parlez de nous, et soyez récompensé !
                    </h2>
                </div>

                <div className="affiliation__body reveal">
                    <div className="affiliation-body-chart reveal-1">
                        <img src="images/charts/chart.png" alt=""/>
                    </div>
                    <div className="affiliation-body-cards">
                        <div className="affiliation-card-container">
                            <div className="affiliation-card-item reveal-1">
                                <h5>
                                    Etape 1 - Devenez partenaire
                                </h5>
                                <p>
                                    Remplissez le formulaire d'affiliation et créer votre compte sur notre plateforme partenaire.
                                </p>
                            </div>
                            <div className="affiliation-card-item reveal-3">
                                <h5>
                                    Etape 2 - Partagez à vos filleuls
                                </h5>
                                <p>
                                    Parlez de nous autour de vous afin de bénéficier de 20% de commission sur chacun des abonnement de vos filleuls.
                                </p>
                            </div>
                            <div className="affiliation-card-item reveal-5">
                                <h5>
                                    Etape 3 - Récupérez vos gains
                                </h5>
                                <p>
                                    Retirez vos gains dés que vous le souhaitez.
                                </p>
                            </div>
                        </div>
                        <div className="container reveal-6">
                            <a href="https://docs.google.com/forms/d/e/1FAIpQLSd-PP12DdMeOH9Tlbbh0lwkulsEA0EZEnfbYEXOdN1tGpx87A/viewform?usp=pp_url" target="blank">
                                Postuler ici <img src="images/icons/tools/toll.png" alt=""/>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Affiliation;