import React from 'react';
import { members } from '../../assets';
import { FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image'

const BecomeAMember = () => {
    return (
        <div className='p-6 py-12 bg-[#50130B] text-white'>
            <h3 className='mb-4 font-nunito text-[32px] font-[700]'>Become a Member</h3>
            <p className='my-6 text-[14px] text-[#ffffffb0]'>
                God has called us not only to believe in Jesus, but to belong in
                local churches for our overall growth and edification. Noble in Christ
                Ministries is a church that you can call home. You will be taught
                the Word of God, ministered to in the power of the Holy Spirit,
                trained for the work of ministry and you'll find a household of
                like-minded believers. Enroll in our Membership Class today
                (in any of our locations) and begin your membership journey.
            </p>

            {/* Corrected Link for navigation */}
            <Link
                href="/branch"
                className='mb-8 flex p-4 py-2 gap-3 rounded-md w-fit items-center justify-center bg-[#FF432B]'
            >
                <p>Location Near Me</p> <FaArrowRight />
            </Link>

            <div className='flex'>
                <Image src={members} alt="Members" className='w-full' />
            </div>
        </div>
    );
}

export default BecomeAMember;
