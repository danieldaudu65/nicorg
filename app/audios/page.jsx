'use client'
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { audios } from '@/constant';
import Image from 'next/image';
import React from 'react';

const page = () => {
    return (
        <>
        <Navbar />
            <div className='p-6 pt-12'>
                <h1 className='underline font-bold text-[20px] my-6' >AUDIO SERMONS</h1>

                {
                    audios.map((item, index) => (
                        <div className='flex gap-6 p-3  border  my-4 shadow-lg ' key={index}>
                            <Image src={item.image} alt="" />
                            <div className='self-center'>
                                <h3 className='font-bold text-[12px]'>{item.title}</h3>
                                <p className='text-[8px]'>{item.audioLink}</p>
                            </div>
                        </div>
                    ))
                }

                <div className='text-[10px] my-6'>
                    <p className='font-bold'>Click here to see more of our Audio Sermons</p>
                    <p>https://t.me/Nobleinchristministry</p>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default page;
