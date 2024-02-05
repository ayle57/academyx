import Navbar from "../Navbar/Navbar.jsx";
import Footer from "../Footer/Footer.jsx";

const Mentions = () => {
    return <>
        <Navbar/>

        <section className="section legals">
            <div className="legals-inner">
                <div className="legals__header reveal">
                    <span className="mini-btn mini-primary reveal-1">
                        Mentions légales
                    </span>
                    <h2 className="reveal-2">
                        Politique de Confidentialité
                    </h2>
                    <p className="reveal-3">
                        Dernière mise à jour : 06/01/2024
                    </p>
                </div>
                <div className="legals__body reveal">
                    <div className="item reveal-1">
                        <h3>Collecte et Utilisation des Informations</h3>
                        <h4>1. Informations Personnelles Collectées</h4>
                        <p>Nous pouvons collecter les informations personnelles suivantes lors de l'utilisation de notre logiciel de trading :</p>
                        <ul className="pad-15">
                            <li>Nom et prénom</li>
                            <li>Adresse e-mail</li>
                            <li>Informations de paiement</li>
                        </ul>
                        <h4>2. Utilisation des Informations</h4>
                        <p>Les informations collectées sont utilisées dans le but de :</p>
                        <ul className="pad-15">
                            <li>Fournir et améliorer nos services</li>
                            <li>Gérer les comptes utilisateurs</li>
                            <li>Traiter les paiements</li>
                            <li>Personnaliser l'expérience utilisateur</li>
                            <li>Envoyer des mises à jour et des informations relatives au logiciel ou à l’entreprise</li>
                        </ul>
                    </div>
                    <div className="item reveal-2">
                        <h3>Protection des Données</h3>
                        <h4>1. Sécurité des Données</h4>
                        <p>Nous mettons en place des mesures de sécurité appropriées pour protéger vos informations personnelles contre tout accès non autorisé, altération, divulgation ou destruction.</p>
                        <h4>2. Conservation des Données</h4>
                        <p>Nous conservons vos informations personnelles aussi longtemps que nécessaire pour fournir nos services et conformément aux obligations légales. Les données financières sensibles ne sont pas stockées sur nos serveurs.</p>
                    </div>
                    <div className="item reveal-3">
                        <h3>Partage des Informations</h3>
                        <h4>1. Partage avec des Tiers</h4>
                        <p>Nous ne partageons pas vos informations personnelles avec des tiers sans votre consentement, sauf dans les cas suivants :</p>
                        <ul className="pad-15">
                            <li>Pour répondre à des obligations légales</li>
                            <li>Pour protéger nos droits, la vie privée, la sécurité ou les biens</li>
                            <li>En cas de fusion, acquisition ou vente d'actifs</li>
                        </ul>
                    </div>
                    <div className="item reveal-4">
                        <h3>Vos Choix et Droits</h3>
                        <h4>1. Accès, Modification, et Suppression</h4>
                    </div>
                    <div className="item reveal-5">
                        <h3>Cookies et Technologies Similaires</h3>
                        <h4>1. Cookies</h4>
                        <p>Nous utilisons des cookies et des technologies similaires pour améliorer l'expérience utilisateur et analyser les tendances d'utilisation. Vous pouvez désactiver les cookies dans les paramètres de votre navigateur.</p>
                    </div>
                    <div className="item reveal-6">
                        <h3>Modifications de la Politique de Confidentialité</h3>
                        <h4>1. Modifications</h4>
                        <p>Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Toute modification sera publiée sur notre site web avec la date de la dernière mise à jour.</p>
                    </div>
                    <div className="item reveal-7">
                        <h3>Contact</h3>
                        <h4>1. Contactez-nous</h4>
                        <p>Pour toute question concernant cette politique de confidentialité, veuillez nous contacter à l'adresse suivante : contact@academyxonline.com.</p>
                    </div>
                </div>
            </div>
        </section>

        <Footer/>
    </>
}

export default Mentions;