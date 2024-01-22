import React, {useState} from 'react';

const Slider = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleSlideChange = (index) => {
        setActiveIndex(index);
    };

    const sliderItems = [
        {
            title: 'Algorithme Prédictive Révolutionnaire',
            description: 'Découvrez notre algorithme de trading doté d\'une capacité de prédiction exceptionnelle.',
            image: 'images/charts/chart1.png',
        },
        {
            title: 'Localiser des Niveaux',
            description: 'Prenez de l\'avance sur le marché et transformez chaque mouvement du marché en une opportunité stratégique.',
            image: 'images/charts/chart2.png',
        },
        {
            title: 'Entrée Précise Instantanée',
            description: 'Réagissez avec agilité aux mouvements du marché, prenez le contrôle de vos trades avec une précision chirurgicale.',
            image: 'images/charts/chart3.png',
        },
        {
            title: 'Détection de Liquidité Inégalée',
            description: 'Identifiez les opportunités avec une détection avancée des niveaux de liquidité cruciaux.',
            image: 'images/charts/chart4.png',
        },
    ];

    return (
        <section className="section slider">
            <div className="slider-inner">
                <div className="container reveal">
                    <div
                        className="slider-header reveal-2"
                    >
                        <img src={sliderItems[activeIndex].image} alt=""/>
                    </div>
                </div>
                <div className="slider-body reveal">
                    {sliderItems.map((item, index) => (
                        <div
                            key={index}
                            className={`slider-body-item reveal-3 ${index === activeIndex ? 'active' : ''}`}
                            onClick={() => handleSlideChange(index)}
                        >
                            <div className="content">
                                <h4>{item.title}</h4>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Slider;