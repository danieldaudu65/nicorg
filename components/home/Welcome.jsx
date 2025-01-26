import React from 'react';
import { pasaus } from '@/assets';
import Image from 'next/image'

const Welcome = () => {
  return (
    <div id='home' className='rounded-b-[80px] bg-[#0F0325] text-white p-6 pb-0'>
      <h3 className='text-[22px] w-[75%] text-shado font-[700] mb-4 my-8 font-parkin'>A Household United in Reavealing God's Love</h3>
      <p className='my-4 font-nunito text-[14px] text-[#ffffff97]'>
        You are welcome to Noble in Christ Ministries (NIC) a vibrant church headquartered in the city of Benin, Edo State, Nigeria. We are on a mission to  disciple our community into a spiritual and personal relationship with our Lord Jesus Christ through the message of his love (finished works of Christ)
        to be a training ground for those who will carry out the other arms/goals of the general ministry (NOBLE IN CHRIST)
      </p>
      <div className='flex items-center  justify-center '>
        <Image src={pasaus} alt="" />
      </div>
    </div>
  );
}

export default Welcome;
