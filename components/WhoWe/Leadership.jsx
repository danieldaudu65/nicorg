import React from 'react';
import { churchmedia, GeandFam } from '../../assets';
import { FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

const Leadership = () => {

    return (
        <div className='bg-black text-white'>

            {/* <Image src= {churchmedia} alt="" /> */}
          
            <div className='bg-black p-6 text-white'>
                <p className='text-gray-500 text-[13px] mb-8'>01 Leadership</p>
                <Image src={GeandFam} alt="" />
                <p className='underline my-4 font-bold'>Senior Pastor & Family</p>
            </div>
            <div className='bg-black   p-6'>
                <p className='font-bold'>Rev'd Austin & Rev'd Blessed Iyere</p>
                <p className='text-[13px] my-4 '>
                    With nearly two decades of impactful ministry, Reverend Austin Iyere Wonders has been tirelessly preaching the gospel of Christ, accompanied by miracles, signs, and wonders. As the Lead Pastor of Noble In Christ Ministries, he operates under a powerful teaching, healing, and prophetic anointing. <br />
                    <br />Through a growing Apostolic ministry, Reverend Austin has established, nurtured, and strengthened numerous local churches, leaving a lasting legacy of faith and discipleship. <br />
                    <br />  He is joyfully married to Reverend Blessed Iyere, who serves as the Vice President and Co-Lead Pastor of the ministry. Together, they are blessed with two adorable children, Bethel and Elora, who are a testament to their godly heritage.
                </p>

                <Link href = '/leaders' >
                    <button className='flex justify-center items-center text-[12px] bg-[#FF543E] p-2 rounded-md gap-2' >See all Leaders <FaArrowRight /> </button>
                </Link>
            </div>
        </div>
    );
}

export default Leadership;
