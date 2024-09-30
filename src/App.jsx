import './assets/stylesheets/application.css';
import {Observer} from "./observer.js";
import {useEffect} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Router from "./Router.jsx";
import Legals from "./app/Legals/Legals.jsx";
import Disclaimer from "./app/Legals/Disclaimer.jsx";
import Mentions from "./app/Legals/Mentions.jsx";
import CGU from "./app/Legals/CGU.jsx";
import CGV from "./app/Legals/CGV.jsx";
import Error404 from "./app/Errors/404.jsx";

function App() {
    useEffect(() => {
        Observer();
    }, []);
    return (
        <BrowserRouter>
            <div>
                <Routes>
                    <Route path="/" element={<Router />} />
                    <Route path="/legals" element={<Legals />} />
                    <Route path="/disclaimer" element={<Disclaimer />} />
                    <Route path="/mentions" element={<Mentions />} />
                    <Route path="/cgu" element={<CGU />} />
                    <Route path="/cgv" element={<CGV />} />

                    <Route path="*" element={<Error404 />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App
