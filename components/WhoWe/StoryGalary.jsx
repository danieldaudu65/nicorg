import { aboutgalary1, aboutgalary2, aboutgalary3, aboutgalary4, aboutgalary5, aboutgalary6 } from '@/assets';
import Image from 'next/image';
import React from 'react';

const StoryGalary = () => {
  return (
    <div className='grid grid-cols-3 gap-4 p-6 '>
      {[aboutgalary1, aboutgalary2, aboutgalary3, aboutgalary4, aboutgalary5, aboutgalary6].map((image, index) => (
        <div key={index} className=" h-[200px]  relative">
          <Image src={image} alt={`Gallery ${index + 1}`} layout="fill" objectFit="cover" className="rounded-lg " />
        </div>
      ))}
    </div>
  );
};

export default StoryGalary;
