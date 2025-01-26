import React from "react";
import Slider from "react-slick";
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
} from "../assets";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

  const settings = {
    dots: false, // Disable dots
    infinite: true, // Infinite loop
    speed: 500, // Speed of sliding
    slidesToShow: 3, // Show 3 slides at a time
    slidesToScroll: 1, // Scroll 1 slide at a time
    autoplay: true, // Autoplay enabled
    autoplaySpeed: 2000, // Speed of autoplay
    responsive: [
      {
        breakpoint: 1024, // For screens less than 1024px
        settings: {
          slidesToShow: 3, // Show 3 slides
        },
      },
      {
        breakpoint: 768, // For screens less than 768px
        settings: {
          slidesToShow: 3, // Show 3 slides
        },
      },
      {
        breakpoint: 480, // For screens less than 480px
        settings: {
          slidesToShow: 1, // Show 2 slides for small screens
        },
      },
    ],
    arrows: false, // Hide side arrows
  };
  const settings_two = {
    dots: false, // Disable dots
    infinite: true, // Infinite loop
    speed: 500, // Speed of sliding
    slidesToShow: 3, // Show 3 slides at a time
    slidesToScroll: 1, // Scroll 1 slide at a time
    autoplay: true, // Autoplay enabled
    autoplaySpeed: 500, // Speed of autoplay
    responsive: [
      {
        breakpoint: 1024, // For screens less than 1024px
        settings: {
          slidesToShow: 3, // Show 3 slides
        },
      },
      {
        breakpoint: 768, // For screens less than 768px
        settings: {
          slidesToShow: 3, // Show 3 slides
        },
      },
      {
        breakpoint: 480, // For screens less than 480px
        settings: {
          slidesToShow: 3, // Show 2 slides for small screens
        },
      },
    ],
    arrows: false, // Hide side arrows
  };

  return (
    <div className="p-6 bg-[#0F0325]">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="px-2 mb-8">
            <img
              src={image}
              alt={`Gallery ${index + 1}`}
              className="rounded-lg shadow-md w-full h-64 object-cover"
            />
          </div>
        ))}
      </Slider>
      <Slider {...settings_two}>
        {images.map((image, index) => (
          <div key={index} className="px-2">
            <img
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
