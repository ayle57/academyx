
import Navbar from "../Navbar/Navbar.jsx";
import Footer from "../Footer/Footer.jsx";

const CGU = () => {
    return <>
        <Navbar/>

        <section className="section legals">
            <div className="legals-inner">
                <div className="legals__header reveal">
                    <span className="mini-btn mini-primary reveal-1">
                        Mentions légales
                    </span>
                    <h2 className="reveal-2">
                        Conditions Générales d'Utilisation
                    </h2>
                </div>
                <div className="legals__body reveal">
                    <div className="item reveal-1">
                        <div className="pad-15">
                            <h4>1. Acceptation des CGU</h4>
                            <p>L'utilisation du logiciel est soumise aux présentes Conditions Générales d'Utilisation
                                (CGU). En utilisant le logiciel, le Client accepte les CGU dans leur intégralité.</p>
                            <br /><h4>2. Licence d'Utilisation</h4>
                            <p>Le Vendeur accorde au Client une licence d'utilisation non exclusive et non transférable
                                du logiciel à des fins professionnelles dans le cadre de ses activités de trading et
                                d'investissement. Le Client s'engage à ne pas reproduire, distribuer ou modifier le
                                logiciel, sauf dans la mesure expressément autorisée par les présentes CGU. </p>
                            <br /><h4>3. Responsabilités du Client</h4>
                            <p>Le Client est responsable de l'utilisation du logiciel et de la confidentialité de ses
                                identifiants. Tout accès non autorisé doit être signalé au Vendeur immédiatement.</p>
                            <br /><h4>4. Mises à Jour et Modifications</h4>
                            <p>Le Vendeur peut effectuer des mises à jour ou des modifications du logiciel. Le Client
                                est responsable de mettre à jour le logiciel selon les instructions fournies.</p>
                            <br /><h4>5. Collecte de Données</h4>
                            <p>Le Client consent à la collecte et au traitement de données personnelles par le
                                Vendeur.</p>
                            <br /><h4>6. Fin de la Licence</h4>
                            <p>La licence d'utilisation prend fin automatiquement en cas de non-respect des CGU par le
                                Client. Le Vendeur se réserve le droit de résilier la licence en cas de violation des
                                termes.</p>
                            <br /><h4>7. Limitation de Responsabilité</h4>
                            <p>Le Vendeur ne peut être tenu responsable des perturbations ou indisponibilités du
                                logiciel, sauf en cas de faute intentionnelle ou de négligence grave.</p>
                            <br /><h4>8. Utilisation Commerciale</h4>
                            <p>Le logiciel est destiné à un usage personnel du Client. Toute utilisation à des fins
                                commerciales ou la revente de l'accès au logiciel est strictement interdite sans
                                l'autorisation écrite du Vendeur.</p>
                            <br /><h4>9. Sécurité du Compte</h4>
                            <p>Le Client est responsable de maintenir la sécurité de son compte utilisateur et de prendre des mesures raisonnables pour empêcher tout accès non autorisé à son compte.</p>
                            <br /><h4>10. Interdiction de Décompilation</h4>
                            <p>Il est interdit au Client de décompiler, désassembler, ou tenter de reconstruire le code source du logiciel.</p>
                            <br /><h4>11. Comportement Abusif</h4>
                            <p>Le Vendeur se réserve le droit de suspendre ou de résilier le compte du Client en cas de comportement abusif, y compris l'utilisation du logiciel à des fins illégales ou frauduleuses.</p>
                            <br /><h4>12. Notification de Violation</h4>
                            <p>Le Client s'engage à informer immédiatement le Vendeur de toute violation des CGU dont il a connaissance.</p>
                            <br /><h4>13. Compatibilité Matérielle et Logicielle</h4>
                            <p>Le Client est responsable de s'assurer que son équipement informatique répond aux exigences matérielles et logicielles spécifiées par le Vendeur pour une utilisation optimale du logiciel.</p>
                            <br /><h4>14. Publicité et Témoignages</h4>
                            <p>Le Client autorise le Vendeur à utiliser son nom, logo et témoignage à des fins de marketing, sauf indication contraire écrite.</p>
                            <br /><h4>15. Suspension Temporaire du Service</h4>
                            <p>Le Vendeur se réserve le droit de suspendre temporairement l'accès au service pour des opérations de maintenance planifiées. Le Client sera informé à l'avance de toute interruption majeure.</p>
                            <br /><h4>16. Utilisation Conforme aux Lois et Règlements</h4>
                            <p>Le Client s'engage à utiliser le logiciel conformément à toutes les lois et réglementations applicables. Le Vendeur se réserve le droit de suspendre le service en cas d'utilisation illégale.</p>
                            <br /><h4>17. Indemnisation</h4>
                            <p>Le Client s'engage à indemniser le Vendeur de toute réclamation ou perte résultant de l'utilisation du logiciel en violation des CGU.</p>
                            <br /><h4>18. Références Clients</h4>
                            <p>Le Client autorise le Vendeur à utiliser son nom en tant que référence client à des fins promotionnelles, sauf indication contraire écrite.</p>
                            <br /><h4>19. Contenu de la Formation et Propriété Intellectuelle</h4>
                            <p>Le contenu de la formation complémentaire est protégé par des droits de propriété intellectuelle détenus par le Vendeur. Toute reproduction, distribution ou utilisation non autorisée est strictement interdite.</p>
                            <br /><h4>20. Modification des CGU</h4>
                            <p>Le Vendeur se réserve le droit de modifier les CGU à tout moment. Les modifications seront publiées sur le site web et prendront effet immédiatement pour tout nouvel accès au logiciel.</p>
                            <br /><h4>21. Loi Applicable et Juridiction</h4>
                            <p>Les présentes CGU sont régies par la loi applicable dans le pays du Vendeur. Tout litige relatif aux présentes CGU sera soumis à la juridiction exclusive des tribunaux compétents.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <Footer/>
    </>
}

export default CGU;
