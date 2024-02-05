
import Navbar from "../Navbar/Navbar.jsx";
import Footer from "../Footer/Footer.jsx";

const CGV = () => {
    return <>
        <Navbar/>

        <section className="section legals">
            <div className="legals-inner">
                <div className="legals__header reveal">
                    <span className="mini-btn mini-primary reveal-1">
                        Mentions légales
                    </span>
                    <h2 className="reveal-2">
                        Conditions Générales de Vente
                    </h2>
                </div>
                <div className="legals__body reveal">
                    <div className="item reveal-1">
                        <div className="pad-15">
                            <h4>1. Objet du Contrat</h4>
                            <p>Les présentes Conditions Générales de Vente (CGV) régissent la vente des outils d’analyse, dénommés ci-après "le logiciel", par Academyx Online, ci-après dénommé "le Vendeur".</p>
                            <br /><h4>2. Utilisation du Logiciel</h4>
                            <p>En acquérant le logiciel, le Client reconnaît qu'il s'agit d'un outil d'analyse et que le Vendeur ne fournit aucun conseil financier personnalisé. Le Vendeur ne peut être tenu responsable des décisions financières prises par le Client sur la base des informations fournies par le logiciel.</p>
                            <br /><h4>3. Droit de Rétractation</h4>
                            <p>Conformément à l’article L121-21-8 du Code de la Consommation, le Client reconnaît et accepte expressément de renoncer à son droit de rétractation après l'achat du logiciel.</p>
                            <br /><h4>4. Tarifs et Paiement</h4>
                            <p>Les tarifs du logiciel sont indiqués sur le site web du Vendeur. Le paiement s'effectue en ligne via les moyens de paiement proposés lors de la commande.</p>
                            <br /><h4>5. Livraison du Logiciel</h4>
                            <p>Le logiciel est livré électroniquement après confirmation du paiement. Le Client est responsable de s'assurer que les spécifications matérielles et logicielles requises sont remplies.</p>
                            <br /><h4>6. Support Technique</h4>
                            <p>Le Vendeur fournit un support technique selon les modalités spécifiées sur le site web. Le Client est responsable de la configuration et de l'utilisation du logiciel.</p>
                            <br /><h4>7. Limitation de Responsabilité</h4>
                            <p>Le Vendeur ne peut être tenu responsable des pertes financières subies par le Client résultant de l'utilisation du logiciel. Le Client reconnaît que les marchés financiers comportent des risques inhérents.</p>
                            <br /><h4>8. Droits de Propriété Intellectuelle</h4>
                            <p>Le logiciel est protégé par des droits de propriété intellectuelle détenus par le Vendeur. Toute reproduction, distribution ou utilisation non autorisée est strictement interdite.</p>
                            <br /><h4>9. Loi Applicable et Juridiction</h4>
                            <p>Les présentes CGV sont régies par la loi applicable dans le pays du Vendeur. Tout litige relatif aux présentes CGV sera soumis à la juridiction exclusive des tribunaux compétents.</p>
                            <br /><h4>10. Engagement de Confidentialité</h4>
                            <p>Le Client s'engage à maintenir la confidentialité des informations sensibles fournies par le logiciel et à ne pas les partager avec des tiers sans autorisation écrite du Vendeur.</p>
                            <br /><h4>11. Force Majeure</h4>
                            <p>Le Vendeur ne peut être tenu responsable des retards ou des défauts de performance dus à des circonstances indépendantes de sa volonté, telles que des catastrophes naturelles, des grèves, ou des pannes techniques majeures.</p>
                            <br /><h4>12. Sous-traitance</h4>
                            <p>Le Vendeur se réserve le droit de sous-traiter tout ou partie de ses obligations en vertu des présentes CGV, sans notification préalable au Client.</p>
                            <br /><h4>13. Formation Complémentaire Incluse</h4>
                            <p>En souscrivant à un abonnement au logiciel, le Client bénéficie automatiquement d'une formation complémentaire offerte. Cette formation est destinée à optimiser l'utilisation du logiciel, et le Client reconnaît qu'elle ne constitue en aucun cas des conseils financiers personnalisés.</p>
                            <br /><h4>14. Durée de la Formation</h4>
                            <p>La durée de la formation complémentaire peut varier en fonction des besoins spécifiques du Client et du niveau d'abonnement souscrit. Le Vendeur se réserve le droit de modifier la durée de la formation, tout en informant le Client en temps utile.</p>
                            <br /><h4>15. Limitation de Responsabilité pour la Formation</h4>
                            <p>Le Vendeur ne peut être tenu responsable des résultats spécifiques obtenus par le Client suite à la formation complémentaire. Les informations fournies dans le cadre de la formation ne constituent pas des garanties de gains financiers.</p>
                            <br /><h4>16. Fin de l'Accès à la Formation</h4>
                            <p>L'accès à la formation complémentaire prend fin automatiquement à l'expiration de l'abonnement au logiciel, sauf indication contraire spécifiée par le Vendeur.</p>
                            <br /><h4>17. Modification des CGV</h4>
                            <p>Le Vendeur se réserve le droit de modifier les CGV à tout moment. Les modifications seront publiées sur le site web et prendront effet immédiatement pour toute nouvelle commande.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <Footer/>
    </>
}

export default CGV;
