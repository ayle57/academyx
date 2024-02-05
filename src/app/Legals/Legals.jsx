import Navbar from "../Navbar/Navbar.jsx";
import Footer from "../Footer/Footer.jsx";

const Legals = () => {
    return <>
        <Navbar/>

        <section className="section legals">
            <div className="legals-inner">
                <div className="legals__header reveal">
                    <span className="mini-btn mini-primary reveal-1">
                        Mentions légales
                    </span>
                    <h2 className="reveal-2">
                        Mentions Légales
                    </h2>
                </div>
                <div className="legals__body reveal">
                    <div className="item reveal-1">
                        <h3>Éditeur du site</h3>
                        <p>AcademyX Online</p>
                        <p>461 Route de Nyons 26770 Rousset-les-Vignes</p>
                        <p>contact@academyxonline.com</p>
                        <p>Entreprise Individuelle</p>
                        <p>Numéro d'identification 982 742 181 R.C.S.Romans</p>
                    </div>
                    <div className="item reveal-2">
                        <h3>Responsable de la Publication</h3>
                        <p>Deymier Loan</p>
                        <p>contact@academyxonline.com</p>
                    </div>
                    <div className="item reveal-3">
                        <h3>Hébergeur du Site</h3>
                        <p>OVHcloud Corporate</p>
                        <p>2 rue Kellermann - 59100 Roubaix - France</p>
                    </div>
                    <div className="item reveal-4">
                        <h3>Propriété Intellectuelle</h3>
                        <p>Le présent site et l'ensemble de son contenu, y compris textes, images, graphismes, logos, et
                            icônes, sont la propriété exclusive de AcademyX Online à l'exception des marques, logos ou
                            contenus appartenant à des sociétés partenaires ou auteurs tiers.</p>
                    </div>
                    <div className="item reveal-5">
                        <h3>Données Personnelles</h3>
                        <p>D'une façon générale, vous pouvez visiter notre site sur Internet sans avoir à décliner votre
                            identité et à fournir des informations personnelles vous concernant. Cependant, nous pouvons
                            parfois vous demander des informations. Par exemple, pour traiter une commande, établir une
                            correspondance, fournir un abonnement. Nous pouvons compléter ces informations pour conclure
                            une transaction ou offrir un meilleur service. </p>
                    </div>
                    <div className="item reveal-6">
                        <h3>Limitation de Responsabilité</h3>
                        <h4>Nature Informatique du Logiciel</h4>
                        <p>Le logiciel fourni par AcademyX Online est un outil d'analyse graphique destiné à faciliter
                            les prises de décision en matière de trading. Il est important de reconnaître que les
                            analyses et résultats fournis par le logiciel sont basés sur des algorithmes et des données
                            historiques, et ne garantissent pas les performances futures.</p>
                        <div className="pad-15">
                            <h5>1. Décisions Financières du Client</h5>
                            <p>Le Client reconnaît que toutes les décisions financières résultant de l'utilisation du
                                logiciel sont de sa seule responsabilité. AcademyX Online ne peut en aucun cas être tenu
                                responsable des gains, pertes ou tout autre résultat financier découlant des actions
                                prises par le Client sur la base des informations fournies par le logiciel.</p>
                            <h5>2. Indépendance des Marchés Financiers</h5>
                            <p>Les marchés financiers sont sujets à des facteurs externes imprévisibles. AcademyX Online
                                ne peut garantir ni la continuité des marchés, ni l'absence de perturbations, ni la
                                validité des données disponibles sur ces marchés.</p>
                            <h5>3. Maintenance et Mises à Jour</h5>
                            <p>AcademyX Online s'efforce de maintenir le logiciel en état de fonctionnement optimal.
                                Cependant, AcademyX Online ne peut garantir l'absence totale d'erreurs ou
                                d'interruptions. Le Client accepte que des périodes de maintenance et des mises à jour
                                régulières peuvent être nécessaires, pendant lesquelles l'accès au logiciel peut être
                                temporairement restreint.</p>
                            <h5>Absence de Garantie Expresse ou Implicite</h5>
                            <p>AcademyX Online ne fournit aucune garantie expresse ou implicite quant à la performance,
                                à la qualité, à la précision ou à l'adéquation à un usage particulier du logiciel. Le
                                Client reconnaît que l'utilisation du logiciel est à ses propres risques.</p>
                        </div>
                        <p>En acceptant ces conditions, le Client reconnaît avoir lu, compris et accepté les limitations de responsabilité énoncées ci-dessus et accepte de dégager AcademyX Online de toute responsabilité quant aux conséquences résultant de l'utilisation du logiciel.</p>
                    </div>
                    <div className="item reveal-7">
                        <h3>Loi Applicable et Juridiction</h3>
                        <p>Les présentes mentions légales sont régies par la loi applicable dans votre pays. Tout litige relatif à l'utilisation du site ou du logiciel sera soumis à la juridiction exclusive des tribunaux compétents.</p>
                    </div>
                </div>
            </div>
        </section>

        <Footer/>
    </>
}

export default Legals;