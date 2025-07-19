import React from "react";
import './TreatmentContainer.scss';
import TreatmentCard from '../treatmentCard';
import {Stack} from "@mui/material";

export default function TreatmentContainer() {

    return (
        <Stack className={'treatments-container'} justifyContent={'center'} alignItems={'center'}>
            <h3 className={'title2'}>Behandlungen</h3>
            <TreatmentCard/>
        </Stack>
    );
}
