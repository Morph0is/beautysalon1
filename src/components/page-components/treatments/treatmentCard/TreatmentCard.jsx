import { Stack, Typography } from "@mui/material";
import React, {useEffect, useState} from "react";
import './TreatmentCard.scss';
import treatmentList from "../../../../services/data/treatments.json";

const mobileBreakpoint = '900px';

export default function TreatmentCard() {
    const [isMobile, setIsMobile] = useState(false);
    const [jsonData, setJsonData] = useState([]);

    useEffect(() => {
        setJsonData(treatmentList);

        const mediaQuery = window.matchMedia(`(max-width: ${mobileBreakpoint})`);
        setIsMobile(mediaQuery.matches);

        const handleResize = () => {
            setIsMobile(mediaQuery.matches);
        };

        mediaQuery.addListener(handleResize);

        return () => {
            mediaQuery.removeListener(handleResize);
        };
    }, []);




    return (
        <Stack justifyContent={'center'} alignItems={'center'} className={'main-treatment-div'} spacing={{ xs: 0, md: 10 }}>
            {jsonData.map((item, index) => (
                <Stack
                    key={index}
                    className={`treatment-card ${isMobile ? '' : index % 2 === 0 ? 'even' : 'odd'}`}
                    direction={{ xs: 'column-reverse', md: 'row' }}
                    justifyContent={'center'}
                    alignItems={{ md: 'flex-start', xs: 'center' }}
                    id={`${item.treatmentId}`}
                >
                    <Stack className={'treatment-text-div'}>
                        <Typography className={'title2'} variant={'h5'}>
                            {item.title}
                        </Typography>
                        <p className={'treatment-body-font'}>{item.body}</p>

                        {item.subtitle && (
                            <Typography className={'subtitle1'} variant={'h5'}>
                                {item.subtitle}

                            </Typography>
                        )}

                        {item.list1 && (
                            <ul className={'list'}>
                                {item.list1.split('\n').map((line, i) => (
                                    <li key={i}>{line}</li>
                                ))}
                            </ul>
                        )}

                        {item.subtitle2 && (
                            <Typography className={'subtitle1'} variant={'h5'}>
                                {item.subtitle2}
                            </Typography>
                        )}

                        {item.body2 && <p className={'treatment-body-font'}>{item.body2}</p>}
                        {item.intro && <p className={'treatment-body-font'}>{item.intro}</p>}

                        {item.list2 && (
                            <ul className={'list'}>
                                {item.list2.split('\n').map((line, i) => (
                                    <li key={i}>{line}</li>
                                ))}
                            </ul>
                        )}
                        {item.outro && <p className={'treatment-body-font'}>{item.outro}</p>}
                        {item.body3 && <p className={'treatment-body-font'}>{item.body3}</p>}

                        {item.price1 && <p className={'treatment-body-font'} dangerouslySetInnerHTML={{__html: item.price1}}></p>}
                        {item.price2 && <p className={'treatment-body-font'} dangerouslySetInnerHTML={{__html: item.price2}}></p>}
                    </Stack>
                    <div
                        className={'treatment-card-image'}
                        style={{ backgroundImage: `url(${item.imagePath})`, backgroundPosition: 'center' }}
                    >
                        <h3 className={'title3'}>{item.mainTitle}</h3>
                    </div>
                </Stack>
            ))}
        </Stack>
    );
}
