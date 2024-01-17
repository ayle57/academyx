
import Slider from "./Slider.jsx";

const Features = () => {
    return (
        <section className="section features" id="solution">
            <div className="features-inner">

                <div className="features__header reveal">
                    <span className="mini-btn mini-primary reveal-1">
                        Notre Produit
                    </span>
                    <h2 className="reveal-2">
                        4 Outils en 1 : L'efficacité à l'état pur
                    </h2>
                    <p className="reveal-3">
                        Un arsenal de 4 outils puissants soigneusement intégrés pour vous offrir une expérience d'analyse graphique sans précédent.
                    </p>
                </div>


                <div className="features__body">
                    <Slider/>
                </div>

            </div>
        </section>
    );
}


export default Features;
