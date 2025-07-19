import React, {useEffect} from "react";
import {useTranslation} from "react-i18next";
import {Card, Stack, Typography} from "@mui/material";
import './CustomerReviewCard.scss';
import beautySalonLogo from './assets/beauty-salon-logo.png';
import beautySalonLogoFont from './assets/BeautySalon Hasti-Font.png';
import AOS from "aos";
import CustomButton from '../../../common-components/custom-button/CustomBottom'
import VerifiedIcon from '@mui/icons-material/Verified';
import PaidIcon from '@mui/icons-material/Paid';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import WorkIcon from '@mui/icons-material/Work';

export default function CustomerReviewCard() {
    const {t} = useTranslation();

    useEffect(() => {
        AOS.init();
    }, []);

    const CustomIconLabel = ({label, icon}) => {
        const renderIcon = () => {
            switch (icon) {
                case 'experience':
                    return <WorkIcon fontSize="large"/>;
                case 'price':
                    return <PaidIcon fontSize="large"/>;
                case 'verified':
                    return <VerifiedIcon fontSize="large"/>;
                case 'advice':
                    return <LocalLibraryIcon fontSize="large"/>;
                default:
                    return null;
            }
        };

        return (
            <Stack spacing={2} direction={'row'} alignItems={'center'}>
                {renderIcon()}
                <Typography style={{fontSize: 16}} variant="caption">{label}</Typography>
            </Stack>
        );
    };

    const CustomerReview = ({name, text, stars}) => {
        return (
            <Card className={'customer-card'} data-aos="fade-in" data-aos-duration={'1000'}>
                    <p className={'customer-text'}>{text}</p>
                    <Typography className={'author-name-text'} variant="subtitle1">{name}</Typography>
                    <Typography variant="caption">{"⭐".repeat(stars)}</Typography>
            </Card>
        );
    };

    const reviews = t("customer-review", {returnObjects: true});

    return (
        <div className='review-card' >
            <Stack className={'customer-section'} spacing={6} justifyContent={'space-evenly'}>
                {reviews.map((review, index) => (
                    <CustomerReview key={index} name={review.name} text={review.text} stars={review.stars}/>
                ))}
            </Stack>
            <Card className={'customer-image-container'}>
                <Stack direction="column"
                       justifyContent="space-evenly"
                       alignItems="center"
                       spacing={6}
                >
                    <div className={'logo-container'}>
                        <img className={'logo-butterfly'} src={beautySalonLogo} alt={'BeautySalon Logo'}/>
                        <img className={'beauty-logo-font'} src={beautySalonLogoFont} alt={'logo-schrift'}/>
                    </div>
                    <Stack spacing={2} style={{color: '#9f8f78',}}>
                        <CustomIconLabel label="Über 10 Jahre Erfahrung" icon="experience"/>
                        <CustomIconLabel label="Kompetente Beratung" icon="advice"/>
                        <CustomIconLabel label="Zuverlässig" icon="verified"/>
                        <CustomIconLabel label="Faire Preise" icon="price"/>
                        <CustomButton label={'Zu den Behandlungen'}/>
                    </Stack>
                    <Stack alignItems={'center'} justifyContent={'center'}>
                    </Stack>
                </Stack>
            </Card>
        </div>
    );
}
