import React from 'react';

const AnimatedBanner = () => {
  const bannerContent = (
    <>
      <span className="text-black font-medium text-lg sm:text-xl md:text-[25px] mx-2 sm:mx-4 md:mx-8">Warehouse</span>
      <span className="text-[20px] sm:text-2xl md:text-[24px] mx-1 sm:mx-2" style={{ color: '#45A735' }}>✦</span>
      <span className="text-black font-medium text-lg sm:text-xl md:text-[25px] mx-2 sm:mx-4 md:mx-8">Hospitality</span>
      <span className="text-[20px] sm:text-2xl md:text-[24px] mx-1 sm:mx-2" style={{ color: '#45A735' }}>✦</span>
      <span className="text-black font-medium text-lg sm:text-xl md:text-[25px] mx-2 sm:mx-4 md:mx-8">Manufacturing</span>
      <span className="text-[20px] sm:text-2xl md:text-[24px] mx-1 sm:mx-2" style={{ color: '#45A735' }}>✦</span>
      <span className="text-black font-medium text-lg sm:text-xl md:text-[25px] mx-2 sm:mx-4 md:mx-8">Special Events</span>
      <span className="text-[20px] sm:text-2xl md:text-[24px] mx-1 sm:mx-2" style={{ color: '#45A735' }}>✦</span>
      <span className="text-black font-medium text-lg sm:text-xl md:text-[25px] mx-2 sm:mx-4 md:mx-8">General Labor</span>
      <span className="text-[20px] sm:text-2xl md:text-[24px] mx-1 sm:mx-2" style={{ color: '#45A735' }}>✦</span>
    </>
  );

  return (
    <div className="relative w-full h-16 sm:h-20 bg-white-100 overflow-hidden my-8">
      {/* Green background */}
      <div 
        className="absolute w-full h-full bg-[#78EB54]"
        style={{ transform: 'scale(1.1)' }}
      >
        {/* Scrolling container */}
        <div className="absolute inset-0 flex items-center overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap">
            {/* Two identical sets for looping */}
            <div className="flex">{bannerContent}</div>
            <div className="flex">{bannerContent}</div>
          </div>
        </div>
      </div>

      {/* Animation style */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 60s linear infinite;
          }
        `
      }} />
    </div>
  );
};

export default AnimatedBanner;
