import React from 'react';
import { missions, visions } from '../../constant';
import { bigLogo } from '../../assets';

const Mission = () => {
  return (
    <div
      className="p-6"
      style={{
        background: `url(${bigLogo})`,
        backgroundPosition: 'center',
        backgroundSize: 'contain',
        width: '100%',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <h2 className="font-bold mb-4 text-[18px]">OUR MISSION AND VISION</h2>
      <div>
        <p className="font-semibold mb-2">Our Mission</p>
        <div className="block">
          <ul className="space-y-2">
            {missions.map((mission, index) => (
              <li
                key={index}
                className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2/4 before:-translate-y-2/4 before:w-1 before:h-1 before:bg-black before:rounded-full"
              >
                {mission.mission}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <p className="font-semibold mt-8 mb-4">Our Vision</p>
        <ul className="space-y-2">
          {visions.map((vision, index) => (
            <li
              key={index}
              className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2/4 before:-translate-y-2/4 before:w-1 before:h-1 before:bg-black before:rounded-full flex items-center gap-2"
            >
              {/* <strong>{vision.no}</strong> */}
              <p>{vision.vision}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Mission;
