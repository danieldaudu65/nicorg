import React from 'react';
import { FaCaretDown } from "react-icons/fa"; // Use a caret-down icon for the arrow
import Link from 'next/link'; // Import Link for navigation
import hbImage from '@/assets/hb.png'; 

const Homepage = () => {
  const scrollToSection = () => {
    const section = document.getElementById("home"); // Reference the section ID
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="relative -pt-16">
      {/* Main Homepage Section */}
      <div
        className="homep text-white h-[100vh] flex text-center flex-col items-center justify-center w-full relative"
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.739), rgba(0, 0, 0, 0.423)), url(${hbImage.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <h1 className="text-[32px] -mt-20 font-nunito font-extrabold">NOBLE IN CHRIST MINISTRIES</h1>
        <p className="my-3 font-parkin">BLESSED PEOPLE, BLESSING LIVES</p>

        <Link href="/branch" className="underline mt-10">
          Find A Branch Near You
        </Link>

        {/* Scroll Link */}
        <button
          onClick={scrollToSection}
          className="absolute bottom-10 cursor-pointer animate-bounce text-white text-3xl"
        >
          <FaCaretDown /> {/* Using the icon for the arrow */}
        </button>
      </div>

     
    </div>
  );
};

export default Homepage;
