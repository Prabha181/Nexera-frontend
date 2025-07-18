import React from 'react';

// ✅ Image imports
import hotelIcon from '../assets/hotels.png';
import hospitalityIcon from '../assets/medical.png';
import kitchenIcon from '../assets/chef.png';
import retailIcon from '../assets/retail.png';
import eventIcon from '../assets/event.png';
import laborIcon from '../assets/labor.png';
import drivingIcon from '../assets/driving.png';
import seniorIcon from '../assets/senior.png';

// ✅ Industry data
const industries = [
  { title: 'Hotel', count: '2853 Staffs', icon: hotelIcon },
  { title: 'Hospitality', count: '2256 Staffs', icon: hospitalityIcon },
  { title: 'Kitchen', count: '1408 Staffs', icon: kitchenIcon },
  { title: 'Retail', count: '1740 Staffs', icon: retailIcon },
  { title: 'Special Events', count: '3948 Staffs', icon: eventIcon },
  { title: 'General Labor', count: '2984 Staffs', icon: laborIcon },
  { title: 'Driving', count: '4509 Staffs', icon: drivingIcon },
  { title: 'Senior Living', count: '1039 Staffs', icon: seniorIcon }
];

const IndustriesServed = () => {
  return (
    <section className="py-12 sm:py-16 bg-white px-4 sm:px-6 lg:px-8">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-block px-4 py-1 mb-4 rounded-full border border-[#3574b8] bg-[#e6edf8] shadow-sm">
          <span className="text-xs uppercase font-bold tracking-widest text-[#3574b8]">
            Industries
          </span>
        </div>  

        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
          Industries Served
        </h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {industries.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-start p-6 sm:p-8 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="mb-4">
              <img
                src={item.icon}
                alt={`${item.title} Icon`}
                width={47}
                height={47}
                className="object-cover"
              />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-1">{item.title}</h3>
            <p className="text-sm text-gray-600">{item.count}</p>
          </div>
        ))}
      </div>

      {/* Button */}
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
