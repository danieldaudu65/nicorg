import React from 'react';
import { core_values } from '../../constant';

const Values = () => {
  return (
    <div className="p-6">
      <h3 className="font-bold mb-4">OUR CORE VALUES</h3>
      <ul className="space-y-3">
        {core_values.map((value, index) => (
          <li
            key={index}
            className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2/4 before:-translate-y-2/4 before:w-1 before:h-1 before:bg-black before:rounded-full"
          >
            {value.value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Values;
