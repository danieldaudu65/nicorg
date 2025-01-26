import React from 'react';
import { statements } from '../../constant';

const StatementOfFaith = () => {
  return (
    <div className="p-6">
      <h2 className="font-bold text-xl mb-4">Statement of Faith</h2>
      <ul className="space-y-2">
        {statements.map((item, index) => (
          <li key={index} className="flex items-start gap-2">
            <strong>{item.no}.</strong>
            <p>{item.statement}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StatementOfFaith;
