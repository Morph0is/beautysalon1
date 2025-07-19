import React, {useEffect} from 'react';
import './ImageSlider.scss'
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';
import image1 from './assets/salonImages/DSC00213.JPG'
import image2 from './assets/salonImages/DSC00212.JPG'
import image3 from './assets/salonImages/DSC00228.JPG'
import image4 from './assets/salonImages/DSC00234.JPG'
import image5 from './assets/salonImages/DSC00235.JPG'
import image6 from './assets/salonImages/DSC00237.JPG'
import image7 from './assets/salonImages/DSC00245.JPG'
import image8 from './assets/salonImages/DSC00257.JPG'
import {Grid, Typography} from "@mui/material";
import {useTranslation} from "react-i18next";
import Aos from "aos/src/js/aos";
import 'aos/dist/aos.css';


const images = [
    {
        original: image8,
        thumbnail: image8,
    },
    {
        original: image1,
        thumbnail: image1,
    },
    {
        original: image2,
        thumbnail: image2,
    },
    {
        original: image3,
        thumbnail: image3,
    },
    {
        original: image4,
        thumbnail: image4,
    },
    {
        original: image5,
        thumbnail: image5,
    },
    {
        original: image6,
        thumbnail: image6,
    },
    {
        original: image7,
        thumbnail: image7,
    },

];

export default function MyGallery() {

    useEffect(() => {
        Aos.init();
    }, []);

    const {t} = useTranslation();
    return (
        <div className={'main-slider-container'} style={{marginTop: 50}} data-aos={'fade-in'} data-aos-duration={1000}>
            <div className={'slider-subcontainer1'}>
                <div className={'slider-subcontainer2'}>
                    <Typography style={{textAlign: 'center', marginBottom: '0.7em'}}
                                className={'title1'}>{t('slider.title')}</Typography>
                    <Grid container spacing={4}>
                        <Grid item lg={6} xs={12}>
                            <ImageGallery
                                style={{width: "100%"}}
                                showFullscreenButton={false}
                                items={images}
                                showPlayButton={false}
                                autoPlay={true}
                                slideInterval={6000}
                            /></Grid>
                        <Grid item lg={6} xs={12}>
                            <iframe
                                style={{width: "99.5%"}}
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10783.529923546794!2d8.7079798!3d47.4922027!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479a99134b1313b7%3A0xd90dfe1cb2b233dd!2sBeauty%20Salon%20Hasti!5e0!3m2!1sde!2sch!4v1707725245068!5m2!1sde!2sch"
                                height="410" allowFullScreen="" loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </div>
    );
}
