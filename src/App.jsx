import './assets/stylesheets/application.css';
import Navbar from "./app/Navbar/Navbar.jsx";
import Home from "./app/Home/Home.jsx";
import Phone from "./app/Phone/Phone.jsx";
import Product from "./app/Product/Product.jsx";
import Payment from "./app/Payment/Payment.jsx";
import Affiliation from "./app/Affiliation/Affiliation.jsx";
import FAQ from "./app/FAQ/FAQ.jsx";
import Reseller from "./app/Reseller/Reseller.jsx";
import Footer from "./app/Footer/Footer.jsx";

function App() {
    return (
        <>
            <Navbar/>

            <div className="main">
                <Home/>

                <Phone/>
            </div>

            <div className="main right">
                <Product />

                <Payment />

                <Affiliation />
            </div>

            <div className="main left">
                <FAQ />

                <Reseller />
            </div>

            <Footer />
        </>
    )
}

export default App
