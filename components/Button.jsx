import Link from 'next/link';
import React from 'react';

const Button = ({ text, color, link }) => {
    return (
        <Link href = {`${link}`} className='cursor-pointer text-[12px] font-[700] w-32 h-12 flex items-center justify-center rounded-xl shadow-xl border bg-[#47DC17]'>
            {text}
        </Link>
    );
}

export default Button;
