import React from 'react';

import hotelIcon from './assets/hotels.png';
import hospitalityIcon from './assets/medical.png';
import kitchenIcon from './assets/chef.png';
import retailIcon from './assets/retail.png';
import eventsIcon from './assets/event.png';
import laborIcon from './assets/labor.png';
import drivingIcon from './assets/driving.png';
import seniorIcon from './assets/senior.png';


const industries = [
  { title: 'Hotel', count: '2853 Staffs', icon: hotelIcon },
  { title: 'Hospitality', count: '2256 Staffs', icon: hospitalityIcon },
  { title: 'Kitchen', count: '1408 Staffs', icon: kitchenIcon },
  { title: 'Retail', count: '1740 Staffs', icon: retailIcon },
  { title: 'Special Events', count: '3948 Staffs', icon: eventsIcon },
  { title: 'General Labor', count: '2984 Staffs', icon: laborIcon },
  { title: 'Driving', count: '4509 Staffs', icon: drivingIcon },
  { title: 'Senior Living', count: '1039 Staffs', icon: seniorIcon },
];

const IndustriesServed = () => {
  return (
    <section className="py-12 sm:py-16 bg-white px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-block px-4 py-1 mb-4 rounded-full border border-[#3574b8] bg-[#e6edf8] shadow-sm">
          <span className="text-xs uppercase font-bold tracking-widest text-[#3574b8]">
            Industries
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Industries Served</h2>
      </div>

      <div className="max-w-5xl mx-auto border border-gray-200 rounded overflow-hidden grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4">
        {industries.map((item, index) => (
          <div
            key={index}
            className={`
              relative group cursor-pointer overflow-hidden bg-gray-50 p-6 flex flex-col items-start
              border-b border-r border-gray-200
              ${index >= industries.length - 4 ? "border-b-0" : ""}
              ${(index + 1) % 4 === 0 ? "border-r-0" : ""}
            `}
          >
            {/* Hover background animation */}
            <span className="absolute top-0 left-0 h-0 w-0 bg-[#3574b8] transition-all duration-500 ease-out group-hover:h-full group-hover:w-full z-0"></span>

            <img
              src={item.icon}
              alt={`${item.title} Icon`}
              className="w-12 h-12 object-contain mb-4 relative z-10 group-hover:brightness-0 group-hover:invert transition-all duration-300"
            />

            <h3 className="text-lg font-semibold mb-1 relative z-10 text-black group-hover:text-white transition-colors duration-300">
              {item.title}
            </h3>
            <p className="text-sm relative z-10 text-gray-600 group-hover:text-white transition-colors duration-300">
              {item.count}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <button
          className="relative h-12 w-40 sm:w-48 overflow-hidden bg-[#3574b8] text-white shadow-2xl rounded-full flex items-center justify-center text-sm font-medium transition-all
            before:absolute before:left-0 before:top-0 before:h-full before:w-0 before:duration-500
            after:absolute after:right-0 after:top-0 after:h-full after:w-0 after:duration-500
            hover:before:w-1/2 hover:before:bg-[#14243d]
            hover:after:w-1/2 hover:after:bg-[#14243d]
            hover:text-white"
        >
          <span className="relative z-10">View All Categories</span>
        </button>
      </div>
    </section>
  );
};

export default IndustriesServed;
