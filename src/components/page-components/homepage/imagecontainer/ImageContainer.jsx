import React from "react";
import {Stack} from "@mui/material";
import image from './assets/hasti-homepage.jpg';
import './ImageConatiner.scss';
import {TypeAnimation} from 'react-type-animation';
import {ParallaxBanner} from "react-scroll-parallax";

export default function ImageContainer() {
    return (

        <Stack alignItems="center">
            <ParallaxBanner
                layers={[{image: image, speed: -25}]}
                className="home-page-image"
            >
                <div className={'customer-title-container'}>

                    <TypeAnimation
                        sequence={[
                            'Das sagen meine Beauties.',
                            1000,
                            'Das sagen meine  Schönheiten.',
                            1000,
                            'Das sagen meine Gäste.',
                            1000,
                            'Das sagen meine Kunden.',
                            1000
                        ]}
                        wrapper="h5"
                        speed={5}
                        className={'my-customer-title'}
                        repeat={5}
                    />
                </div>
            </ParallaxBanner>
        </Stack>
    );
};

