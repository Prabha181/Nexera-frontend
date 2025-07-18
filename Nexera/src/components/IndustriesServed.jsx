import React from 'react';
import {
  Building2,
  Hotel,
  ChefHat,
  Store,
  CalendarCheck,
  HardHat,
  Truck,
  Users,
} from 'lucide-react';

const IndustriesServed = () => {
  const industries = [
    { title: 'Hotel', count: '2853 Staffs', icon: <Building2 size={24} className="text-gray-600" /> },
    { title: 'Hospitality', count: '2256 Staffs', icon: <Hotel size={24} className="text-gray-600" /> },
    { title: 'Kitchen', count: '1408 Staffs', icon: <ChefHat size={24} className="text-gray-600" /> },
    { title: 'Retail', count: '1740 Staffs', icon: <Store size={24} className="text-gray-600" /> },
    { title: 'Events', count: '3948 Staffs', icon: <CalendarCheck size={24} className="text-gray-600" /> },
    { title: 'Labor', count: '2984 Staffs', icon: <HardHat size={24} className="text-gray-600" /> },
    { title: 'Driving', count: '4509 Staffs', icon: <Truck size={24} className="text-gray-600" /> },
    { title: 'Caretaker', count: '1039 Staffs', icon: <Users size={24} className="text-gray-600" /> },
  ];

  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Badge and Heading */}
        <div className="text-center mb-10">
          <div className="inline-block px-4 py-1 mb-4 rounded-full border border-[#bbf7d0] bg-[#ecfdf5] shadow-sm">
            <span className="text-xs uppercase font-bold tracking-wide text-[#45a735]">Industries</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-800">Industries Served</h2>
        </div>

        {/* Grid of Industries */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {industries.map((item, index) => (
            <div
              key={index}
              className="flex flex-col p-4 md:p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-center mb-2">
                <div className="mr-3">{item.icon}</div>
                <h3 className="text-base font-semibold text-gray-800">{item.title}</h3>
              </div>
              <p className="text-sm text-gray-600 pl-9">{item.count}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IndustriesServed;
