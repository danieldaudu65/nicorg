import React from 'react';
import Image from 'next/image'; // Next.js optimized image component
import Link from 'next/link'; // Next.js Link component
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import { facebookicon, footerlogo, instagramicon, logo, mixicon, youtubeicon } from '../assets'; // Assuming assets are in the correct folder
import footerImage from '../assets/footer.svg'; // Adjust the path if needed

const Footer = () => {
  return (
    <div
      className="bg-cover backdrop-blur-xl bg-center p-8 px-6 py-10 flex items-center border-none justify-center"
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.739), rgba(0, 0, 0, 0.423)), url(${footerImage.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="text-white w-full max-w-screen-lg">
        {/* Contact Section */}
        <div className="text-[#fffa]">
          <h3 className="font-bold text-lg">GET IN TOUCH</h3>
          <p className="text-[13px] font-light">Nobles in Christ Ministries, Contact us</p>
          <div className="flex gap-4 my-4 items-start">
            <FaMapMarkerAlt className="text-[20px]" />
            <p className="text-[12px]">
              NOBLE PAVILLION @PIUS OMOFUMA STREET GT EXTENSION, UJEMEN EKPOMA, EDO STATE
            </p>
          </div>
          <div className="flex gap-4 my-4 items-center">
            <FaEnvelope className="text-[20px]" />
            <p className="text-[12px]">noblechristinfo@gmail.com</p>
          </div>
          <div className="flex gap-4 my-4 items-center">
            <FaPhone className="text-[20px]" />
            <p className="text-[12px]">+234 - 703 - 5430 - 287</p>
          </div>
        </div>
        <hr className="my-4 border-t border-gray-400" />

        {/* Logo and Ministry Name */}
        <div className="flex mt-5 items-center gap-2">
          <Image src={footerlogo} alt="Footer Logo" width={48} height={48} className="rounded" />
          <p className="text-[12px] font-semibold">NOBLE IN CHRIST MINISTRIES</p>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-2 gap-8 py-8">
          {/* Quick Links */}
          <div>
            <h4 className="text-white text-base mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2 text-[12px]">
              <Link href="/giving" className="hover:text-gray-300">Giving</Link>
              <Link href="/join-us-online" className="hover:text-gray-300">Join us Online</Link>
              <Link href="/branches" className="hover:text-gray-300">Branches</Link>
              <Link href="/media" className="hover:text-gray-300">Media</Link>
              <Link href="/our-leaders" className="hover:text-gray-300">Our Leaders</Link>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-white text-base mb-4">Social Links</h4>
            <div className="flex flex-col gap-4 text-[12px]">
              {[ 
                { icon: facebookicon, label: 'Facebook', href: 'https://facebook.com' },
                { icon: instagramicon, label: 'Instagram', href: 'https://instagram.com' },
                { icon: youtubeicon, label: 'YouTube', href: 'https://youtube.com' },
                { icon: mixicon, label: 'Mixlr', href: 'https://mixlr.com' }
              ].map(({ icon, label, href }, index) => (
                <Link key={index} href={href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Image src={icon} alt={label} width={16} height={16} />
                  <p>{label}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <hr className="border-t border-gray-400" />
      </div>
    </div>
  );
};

export default Footer;
