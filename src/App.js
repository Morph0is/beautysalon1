import React from 'react';

import 'aos/dist/aos.css';
import PageLayout from "./PageLayout";
import Router from "./Router";
import {Outlet} from "react-router-dom";
import './base.scss';


export default function App() {
    return (
        <>
            <PageLayout>
                <Router/>
                <Outlet/>
            </PageLayout>
        </>
    );

}
