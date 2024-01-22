const Payment = () => {
    return (
        <section className="section payment" id="subscription">
            <div className="payment-inner">

                <div className="mask"></div>
                <div className="blur"></div>

                <div className="payment__header reveal">
                    <span className="mini-btn mini-primary reveal-1">
                        Abonnement
                    </span>
                    <h2 className="reveal-2">
                        Découvrez nos formules d'abonnement
                    </h2>
                    <p className="reveal-3">
                        Ne laissez pas les opportunités passer, investissez dans votre avenir financier.
                    </p>
                </div>
                <div className="payment__body reveal">
                    <div className="payment-item reveal-1">
                        <div className="payment-item-icon">
                            <img src="images/icons/tools/zap.png" alt=""/>
                        </div>
                        <div className="payment-item-body">
                            <h6>Plan mensuel</h6>
                            <h2>79.99€/mois</h2>
                            <small>Toutes taxes comprise</small>
                        </div>
                        <div className="payment-item-footer">
                            <a href="https://academyx-online.systeme.io/mensuel" className="payment-btn">
                                Choisir le plan mensuel
                            </a>
                            <p>
                                Démarrer GRATUITEMENT l’essaie pendant 14 jours
                            </p>
                        </div>
                    </div>

                    <div className="payment-item active reveal-2">
                        <div className="payment-item-icon">
                            <img src="images/icons/tools/coin.png" alt=""/>
                        </div>
                        <div className="payment-item-body">
                            <h6>Plan annuel <span>Réduction -15%</span></h6>
                            <h2>814.99€/an</h2>
                            <small>Toutes taxes comprise</small>
                        </div>
                        <div className="payment-item-footer">
                            <a href="https://academyx-online.systeme.io/annuel" className="payment-btn payment-btn-phantom">
                                Choisir le plan annuel
                            </a>
                            <p>
                                Démarrer GRATUITEMENT l’essaie pendant 14 jours
                            </p>
                        </div>
                    </div>

                    <div className="payment-item reveal-3">
                        <div className="payment-item-icon">
                            <img src="images/icons/tools/plate.png" alt=""/>
                        </div>
                        <div className="payment-item-body">
                            <h6>Abonnements multiples</h6>
                            <h2>Nous contacter</h2>
                            <br />
                        </div>
                        <div className="payment-item-footer">
                            <a href="https://academyx-online.systeme.io/contact" className="payment-btn">
                                Contacter l'équipe
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Payment;