"use client";

import React from "react";
import dynamic from "next/dynamic";
import {
  pic1,
  pic2,
  pic3,
  pic4,
  pic5,
  pic6,
  pic7,
  pic8,
  pic9,
  pic10,
  pic11,
  pic12,
  pic13,
  pic14,
} from "@/assets";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

// Dynamically import React Slick to avoid SSR issues
const Slider = dynamic(() => import("react-slick"), { ssr: false });

const Gallery = () => {
  const images = [
    pic1,
    pic2,
    pic3,
    pic4,
    pic5,
    pic6,
    pic7,
    pic8,
    pic9,
    pic10,
    pic11,
    pic12,
    pic13,
    pic14,
  ];

  const baseSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
    arrows: false,
  };

  return (
    <div className="p-6 bg-[#0F0325]">
      {/* First Slider */}
      <Slider {...baseSettings} autoplaySpeed={2000}>
        {images.map((image, index) => (
          <div key={index} className="px-2 mb-8">
            <Image
              src={image}
              alt={`Gallery ${index + 1}`}
              className="rounded-lg shadow-md w-full h-64 object-cover"
            />
          </div>
        ))}
      </Slider>

      {/* Second Slider */}
      <Slider {...baseSettings} autoplaySpeed={500}>
        {images.map((image, index) => (
          <div key={index} className="px-2">
            <Image
              src={image}
              alt={`Gallery ${index + 1}`}
              className="rounded-lg shadow-md w-full h-64 object-cover"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Gallery;
 