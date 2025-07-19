import React, {useEffect, useState} from "react";
import priceList from '../treatment-price-card/assets/price-list.json';
import TreatmentPriceCard from "../treatment-price-card/TreatmentPriceCard";
import {Stack} from "@mui/material";
import './PricesContainer.scss';


//Todo: Text ins i18n nehmen
export default function PriceContainer() {
    const [jsonData, setJsonData] = useState([]);

    useEffect(() => {
        setJsonData(priceList);
    }, []);

    return (
        <Stack justifyContent={'center'} alignItems={'center'}>
            <h3 className={'title2'}>Unsere Preise</h3>
            <Stack className={'price-container'} justifyContent="center" alignItems="center">
                <Stack justifyContent="center" alignItems="center" className={'main-treatment-container'}>
                    {jsonData.map((category, index) => (
                        <TreatmentPriceCard
                            category={category}
                            index={index}
                        />
                    ))}
                </Stack>
            </Stack>
        </Stack>
    )
}

