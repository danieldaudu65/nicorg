import React from 'react';
import { gohome } from '../../assets';
import { FaArrowRight } from 'react-icons/fa6';
import Image from 'next/image'

const Pray = () => {
    return (
        <div className=' relative mt-10  text-white'>
            <div className='bg-black p-4'>

                <h2>Pray Every Morning with <br />Rev. Austin Iyare</h2>
                <p className='text-[12px] my-4 w-[60%] text-[#ffffff71]'>Start your day with inspiration! Join us each morning on Mixlr @nobleinchristministries for uplifting messages and reminders of God's love</p>
                <div className=' mb-8 flex p-4 py-2 gap-3 rounded-md w-fit items-center justify-center bg-[#FF432B] '><p>Pray now</p> <FaArrowRight /></div>
            </div>
            <Image src= {gohome} className='absolute w-[60%] right-0 bottom-0' alt="" />
        </div>
    );
}

export default Pray;
