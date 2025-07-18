import React from 'react';

const industries = [
  { 
    title: 'Hotel', 
    count: '2853 Staffs', 
    icon:  <img
      src="/src/assets/hotels.png" 
      alt="Hotel Icon"
      width={45}
      height={45}
      className="object-cover" 
    />
  },
  { 
    title: 'Hospitality', 
    count: '2256 Staffs', 
    icon: <img
      src="/src/assets/medical.png" 
      alt="Hospitality Icon"
      width={47}
      height={47}
      className="object-cover" 
    />
  },
  { 
    title: 'Kitchen', 
    count: '1408 Staffs', 
    icon: <img
      src="/src/assets/chef.png" 
      alt="Kitchen Icon"
      width={50}
      height={50}
      className="object-cover" 
    /> 
  },
  { 
    title: 'Retail', 
    count: '1740 Staffs', 
    icon: <img
      src="/src/assets/retail.png" 
      alt="Retail Icon"
      width={47}
      height={47}
      className="object-cover" 
    />  
  },
  { 
    title: 'Special Events', 
    count: '3948 Staffs', 
    icon: <img
      src="/src/assets/event.png" 
      alt="Special Events Icon"
      width={45}
      height={45}
      className="object-cover" 
    />  
  },
  { 
    title: 'General Labor', 
    count: '2984 Staffs', 
    icon: <img
      src="/src/assets/labor.png" 
      alt="General Labor Icon"
      width={45}
      height={45}
      className="object-cover" 
    />  
  },
  { 
    title: 'Driving', 
    count: '4509 Staffs', 
    icon: <img
      src="/src/assets/driving.png" 
      alt="Driving Icon"
      width={47}
      height={47}
      className="object-cover" 
    />  
  },
  { 
    title: 'Senior Living', 
    count: '1039 Staffs', 
    icon: <img
      src="/src/assets/senior.png" 
      alt="Senior Living Icon"
      width={53}
      height={53}
      className="object-cover" 
    />  
  }
];

const IndustriesServed = () => {
  return (
    <section className="py-12 sm:py-16 bg-white px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-block px-4 py-1 mb-4 rounded-full border border-[#bbf7d0] bg-[#ecfdf5] shadow-sm">
          <span className="text-xs uppercase font-bold tracking-widest text-[#45a735]">
            Industries
          </span>
        </div>  

        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
          Industries Served
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {industries.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-start p-6 sm:p-8 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="mb-4">{item.icon}</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-1">{item.title}</h3>
            <p className="text-sm text-gray-600">{item.count}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <button
          className="relative h-12 w-40 sm:w-48 overflow-hidden bg-[#78EB54] text-black shadow-2xl rounded-full flex items-center justify-center text-sm font-medium transition-all
            before:absolute before:left-0 before:top-0 before:h-full before:w-0 before:duration-500
            after:absolute after:right-0 after:top-0 after:h-full after:w-0 after:duration-500
            hover:before:w-1/2 hover:before:bg-[#26472B]
            hover:after:w-1/2 hover:after:bg-[#26472B]
            hover:text-white"
        >
          <span className="relative z-10">View All Categories</span>
        </button>
      </div>
    </section>
  );
};

export default IndustriesServed;
