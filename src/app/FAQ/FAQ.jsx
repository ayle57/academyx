import {useState} from 'react';

const FAQ = () => {
    const [expandedItems, setExpandedItems] = useState([]);

    const toggleItem = (index) => {
        const newExpandedItems = [...expandedItems];
        newExpandedItems[index] = !newExpandedItems[index];
        setExpandedItems(newExpandedItems);
    };

    return (
        <section className="section faq" id="faq">
            <div className="faq-inner">
                <div className="faq__header reveal">
                    <span className="mini-btn mini-primary reveal-1">
                        F.A.Q.
                    </span>
                    <h2 className="reveal-2">
                        Questions fréquemment posées
                    </h2>
                    <p className="reveal-3">
                        Tout ce que vous devez savoir sur notre outil.
                    </p>
                </div>

                <div className="faq__body">
                    {faqData.map((item, index) => (
                        <div className="faq-question-item reveal" key={index}>
                            <div className="faq-question-item-header reveal-1">
                                <button
                                    className={`faq-toggle-button ${expandedItems[index] ? 'open' : ''}`}
                                    onClick={() => toggleItem(index)}
                                >
                                    <h6>{item.question}</h6>
                                    <img
                                        src={`../images/icons/svg/${expandedItems[index] ? 'minus' : 'plus'}-circle.svg`}
                                        alt=""
                                    />
                                </button>
                            </div>
                            {expandedItems[index] && (
                                <div
                                    className={`faq-question-item-footer reveal-2 ${expandedItems[index] ? 'open' : ''}`}>
                                    <p>{item.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}

                </div>

                <div className="faq__footer reveal">
                    <h3 className="reveal-1">
                        Encore des questions?
                    </h3>
                    <p className="reveal-2">
                        Vous ne trouvez pas la réponse que vous cherchez ?
                    </p>
                    <div className="container reveal-3">
                        <a href="https://academyx-online.systeme.io/contact">
                            Nous contacter
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

const faqData = [
    {
        question: 'Quels sont les types de marchés et de périodes de temps pris en charge par vos outils?',
        answer: 'Tous les marchés et périodes de temps sont supportées par nos outils, néanmoins la stratégie devra être adapter en fonction du marché. La stratégie est optimisée pour des analyses court thème (M1, M3, M5).',
    },
    {
        question: 'Existe-t-il des tutoriels ou des guides pour m\'aider à tirer le meilleur parti de vos outils?',
        answer: 'Une Formation, la documentation et une stratégie de trading est offerte lors de l\'achat, vous pourrez y trouver toutes les informations dont vous aurez besoins, et si ce n\'est pas le cas, le support répondra à vos questions.',
    },
    {
        question: 'Puis-je personnaliser les paramètres des outils en fonction de ma stratégie de trading?',
        answer: 'Il y a un certain nombre de variables que vous pourrez modifier sur les outils afin de les paramétrer comme bon vous semble.',
    },
    {
        question: 'Est-ce que vos outils sont adaptés aux traders débutants?',
        answer: 'Nos outils sont conçus pour une utilisation professionnelle, mais nous ne sommes pas responsable de l\'utilisation que vous en aurez. Pour autant, nous avons fais tout notre possible pour rendre leurs utilisations simple et efficace.',
    },
    {
        question: 'Quelles plateformes de trading sont compatibles avec vos outils?',
        answer: 'Nos outils ne sont fonctionnels que sur TradingView pour le moment.',
    },
    {
        question: 'Qu\'est-ce qui distingue vos outils des autres disponibles sur le marché?',
        answer: 'Nous ne sommes pas meilleurs qu\'un autre, juste différents. Nous proposons une approche de l\'analyse technique que vous ne retrouverez nulle part ailleurs.',
    },
    {
        question: 'Y a-t-il des prérequis techniques pour utiliser vos outils?',
        answer: 'Il est conseillé d\'être muni d\'un abonnement au service de TradingView, mais il n\'est en aucun cas obligatoire d\'en avoir un.'
    },
    {
        question: 'Garantissez-vous des performances?',
        answer: 'En aucun cas nous ne garantirons de performance, nos outils ne sont pas automatisables, les performances dépendent directement de l\'utilisateur.'
    },
    {
        question: 'Pouvons-nous demander un remboursement?',
        answer: 'Une période d\'essai de 14 jours est à votre disposition, en réalisant une souscription à nos services, vous renoncez à votre droit de rétractation en vertu de l’article L121-21-8 du Code de la Consommation.'
    }
];

export default FAQ;
