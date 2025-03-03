"use client";

import React from "react";
import dynamic from "next/dynamic";
import {
  picg1,
  picg2,
  picg3,
  picg4,
  picg5,
  picg6,
  picg7,
  picg8,
  picg9,
  picg10,
  picg11,
  picg12,
  picg13,
  picg14,
  picg15,
  picg16,
  picg17,
  picg18,
  picg19,
  picg20,
  picg21,
  picg22,
  picg23,
  picg24,
  picg25,
  picg26,
  picg27,
  picg28,
  picg29,
  picg30,
  picg31,
  picg32,
  picg33,
  picg34,
  picg35,
  picg36,

  picg37, picg38, picg39, picg40,
    picg41, picg42, picg43, picg44, picg45, picg46, picg47, picg48, picg49, picg50,
    picg51, picg52, picg53, picg54, picg55, picg56, picg57, picg58, picg59, picg60,
    picg61, picg62, picg63, picg64, picg65, picg66, picg67, picg68, picg69, picg70,
    picg71, picg72, picg73, picg74, picg75, picg76, picg77, picg78, picg79, picg80,
    picg81, picg82, picg83, picg84, picg85, picg86, picg87, picg88
} from "@/assets";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

// Dynamically import React Slick to avoid SSR issues
const Slider = dynamic(() => import("react-slick"), { ssr: false });

const Gallery = () => {
  const images = [
    picg1,
    picg2,
    picg3,
    picg4,
    picg5,
    picg6,
    picg7,
    picg8,
    picg9,
    picg10,
    picg11,
    picg12,
    picg13,
    picg14,
    picg15,
    picg16,
    picg17,
    picg18,
    picg19,
    picg20,
    picg21,
    picg22,
    picg23,
    picg24,
    picg25,
    picg26,
    picg27,
    picg28,
    picg29,
    picg30,
    picg31,
    picg32,
    picg33,
    picg34,
    picg35,
    picg36,
    picg37, picg38, picg39, picg40,
    picg41, picg42, picg43, picg44, picg45, picg46, picg47, picg48, picg49, picg50,
    picg51, picg52, picg53, picg54, picg55, picg56, picg57, picg58, picg59, picg60,
    picg61, picg62, picg63, picg64, picg65, picg66, picg67, picg68, picg69, picg70,
    picg71, picg72, picg73, picg74, picg75, picg76, picg77, picg78, picg79, picg80,
    picg81, picg82, picg83, picg84, picg85, picg86, picg87
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
      <Slider {...baseSettings} autoplaySpeed={2500}>
        {images.map((image, index) => (
          <div key={index} className="px-2 mb-8">
            <Image
              src={image}
              alt={`Gallery ${index + 1}`}
              className="rounded-lg shadow-md w-full h-72 object-cover"
            />
          </div>
        ))}
      </Slider>

      <Slider {...baseSettings} autoplaySpeed={1000}>
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
