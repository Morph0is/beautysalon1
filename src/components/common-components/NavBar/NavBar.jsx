import React, { useState} from 'react';
import Hamburger from 'hamburger-react';
import {useTranslation} from 'react-i18next';
import './NavBar.scss';
import {Grid, Stack} from "@mui/material";
import {Outlet, Link} from "react-router-dom";
import ProgressBar from '../progress-bar/ProgressBar';
import treatmentList from "../../../services/data/treatments.json";
import {HashLink} from 'react-router-hash-link';


export default function NavBar() {
    const {t} = useTranslation();
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
    const [nav, setNav] = useState(false);
    const [dropdown, setDropdown ]= useState(false)
    const [isTreatmentHovered, setIsTreatmentHovered] = useState(false);



    const reloadPage = () => {
        window.location.reload();
    };

    const closeMobileMenu = () => setIsMobileNavOpen(false);

    const handleNavItemOnClick = (e) => {
        closeMobileMenu();
    };

    const changeBackground = () => {
        if (window.scrollY >= 80) {
            setNav(true);
            setDropdown(true);
        } else {
            setNav(false);
            setDropdown(false);
        }
    }

    window.addEventListener('scroll', changeBackground);

    const handleDropdownMouseEnter = () => {
        setIsTreatmentHovered(true);
    };

    const handleDropdownMouseLeave = () => {
        const timeoutId = setTimeout(() => {
            setIsTreatmentHovered(false);
        }, 250);


        const dropdownContent = document.querySelector('.dropdown-content');
        if (dropdownContent) {
            dropdownContent.addEventListener('mouseenter', () => {
                clearTimeout(timeoutId);
            });

            dropdownContent.addEventListener('mouseleave', () => {
                handleDropdownMouseLeave();
            });
        }
    };

    function DropdownContent({ items }) {

        return (
            <div className={`dropdown-content ${dropdown ? 'active' : ''}`} >
                <Grid container alignItems={'center'} justifyContent={'center'}>
                    {items.map((item, index) => (
                        <Grid item xs={6} key={index} style={{height:'4em'}}>
                            <HashLink to={`/Treatments#${encodeURIComponent(item.treatmentId)}`} className="dropdown-item-link" scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'center'})}>
                                <Stack direction={'row'} alignItems={'center'}>
                                    <img className={'dropdown-image'} src={item.navDropdownImage} alt={item.title} />
                                    <p className={'nav-item'}>{item.mainTitle}</p>
                                </Stack>
                            </HashLink>
                        </Grid>
                    ))}
                </Grid>
            </div>
        );
    }

    return (
        <Stack className={'main-container'}>
            <div className={`background-overlay ${isMobileNavOpen ? 'visible' : 'hidden'}`}
                 onClick={closeMobileMenu}></div>
            <nav className={`${nav ? 'nav active' : 'nav'} ${isMobileNavOpen ? 'nav mobile-open' : ''}`}>
                <img className="logo" src="/assets/logo/beauty-salon-logo.svg" alt={"BeautySalon Hasti Logo"}/>
                <div className="hamburger-icon">
                    <Hamburger toggled={isMobileNavOpen} toggle={setIsMobileNavOpen}/>
                </div>
                <ul className={`desktop-nav ${isMobileNavOpen ? 'hidden' : ''}`}>
                    <li className="nav-item"><a href="/" onClick={reloadPage}>{t('navbar.home')}</a></li>
                    <li
                        className={`nav-item nav-item-treatment-dropdown ${isTreatmentHovered ? 'hovered' : ''}`}
                        onMouseEnter={handleDropdownMouseEnter}
                        onMouseLeave={handleDropdownMouseLeave}
                    >
                        <Link to="/Treatments">{t('navbar.treatments')}</Link>
                        {isTreatmentHovered && <DropdownContent items={treatmentList} />}
                    </li>
                    <li className="nav-item"><Link to="/Prices">{t('navbar.prices')}</Link></li>
                    <li className="nav-item"><Link to="/Info">{t('navbar.info')}</Link></li>
                </ul>
                <ul className={`mobile-nav ${isMobileNavOpen ? 'visible' : 'hidden'}`}>
                    <li className="nav-item"><a href="/" onClick={reloadPage}>{t('navbar.home')}</a></li>
                    <li className="nav-item" onClick={handleNavItemOnClick}>
                        <Link to="/Treatments">{t('navbar.treatments')}</Link>
                    </li>
                    <li className="nav-item" onClick={handleNavItemOnClick}>
                        <Link to="/Prices">{t('navbar.prices')}</Link>
                    </li>
                    <li className="nav-item" onClick={handleNavItemOnClick}>
                        <Link to="/Info">{t('navbar.info')}</Link>
                    </li>
                </ul>
                <ProgressBar/>
            </nav>
            <Outlet/>
        </Stack>

    );
}


