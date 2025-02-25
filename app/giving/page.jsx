'use client'

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import React, { useState } from 'react';
import { IoCopyOutline } from "react-icons/io5";

const Page = () => {
    const [copiedText, setCopiedText] = useState(null);

    const handleCopy = (text) => {
        navigator.clipboard.writeText(text);
        setCopiedText(text);
        setTimeout(() => setCopiedText(null), 2000);
    };

    return (
        <>
            <Navbar />
            <div className='pt-16'>
                <div className='p-6 text-[14px]'>
                    <h2 className='font-bold my-4 text-[20px]'>GIVING</h2>
                    <p className='mb-6 text-[12px]'>
                        "So let each one give as he purposes in his heart, not grudgingly or of necessity; for God loves a cheerful giver" - 2 Cor. 9:7
                    </p>

                    <div>
                        <h4 className='text-[20px] mb-4'>Local <strong>Payments</strong></h4>
                        <p className='text-[12px] mb-2'>
                            Giving is more than just an action—it is a profound expression of love and faith. Your generosity fuels our ministries, enabling us to impact lives both locally and globally.
                            <br /><br />
                            For those within Nigeria, we provide various secure and convenient local payment options to make your giving seamless and stress-free.
                        </p>
                    </div>

                    <h2 className='text-[18px] mt-4'>Tithe <strong>and Offering</strong></h2>
                    <div className='shadow-xl my-4 mb-10 rounded-xl bg-[#fffbdcaa]'>
                        <div className='px-6 py-4'>
                            <p className='font-bold'>Bank</p>
                            <p className='font-light'>United Bank of Africa</p>
                        </div>
                        <hr />
                        <div className='px-6 py-4'>
                            <p className='font-bold'>Account Name</p>
                            <p className='font-light'>NOBLES IN CHRIST MINISTRIES</p>
                        </div>
                        <hr />
                        <div className='px-6 py-4'>
                            <p className='font-bold'>Account Number</p>
                            <div className='flex gap-1 items-center cursor-pointer' onClick={() => handleCopy("2102141508")}>
                                <p>2104141508</p>
                                <IoCopyOutline className='border-2' />
                                {copiedText === "2102141508" && <span className='text-green-600 text-xs ml-2'>Copied!</span>}
                            </div>
                        </div>
                    </div>
                </div>

                <div className='bg-[#fffbdc] p-6 text-[14px]'>
                    <h2 className='text-[18px]'>International <strong>Payments</strong></h2>
                    <div className='shadow-xl my-4 mb-10 rounded-xl p-6 bg-[#fffbdcaa]'>
                        <div>
                            <p className='font-bold'>Give USD</p>
                            <div className='flex gap-1 my-2 items-center cursor-pointer' onClick={() => handleCopy("1013150489")}>
                                <p className='text-[#00000089]'>1013150489</p>
                                <IoCopyOutline className='text-[12px]' />
                                {copiedText === "1013150489" && <span className='text-green-600 text-xs ml-2'>Copied!</span>}
                            </div>
                            <p>Keystone Bank</p>
                            <p>Nobles In Christ Ministry</p>
                        </div>
                    </div>
                </div>

                <div className='p-6 text-[14px]'>
                    <h3 className='text-[20px] mb-4'>Become <strong>A PARTNER</strong></h3>
                    <p className='font-light'>
                        Your generosity is the heartbeat of our ministry, pumping life and energy into our efforts to serve others. By giving, you demonstrate your love and faith, and help us to extend our ministry's impact both near and far.
                    </p>

                    <div className='shadow-xl mt-6 my-4 mb-10 rounded-xl bg-[#fffbdcaa]'>
                        <div className='px-6 py-4'>
                            <p className='font-bold'>Bank</p>
                            <p className='font-light'>United Bank of Africa</p>
                        </div>
                        <hr />
                        <div className='px-6 py-4'>
                            <p className='font-bold'>Account Name</p>
                            <p className='font-light'>NOBLES IN CHRIST MINISTRIES</p>
                        </div>
                        <hr />
                        <div className='px-6 py-4'>
                            <p className='font-bold'>Account Number</p>
                            <div className='flex gap-1 items-center cursor-pointer' onClick={() => handleCopy("1012489193")}>
                                <p>1012489193</p>
                                <IoCopyOutline className='border-2' />
                                {copiedText === "1012489193" && <span className='text-green-600 text-xs ml-2'>Copied!</span>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Page;
