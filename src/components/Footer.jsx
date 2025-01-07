import { useState, useEffect } from "react"
import data from '../assets/links.json';


function Footer() {
    const [currentTime, setCurrentTime] = useState(new Date());
    
        useEffect(() => {
            setCurrentTime(new Date());
        }, [])
        const year = currentTime.getFullYear();
    return <footer>
        <ul>
            {data.map(item => <li key={item.label}><a href={item.link}>{item.label}</a></li>)}
        </ul>
        ©{year} Atlas School
    </footer>
}

export default Footer;