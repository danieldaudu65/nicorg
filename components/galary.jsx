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
  picg36
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
    picg36
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
              className="rounded-lg shadow-md w-full h-72 object-cover"
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
