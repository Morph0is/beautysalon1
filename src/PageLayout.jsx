import React from 'react';
import NavBar from "./components/common-components/NavBar";

export default function PageLayout(props) {
    return(
        <>
        <NavBar/>
            <div className={'page-layout-container'}>
                {props.children}
            </div>
        </>
    );
}
