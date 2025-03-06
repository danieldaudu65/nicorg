import { facebookicon, instagramicon, mixicon, youtubeicon } from '@/assets';
import Footer from '@/components/Footer';
import Gallery from '@/components/galary';
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import React from 'react';

const page = () => {
    return (
        <>
            <Navbar />
            <div className=' pt-12 '>
                <div className='bg-[30F0325] mt-14'>
                    <Gallery />
                </div>
                <h1 className='text-[14px] mx-6  my-16 underline font-bold'>BECOME A PART OF OUR LOVING COMMUNITY</h1>

                <div className='bg-[#54130b] py-4  p-6  text-white'>
                    <h2 className='font-bold mt-8'>Connect with Nobles in Christ Ministries on any of these Platform</h2>
                    <div className='grid grid-cols-2  gap-4 text-black my-8'>
                        <a href="" className='bg-white h-[150px] p-3 flex gap-2 items-center justify-center rounded-lg border'>
                            <Image src={facebookicon} alt="" className='w-[20px]' />
                            <p>Facebook</p>
                        </a>
                        <a href="" className='bg-white h-[150px] p-3 flex gap-2 items-center justify-center rounded-lg border'>
                            <Image src={instagramicon} alt="" className='w-[20px]' />
                            <p>Instagram</p>
                        </a>
                        <a href="" className='bg-white h-[150px] p-3 flex gap-2 items-center justify-center rounded-lg border'>
                            <Image src={youtubeicon} alt="" className='w-[20px]' />
                            <p>Youtube</p>
                        </a>
                        <a href="" className='bg-white h-[150px] p-3 flex gap-2 items-center justify-center rounded-lg border'>
                            <Image src={mixicon} alt="" className='w-[20px]' />
                            <p>Mixlr</p>
                        </a>
                    </div>

                    {/* <p className='text-[12px]'>Be a part of our church Family</p>
                    <p className='text-[12px]'>join us today!!</p> */}
                </div>


            </div>
            <Footer />
        </>
    );
}

export default page;
