import React from "react";
import {useTranslation} from "react-i18next";
import './Hero.scss';

export default function Hero() {
    const {t} = useTranslation();

    return (
        <>
            <div className={'hero-div'}>
                <div className={'slogan-div'}>
                    <p className={'slogan'}>{t('hero.slogan')}</p>
                </div>
            </div>
        </>
    );
}
