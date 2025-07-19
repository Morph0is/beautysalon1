import React, {useEffect, useState} from "react";
import profilImage from './assets/profileImage.jpg';
import './AboutMeCard.scss';
import {useTranslation} from "react-i18next";
import {Card, Stack, Typography} from "@mui/material";
import 'aos/dist/aos.css';
import Aos from "aos/src/js/aos";

export default function AboutMeCard() {
    const {t} = useTranslation();


    useEffect(() => {
        Aos.init();
    }, []);

    return (
        <>
            <Card className={'main-div'}>
                <div className="overlay"></div>
                <Stack className={'div-column'}>
                    <Card className={'about-card'} data-aos="fade-in" data-aos-duration={"1000"}>
                        <p className={'text poem-text'}>{t('about-me.poem')}</p><br/>
                        <Typography className={'author-name-text-style'}>{t('about-me.author')}</Typography><br/>
                        <Stack className={'div-column'} alignItems={'flex-start'}>
                            <figure className={'image-figure'}>
                                <img className={'profile-image'} src={profilImage} alt={'Profile'}/>
                                <figcaption className={'title1'}>{t('about-me.mission')}</figcaption>
                            </figure>
                        </Stack>
                        <p style={{marginTop: '10em'}} className={'text about-text'}>{t('about-me.text')}</p>
                    </Card>
                </Stack>
            </Card>
        </>
    );
}
