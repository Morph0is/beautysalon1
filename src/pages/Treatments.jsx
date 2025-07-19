import {Stack} from "@mui/material";
import TreatmentContainer from "../components/page-components/treatments/treatmentContainer";
import Footer from "../components/common-components/Footer";
import React from "react";
import {motion} from 'framer-motion';

export default function Treatments() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1  }}
            transition={{ duration: 0.5 }}
        >
            <Stack justifyContent={'center'} alignItems={'center'}>
                <TreatmentContainer/>
            </Stack>
            <Footer/>
        </motion.div>
    );

}
