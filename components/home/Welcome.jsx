import React from 'react';
import { pasaus } from '@/assets';
import Image from 'next/image'

const Welcome = () => {
  return (
    <div id='home' className='rounded-b-[50px] bg-[#0F0325] text-white p-6 pb-0'>
      <h3 className='text-[22px] w-[75%] text-shado font-[700] mb-4 my-8 font-parkin'>A Household United in Revealing God's Love</h3>
      <p className='my-4 font-nunito text-[14px] text-[#ffffff97]'>
        Welcome to Noble in Christ Ministries (NIC), a thriving and vibrant church located in Benin City, Edo State, Nigeria. Our mission is to reveal God's love through the preaching of the gospel, the works of charity, and demonstrations of His power.
        <br />
        We believe that God has called us to disciple many, equipping them to fulfill His assignment to the ends of the earth.
      </p>
      <div className='flex items-center  justify-center '>
        <Image src={pasaus} alt="" />
      </div>
    </div>
  );
}

export default Welcome;
