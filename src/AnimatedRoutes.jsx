import { Route, Routes, useLocation} from "react-router-dom";
import NavBar from "./components/common-components/NavBar";
import HomePage from "./pages/HomePage";
import Treatments from "./pages/Treatments";
import Info from "./pages/InfoPage";
import PricesPage from "./pages/PricesPage";
import React from "react";
import {AnimatePresence} from "framer-motion";
import ImprintPage from "./pages/ImprintPage";

export default function AnimatedRoutes() {
    const location = useLocation();
    return (
        <>
            <AnimatePresence mode={'wait'}>
                <Routes location={location} key={location.pathname}>
                    <Route path="/" element={<NavBar/>}>
                        <Route index element={<HomePage/>}/>
                        <Route path="Treatments" element={<Treatments/>}/>
                        <Route path="Info" element={<Info/>}/>
                        <Route path="Prices" element={<PricesPage/>}/>
                        <Route path="ImprintPage" element={<ImprintPage/>}/>
                    </Route>
                </Routes>
            </AnimatePresence>
        </>
    );
}
