import logo from '../assets/banner.png';
import { useState, useEffect } from 'react';

const Banner = () => {
    const [isBouncing, setIsBouncing] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsBouncing(false);
        }, 4000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <div className="relative flex items-center justify-center">
                <img 
                    className={`w-80 h-40 ${isBouncing ? 'animate-[bounce_2s_2]' : ''}`} 
                    alt="banner" 
                    src={logo}
                />
            </div>
        </>
    );
}

export default Banner;

