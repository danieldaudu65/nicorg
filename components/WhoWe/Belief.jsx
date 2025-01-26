import React from 'react';
import { belief } from '../../constant';
import { picture } from '../../assets';

const Belief = () => {
    return (
        <div className='p-6 bg-[#54130B] text-white'>
            <h2 className='font-bold'>BELIEF & VALUE</h2>
            <p className='text-[13px] my-4'>Our belief are deeply rooted in the Bible and teachings of Christ.</p>

            <div>
                {
                    belief.map((item, index) => (
                        <li key={index} className=' mb-4 flex flex-col'>
                            <div className=' font-bold underline my-4'>{item.title}</div>
                            <p className='text-[13px]'>{item.text}</p>
                        </li>
                    ))
                }
            </div>


            <img className='flex mb-8 my-4  justify-center items-center' src= {picture} alt="" />
        </div>
    );
}

export default Belief;
