import {motion} from 'framer-motion';
import ImprintContainer from "../components/page-components/imprint/Imprint";
import {Stack} from "@mui/material";
import Footer from "../components/common-components/Footer";
import React from "react";
import {useTranslation} from "react-i18next";
export default function ImprintPage() {
    const {t}= useTranslation();
    return (

        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1  }}
            transition={{ duration: 0.5 }}

        >
            <Stack alignItems={'center'}>
                <p className={'title2'}>{t('imprint.title')}</p>
                <ImprintContainer/>

                <Footer/>
            </Stack>
        </motion.div>
    );
}
