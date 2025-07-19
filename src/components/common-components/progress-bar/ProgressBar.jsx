import './ProgressBar.scss';
import {useState, useEffect} from "react";


export default function ProgressBar(){
const [    scrollPercentage, setScrollPercentage] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            const scrollY = window.scrollY;

            const scrollPercent = (scrollY / (documentHeight - windowHeight))*100
        console.log(scrollPercentage);
        setScrollPercentage(scrollPercent);
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }

    }, [scrollPercentage]);

    return(
        <div id={'progress-container'}>
            <div id={'progress-fill'} style={{width: `${scrollPercentage}%` , transition:'width 0.5s ease'}}></div>
        </div>
    );
}
