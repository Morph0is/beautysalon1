import React from "react";
import {Stack, Typography} from "@mui/material";
import {useTranslation} from "react-i18next";
import './Footer.scss';
import Facebook from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Instagram from '@mui/icons-material/Instagram';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import {Link} from "react-router-dom";

//todo: verlinkung der Icons muss noch erstellt werden und die Tags dafür müssen auch noch erstellt werden
//todo: es müssen noch Anpassungen mit dem Alignment gemacht werden in Mobile Ansicht
export default function Footer() {
    const {t} = useTranslation();
    const colorYellow = '#FFCF08';
    const renderMultilineText = (text) => (text.split('\n').map((line, index) => (
        <span style={{display: "block"}} key={index}>{line}</span>)));

    return (
        <Stack className={'main-footer-div'}>
            <div className={'yellow-line'}></div>
            <Stack direction={{xs: 'column', sm: 'row'}}
                   spacing={{xs: 3, sm: 1}}
                   className={'footer-div'}>
                <Stack direction={'column'} className={'copy-right-div'}>
                    <Typography>© {new Date().getFullYear()} Beauty Salon Hasti</Typography>
                        <Link style={{color: 'white', textDecoration:'none'}} to="/ImprintPage">{t('footer.imprint')}</Link>

                </Stack>

                <Stack justifyContent="center" direction={'column'} className={'location-div'}>
                    <Stack alignItems="center" spacing={1} direction={'row'}>
                        <FmdGoodIcon sx={{color: colorYellow}} fontSize="medium"/>
                        <Typography>{renderMultilineText(t('footer.location'))}</Typography>
                    </Stack>
                    <Stack alignItems="center" spacing={1}
                           direction={'row'}><PhoneIcon sx={{color: colorYellow}} fontSize="medium"/>
                        <Typography>{t('footer.phone-number')}</Typography>
                    </Stack>
                    <Stack alignItems="center" spacing={1}
                           direction={'row'}><EmailIcon sx={{color: colorYellow}} fontSize="medium"/>
                        <Typography>{t('footer.email')}</Typography>
                    </Stack>

                </Stack>
                <Stack direction={'row'} className={'social-media-div'} spacing={3}>
                    <Facebook sx={{color: colorYellow}} fontSize="large"/>
                    <WhatsAppIcon sx={{color: colorYellow}} fontSize="large"/>
                    <Instagram sx={{color: colorYellow}} fontSize="large"/>
                </Stack>
            </Stack>
        </Stack>
    );
}
