import React from 'react';
import './CustomButton.scss';
import {useNavigate} from "react-router-dom";
import {Button, createTheme, ThemeProvider} from "@mui/material";

export default function CustomButton({label}) {
    const theme = createTheme({
        palette: {
            primary: {main: "#9f8f78", contrastText: "#fff"},
        }
    })

    const navigate = useNavigate();
    const navigateToTreatments = () => {
        navigate('/Treatments');
    };
    return (
        <ThemeProvider theme={theme}>
        <Button variant={'outlined'} color={'primary'} className={'custom-mui-button'} onClick={navigateToTreatments} >{label}</Button>
    </ThemeProvider>
    );
}

