import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import React from 'react';
import { IoCopyOutline } from "react-icons/io5";


const page = () => {
    return (
        <>

            <Navbar />
            <div className='pt-16'>
                <div className=' p-6 text-[14px]'>

                    <h2 className='font-bold my-4 text-[20px]'>GIVING</h2>
                    <p className='mb-6 text-[12px]'>So let each one give as he purposes in his heart,
                        not grudgingly or of necessity; for God loves a cheerful giver" - 2 Cor. 9:7
                    </p>

                    <div>
                        <h4 className='text-[20px] mb-4'>Local <strong>Payments</strong></h4>
                        <p className='text-[12px] mb-2'>Giving is more than just an action—it is a profound expression of love and faith.
                            Your generosity fuels our ministries, enabling us to impact lives both locally and globally.
                            <br /> <br />
                            For those within Nigeria, we provide various secure and convenient local payment options to make your giving seamless and stress-free.
                        </p>
                    </div>

                    <div className='shadow-xl my-4 mb-10 rounded-xl bg-[#fffbdcaa]'>
                        <div className='px-6 py-4'>
                            <p className='font-bold'>Bank</p>
                            <p className='font-light'>United Bank Of AFrica</p>
                        </div>
                        <hr />
                        <div className='px-6 py-4'>
                            <p className='font-bold'>Acount Name</p>
                            <p className='font-light'>NOBLE IN CHRIST MINITRIES</p>
                        </div>
                        <hr />
                        <div className='px-6 py-4'>
                            <p className='font-bold'>Acount Number</p>
                            <div className='flex gap-1 '>
                                <p>2102141508</p>
                                <IoCopyOutline className='  border-2' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bg-[#fffbdc] p-6 text-[14px]'>
                    <h2 className='text-[18px]'>Internamtional <strong>Pauments</strong></h2>
                    <div className='shadow-xl my-4 mb-10 rounded-xl p-6 bg-[#fffbdcaa]'>
                        <div>
                            <div>
                                <p className='font-bold'>Give USD</p>
                                <div className='flex gap-1  my-2 '>
                                    <p className='text-[#00000089]'>1013150489</p>
                                    <IoCopyOutline className='text-[12px]' />
                                </div>
                            </div>
                            <p>Key Stone Bank</p>
                            <p>Noble In Christ Ministry</p>
                        </div>
                    </div>
                </div>
                <div className=' p-6 text-[14px]'>
                    <h3 className='text-[20px] mb-4'>Becoma  <strong>A PARTNER</strong></h3>
                    <p className='font-light'>Your generosity is the heartbeat of our ministry, pumping life and energy into our efforts to serve others.
                        By giving, you demonstrate your love and faith, and help us to extend our ministry's impact both near and far.</p>

                    <div className='shadow-xl mt-6 my-4 mb-10 rounded-xl bg-[#fffbdcaa]'>
                        <div className='px-6 py-4'>
                            <p className='font-bold'>Bank</p>
                            <p className='font-light'>United Bank Of AFrica</p>
                        </div>
                        <hr />
                        <div className='px-6 py-4'>
                            <p className='font-bold'>Acount Name</p>
                            <p className='font-light'>NOBLE IN CHRIST MINITRIES</p>
                        </div>
                        <hr />
                        <div className='px-6 py-4'>
                            <p className='font-bold'>Acount Number</p>
                            <div className='flex gap-1 '>
                                <p>2102141508</p>
                                <IoCopyOutline className='  border-2' />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </>
    );
}

export default page;
