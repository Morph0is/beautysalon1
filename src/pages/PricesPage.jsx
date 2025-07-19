import PricesContainer from '../components/page-components/prices/prices-container/PricesContainer';
import Footer from "../components/common-components/Footer";
import React from "react";
import {motion} from 'framer-motion';

export default function PricesPage() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1  }}
            transition={{ duration: 0.5 }}
        >
            <PricesContainer/>
            <Footer/>

        </motion.div>
    );
}
