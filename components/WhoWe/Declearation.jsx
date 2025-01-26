import React from 'react';
import { bigLogo } from '../../assets';

const Declearation = () => {
    return (
        <div className="relative bg-gray-50 p-6 flex flex-col items-center text-center">
            <img
                src={bigLogo}
                className="absolute inset-0 w-full h-full object-contain opacity-10"
                alt="Big Logo"
            />
            <div className="relative z-10">
                <h2 className="text-2xl font-bold text-purple-600 mb-4">NOBLE DECLARATION</h2>
                <p className="text-gray-700 leading-relaxed space-y-4">
                    I am a Noble
                    <br />
                    I win souls to Christ
                    <br />
                    I live in fellowship with God
                    <br />
                    I live by faith in the word of God.
                    <br />
                    I am a giver
                    <br />
                    I am prosperous
                    <br />
                    The power of the Holy Ghost is evident in my life.
                    <br />
                    I have the character of excellence
                    <br />
                    In Jesus name.
                </p>
            </div>
        </div>
    );
};

export default Declearation;
