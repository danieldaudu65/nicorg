import React from 'react';
import { statements } from '@/constant';
import Image from 'next/image';
import { bigLogo } from '@/assets';

const StatementOfFaith = () => {
  return (
    <div className="relative min-h-screen p-3">
      {/* Background Image */}
      <Image 
        src={bigLogo} 
        className="absolute inset-0 left-1/2 transform -translate-x-1/2 z-0 opacity-1" 
        alt="Big Logo" 
        width={500} 
        height={500} 
      />
      
      {/* Content */}
      <div className="relative z-10">
        <h2 className="font-bold text-xl mb-4">Statement of Faith</h2>
        <ul className="space-y-2">
          {statements.map((item, index) => (
            <li key={index} className="flex items-start gap-2">
              <p  className='text-[14px] font-bold self-center'>*</p >
              <p>{item.statement}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default StatementOfFaith;
