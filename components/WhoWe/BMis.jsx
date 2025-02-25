import { AboutBG } from '@/assets';
import React from 'react';

const BMis = () => {
    const style = {
        backgroundImage: `url(${AboutBG.src})`, // `.src` is required in Next.js
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "60vh"
    };

    return (
        <div style={style} className='text-white'>

            
        </div>
    );
}

export default BMis;
