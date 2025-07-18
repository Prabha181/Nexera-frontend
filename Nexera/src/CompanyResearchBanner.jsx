import React from 'react';
import BannerImage from './assets/researching_companies_bg.png';

const CompanyResearchBanner = () => {
  return (
    <div
      className="w-full bg-cover bg-center bg-no-repeat relative flex items-center justify-center h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px]"
      style={{ backgroundImage: `url(${BannerImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 z-0"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <div className="inline-block px-4 py-1 mb-4 rounded-full border border-[#45a735] shadow-sm">
          <span className="text-[10px] uppercase font-bold tracking-widest text-[#45a735]">
            Category
          </span>
        </div>
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
          Researching Companies <br className="hidden sm:block" />
          Before Applying
        </h1>
      </div>
    </div>
  );
};

export default CompanyResearchBanner;
