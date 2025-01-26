import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { videos } from '@/constant';
import Image from 'next/image';
import React from 'react';

const page = () => {
    return (
        <>
            <Navbar />
            <div className='p-6 pt-24'>
                <h1 className='font-bold text-[20px] underline '>VIDEO SERMONS</h1>

                {
                    videos.map((item, index) => (
                        <div className=' border p-3 rounded-lg mb-8 shadow-lg my-6' key={index}>
                            <p className='text-[10px] mb-2'>{item.videolink}</p>
                            <Image className='mb-4 w-full' src={item.image} alt="" />
                            <p className='underline font-bold text-[10px]'>{item.title}</p>
                            <p>{item.preacher}</p>
                        </div>
                    ))
                }
            </div>
            <Footer />
        </>
    );
}

export default page;
