import React from 'react';

import { all_pastors } from '@/constant';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { green1, green2, green3, green4 } from '@/assets';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const page = () => {
    return (
        <>
        <Navbar />
            <div className='p-6 pt-20'>
                <div className='text-[12px]'>
                    <h2 className='font-bold text-[24px] mb-8'>Meet Our Leaders</h2>
                    <strong className='font-bold my-3 text-[14px]'>Rev’d Austin & Rev’d Blessed Iyare</strong>

                    <p className='mb-4'>
                        <br />
                        With nearly two decades of impactful ministry, Reverend Austin Iyere Wonders has been tirelessly preaching the gospel of Christ, accompanied by miracles, signs, and wonders. As the Lead Pastor of Noble In Christ Ministries, he operates under a powerful teaching, healing, and prophetic anointing.
                        Through a growing Apostolic ministry, Reverend Austin has established, nurtured, and strengthened numerous local churches, leaving a lasting legacy of faith and discipleship.
                        He is joyfully married to Reverend Blessed Iyere, who serves as the Vice President and Co-Lead Pastor of the ministry. Together, they are blessed with two adorable children, Bethel and Elora, who are a testament to their godly heritage.
                    </p>

                    {
                        all_pastors.map((item, index) => (
                            <div
                                key={index}
                                className='mb-6 -z-30 relative'
                            >
                                <div className='flex gap-2 mb-4 items-center'>
                                    <p className='flex'>Connect with {item.name}</p>
                                    <Link href={`${item.instagram}`}>
                                        <FaInstagram className='text-[16px]' />
                                    </Link>
                                    <Link href={`${item.facebook}`}>
                                        <FaFacebook className='text-[16px]' />
                                    </Link>
                                </div>

                                {/* Conditionally apply background color for indexes 1, 2, 3, 4 */}
                                {index === 1 || index === 2 || index === 3 || index === 4 ? (
                                    <div className='my-2 p-4 pb-0 bg-[#fffbac71] shadow-xl '>
                                        <Image className='w-full' src={item.image} alt="" />
                                    </div>
                                ) : (
                                    <Image className='my-2' src={item.image} alt="" />
                                )}

                                {/* Conditionally display green images for specific indexes */}
                                {index === 1 && (
                                    <Image className='w-16 absolute right-0 -top-8 ' src={green1} alt="green1" />
                                )}
                                {index === 2 && (
                                    <Image className='w-18 absolute left-0 top-20' src={green2} alt="green2" />
                                )}
                                {index === 3 && (
                                    <Image className='w-26 absolute right-0 -top-8' src={green3} alt="green3" />
                                )}
                                {index === 4 && (
                                    <Image className='w-20 absolute left-0 top-10' src={green4} alt="green4" />
                                )}

                                <div>
                                    <p className='font-bold'>{item.name}</p>
                                    <p className='text-[#00000091]'>{item.branch}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <Footer />
        </>
    );
}

export default page;
