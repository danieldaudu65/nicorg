import React, { useState } from 'react';
import Image from 'next/image'; // Make sure to import Image from next/image
import { testimonies } from '@/constant';
import { green, greenl } from '@/assets';

const Testimonials = () => {
  const [showAll, setShowAll] = useState(false);

  // Determine testimonies to display based on state
  const displayedTestimonies = showAll ? testimonies : testimonies.slice(0, 3);

  return (
    <div className="p-6 bg-gray-100">
      <h1 className="text-[16px] text-start font-nunito font-[800] w-[80%] mb-6">
        Testimonials and Stories of Changed Lives
      </h1>
      <div className="flex justify-center items-center flex-wrap gap-6">
        {displayedTestimonies.map((item, index) => (
          <div
            key={index}
            className="border my-4  relative h-auto py-10 px-8 flex justify-evenly items-center flex-col rounded-xl shadow-md p-4 w-[80%] bg-[#ffffff21]"
          >
            <h2 className="text-xl mb-4 text-black font-[800]">{item.no}</h2>
            <p className="text-gray-700 leading-loose text-[13px] font-parkin text-center">
              {item.text}
            </p>

            {/* Conditionally place the images based on index */}
            <Image
              src={index % 2 === 1 ? greenl : green}
              className={`absolute ${index % 2 === 1 ? 'left-0' : 'right-0'} bottom-0 `}
              alt=""
              width={50}  // Provide a width
              height={50} // Provide a height
            />
          </div>
        ))}
      </div>
      {/* Button to toggle testimony display */}
      <div className="text-center mt-6">
        <button
          onClick={() => setShowAll(!showAll)}
          className="px-4 py-2 underline text-gray-600 font-bold rounded text-[14px] hover:text-blue-700"
        >
          {showAll ? 'Show Less' : 'Read More Testimonies'}
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
