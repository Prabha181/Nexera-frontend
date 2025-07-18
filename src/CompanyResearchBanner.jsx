import React from 'react';
import BannerImage from './assets/researching_companies_bg.png';

const CompanyResearchBanner = () => {
  return (
    <section
      aria-label="Researching Companies Before Applying Banner"
      className="relative w-full bg-cover bg-center bg-no-repeat flex items-center justify-center h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px]"
      style={{ backgroundImage: `url(${BannerImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="inline-block px-5 py-1 mb-5 rounded-full border border-[#3574b8] bg-white/10 shadow-sm">
          <span className="text-xs sm:text-sm uppercase font-semibold tracking-widest text-[#3574b8] font-sans">
            Category
          </span>
        </div>
        <h1 className="font-sans font-extrabold text-white leading-tight
                       text-2xl sm:text-3xl md:text-4xl lg:text-5xl
                       drop-shadow-lg">
          Researching Companies <br className="hidden sm:block" />
          Before Applying
        </h1>
      </div>
    </section>
  );
};

export default CompanyResearchBanner;
