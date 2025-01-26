import React from 'react';

const Button = ({ text, color }) => {
    return (
        <div className='cursor-pointer font-[700] w-40 h-12 flex items-center justify-center rounded-xl shadow-xl border bg-[#47DC17]'>
            {text}
        </div>
    );
}

export default Button;
