import { useState } from "react"

export const StarBackground = () => {
const [stars, setStars] = useState([]);

    const generateStars = () => {
        const numberOfStars = Math.floor(window.innerHeight * window.innerWidth)/10000;
        const newStars = [];
        for(let i=0; i<numberOfStars; i++) {
            newStars.push({
                id:1,
                size: Math.random()*3 + 1,
                x: Math.random() * 100,
                y: Math.random() * 100,
                opacity: Math.random()* 0.5 + 0.5,
                animationDuration: Math.random() * 4 + 2,
            })
        }
    }
    return <div>

    </div>
}