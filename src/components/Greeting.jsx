import { useState, useEffect } from "react"
import sun from '../assets/day.svg';
import dusk from '../assets/evening.svg';
import moon from '../assets/night.svg';

function Greeting(props) {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        setCurrentTime(new Date());
    }, [])
    const hour = currentTime.getHours();
    let greeting;
    let image;

    if (hour < 12) {
        greeting = 'Good Morning!';
        image = sun;
    } else if (hour < 17) {
        greeting = 'Good Afternoon!';
        image = sun;
    } else if (hour < 21) {
        greeting = 'Good Evening!';
        image = dusk;
    } else {
        greeting = 'Good Night!';
        image = moon;
    }
    return <h1 className="greeting">
            <img src={image}></img>
            {greeting}
        </h1>
}

export default Greeting;