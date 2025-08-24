import logo from '../assets/banner.png';
import { useState, useEffect } from 'react';

const Banner = ({onHomeClick}) => {
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
                <button
                    onClick={onHomeClick} className="cursor-pointer"
                >
                    <img 
                    className={`w-80 h-40 ${isBouncing ? 'animate-[bounce_2s_2]' : ''}`} 
                    alt="banner" 
                    src={logo}
                    />
                </button>
            </div>
        </>
    );
}

export default Banner;

