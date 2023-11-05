'use client';
import { useState } from 'react';
export default function Tab({ headers, children }) {
  const [activeTab, setActiveTab] = useState(0);
  const changeTabHandler = (index) => {
    setActiveTab(index);
  };
  return (
    <div>
      {headers.map((title, index) => (
        <div
          className=" w-20 me-24 inline-block border-b border-b-white text-center font-bold cursor-pointer"
          key={index}
          onClick={(event) => changeTabHandler(index)}
        >
          {title}
        </div>
      ))}
      <div className=" h-28 border border-gray-100 p-3 ">
        {children[activeTab]}
      </div>
    </div>
  );
}
