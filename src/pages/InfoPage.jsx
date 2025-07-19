import {Stack} from "@mui/material";
import Footer from "../components/common-components/Footer";
import React from "react";
import {motion} from 'framer-motion';
import InfoContainer from "../components/page-components/info";

export default function Treatments() {

    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 0.5}}
        >
            <Stack>
                <InfoContainer/>
            </Stack>
            <Footer/>
        </motion.div>
    );
}
