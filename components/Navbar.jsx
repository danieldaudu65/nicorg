"use client"

import React, { useRef, useState, useEffect } from 'react';
import { logo } from '../assets';
import { FaAngleDown, FaAngleUp, FaBarsStaggered } from "react-icons/fa6";
import Image from 'next/image';
import Link from 'next/link';


const Navbar = () => {
    const menuRef = useRef(null);
    const [mediaState, setMediaState] = useState(false);
    const [iconColor, setIconColor] = useState('text-black'); // Default color

    const handleClickMediaOpen = () => {
        setMediaState((prevState) => !prevState); // Toggle mediaState
    };

    const toggleMenu = () => {
        if (menuRef.current) {
            menuRef.current.classList.toggle('translate-x-0');
            menuRef.current.classList.toggle('translate-x-full');
        }
    };

    // Check the current route path
    useEffect(() => {
        if (typeof window !== "undefined") {
            const currentPath = window.location.pathname;
            if (currentPath === '/') {
                setIconColor('text-white'); // Set white color for home route
            } else {
                setIconColor('text-black'); // Set black color for other routes
            }
        }
    }, []);

    return (
        <div className="fixed z-50 w-full">
            <div className="flex px-6 h-16 w-[100%] justify-between backdrop-blur-md bg-transparent items-center">
                <Image src={logo} alt="" className="w-20 -ml-4" />
                <FaBarsStaggered 
                    className={`text-2xl cursor-pointer ${iconColor}`} 
                    onClick={toggleMenu} 
                />
            </div>
            {/* Slide-in Menu */}
            <div
                ref={menuRef}
                className="fixed top-0 right-0 w-full h-full bg-[#362F2F] text-white z-50 translate-x-full transition-transform duration-300 ease-in-out"
            >
                <div className="flex justify-between p-4">
                    <Image src={logo} className='w-20 -ml-4' alt="" />
                    <button className="text-3xl font-bold" onClick={toggleMenu}>
                        &times;
                    </button>
                </div>
                <ul className="flex flex-col items-start p-4 space-y-4 font-bold">
                    <li><Link href="/" className="hover:text-[#47DC17] transition-2s">HOME</Link></li>
                    <li><Link href="/about" className="hover:text-[#47DC17] transition-2s">WHO WE ARE</Link></li>
                    <li><Link href="/branch" className="hover:text-[#47DC17] transition-2s">BRANCHES</Link></li>
                    <li><Link href="/giving" className="hover:text-[#47DC17] transition-2s">ONLINE GIVING</Link></li>
                    <li>
                        <div
                            className="flex items-center cursor-pointer hover:text-[#47DC17] transition-2s"
                            onClick={handleClickMediaOpen}
                        >
                            MEDIA
                            {mediaState ? (
                                <FaAngleUp className="ml-2" />
                            ) : (
                                <FaAngleDown className="ml-2" />
                            )}
                        </div>

                        {/* Submenu */}
                        {mediaState && (
                            <div className="ml-6 mt-2 space-y-2">
                                <ul className="space-y-2">
                                    <li><Link href="/media/audio" className="hover:text-[#47DC17] transition-2s">Audio Sermons</Link></li>
                                    <li><Link href="/media/video" className="hover:text-[#47DC17] transition-2s">Video Sermons</Link></li>
                                    <li><Link href="/media/picture" className="hover:text-[#47DC17] transition-2s">Gallery</Link></li>
                                </ul>
                            </div>
                        )}
                    </li>
                    <li><Link href="/quick" className="hover:text-[#47DC17] transition-2s">QUICK LINKS</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
