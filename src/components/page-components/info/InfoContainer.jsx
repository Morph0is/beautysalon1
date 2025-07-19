import './InfoContainer.scss';
import {Card, Stack} from "@mui/material";
import {useTranslation} from "react-i18next";

function InfoContent() {
    const {t}= useTranslation();
    return (
        <Card className={'info-content-div'}>
            <p className={'subtitle1'}>{t('info.subtitle1')}</p>
            <p className={'info-text'}>{t('info.body1')}</p>
            <p className={'subtitle1'}>{t('info.subtitle2')}</p>
            <p className={'info-text'}>{t('info.body2')}</p>
            <p className={'info-text'}>{t('info.body2')}</p>
            <p className={'info-text'}>{t('info.body2')}</p>
            <p className={'subtitle1'}>{t('info.leaflet-title')}</p>
            <p className={'info-text'}>{t('info.leaflet-date')}</p>
            <p className={'info-text'}>{t('info.leaflet-subtitle1')}</p>
            <p className={'info-text'}>{t('info.leaflet-body1')}</p>
            <p className={'subtitle1'}>{t('info.leaflet-subtitle2')}</p>
            <p className={'info-text'}>{t('info.leaflet-title2')}</p>
        </Card>
    );
}

export default function InfoContainer(){
    const {t}= useTranslation();
    return(
        <Stack alignItems={'center'} justifyContent={'center'}>
            <p className={'title2'} >{t('info.title')}</p>
            <Stack alignItems={'center'} justifyContent={'center'} className={'info-sub-div'}>
                <InfoContent/>
            </Stack>
        </Stack>
    );
}
