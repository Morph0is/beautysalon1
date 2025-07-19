import Hero from "../components/page-components/homepage/Hero";
import MyGallery from "../components/page-components/homepage/ImageSlider";
import {Parallax, ParallaxProvider} from "react-scroll-parallax";
import React, {useEffect, useState} from "react";
import ImageContainer from "../components/page-components/homepage/imagecontainer";

import Footer from "../components/common-components/Footer";
import AboutMeCard from "../components/page-components/homepage/AboutMeCard";
import CustomerReviewCard from "../components/page-components/homepage/CustomerReviewCard";
import {motion} from 'framer-motion';
export default function HomePage() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);


    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1  }}
            transition={{ duration: 0.5 }}
        >
                    <ParallaxProvider>
                        <Hero/>
                        {isMobile ? (
                            <>
                                <AboutMeCard/>
                                <ImageContainer/>
                                <CustomerReviewCard/>
                                <MyGallery/>
                                <Footer/>
                            </>
                        ) : (
                            <Parallax>
                                <AboutMeCard/>
                                <ImageContainer/>
                                <CustomerReviewCard/>
                                <MyGallery/>
                                <Footer/>
                            </Parallax>
                        )}
                    </ParallaxProvider>
                </motion.div>
    );
}
