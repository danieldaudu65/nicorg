import { bigLogo } from '@/assets';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { branches } from '@/constant';
import Image from 'next/image';
import React from 'react';
import { FaSearch } from 'react-icons/fa';

const page = () => {
  return (
    <>
      <Navbar />
      <div className='pt-16'>
        <div className='p-6 '>
          <div>
            <h1 className='font-bold font-nunito text-[22 mt-10px]'>EXPLORE OUR BRANCHES</h1>
            <p className='text-[12px]'>Check for NIC Branch closest to You.</p>
          </div>
          <div className='border my-8 p-3 flex rounded-xl items-center'>
            <FaSearch className='text-[18px] text-[#0000006f] ' />
            <input type="search" placeholder='Search' className='ml-3 outline-none w-full placeholder:text-gray-500' />
          </div>
          <div className='-mt-4'>


            <Image alt='' src={bigLogo} className="absolute inset-0 left-1/2 top-10 transform -translate-x-1/2 z-0 opacity-50"
              width={500}
              height={500} />
            <Image alt='' src={bigLogo} className="absolute inset-0 left-1/2 top-[100vh] transform -translate-x-1/2 z-0 opacity-50"
              width={500}
              height={500} />
            {
              branches.map((item, index) => (
                <div className=' py-10 text-[12px] my-8 rounded-xl px-6 border '
                  key={index}
                >
                  <h4 className='font-bold  text-[14px]'>{item.location}</h4>

                  < p className='font-light my-4'>{item.street}</p>

                  <div className='font-bold'>
                    PHONE: {item.phone}
                  </div>
                </div>
              ))
            }
          </div>
        </div>
        <div className='bg-black p-6 py-12 text-[12px] text-white flex items-center justify-center flex-col text-center'>
          <h3 className='font-bold'>Can't find a worship center near you ?</h3>
          <p className='text-[#ffffff72]'>Please select any of the regions to woship with us at any of our branches</p>
          <button className='p-2 bg-[#48dc17ca] m-4 rounded-xl text-black px-4'>Join Us Onine</button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default page;
