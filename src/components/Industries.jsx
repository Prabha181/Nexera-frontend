import React from 'react';
import hotelIcon from '../assets/hotels.png';
import hospitalityIcon from '../assets/medical.png';
import kitchenIcon from '../assets/chef.png';
import retailIcon from '../assets/retail.png';
import eventsIcon from '../assets/event.png';
import laborIcon from '../assets/labor.png';
import drivingIcon from '../assets/driving.png';
import seniorIcon from '../assets/senior.png';

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

const Industries = () => {
  return (
    <section className="py-6 sm:py-18 bg-white px-4 sm:px-6 lg:px-0">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div className="inline-block px-4 py-1 mb-4 rounded-full border border-[#3574b8] bg-[#e6edf8]">
            <span className="text-xs uppercase font-bold tracking-widest text-[#3574b8]">
              Industries
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Industries Served</h2>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center">
          {industries.map((item, index) => (
            <div
              key={index}
              className="relative w-full max-w-[235px] min-h-[100px] bg-gray-50 rounded-xl p-5 sm:p-6 shadow-md flex items-center justify-center text-center cursor-pointer overflow-hidden
                before:absolute before:left-0 before:top-0 before:h-full before:w-0 before:duration-500
                after:absolute after:right-0 after:top-0 after:h-full after:w-0 after:duration-500
                hover:before:w-2/4 hover:before:bg-[#3574b8]
                hover:after:w-2/4 hover:after:bg-[#3574b8]
                hover:text-white transition-all group"
            >
              <div className="relative z-10 flex items-center space-x-3 sm:space-x-4">
                <img
                  src={item.icon}
                  alt={`${item.title} icon`}
                  className="w-10 h-10 sm:w-12 sm:h-12 object-contain transition duration-300 group-hover:brightness-0 group-hover:invert"
                />
                <div className="text-left">
                  <h3 className="text-base sm:text-lg font-semibold cursor-pointer hover:underline active:underline focus:underline">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm">{item.count}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
