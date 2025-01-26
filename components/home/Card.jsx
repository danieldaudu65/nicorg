import React from 'react';
import { Cards } from '@/constant';
import Button from '../Button';

const Card = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 px-8 gap-6 p-6">
            {Cards.map((item, index) => (
                <div key={index} className="shadow-xl border  bg-[#99999916] flex justify-evenly items-center flex-col h-[400px] mb-6  rounded-lg  p-6 text-center">
                    <h2 className=" font-[800] text-[32px]  mb-2">{item.title}</h2>
                    <p className="text-gray-600 text-[14px] w-[80%] mb-4">{item.text}</p>
                    <Button text={item.button} />
                </div>
            ))}
        </div>
    );
};

export default Card;
