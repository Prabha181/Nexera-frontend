import React from 'react';
import BannerImage from './assets/researching_companies_bg.png';

const CompanyResearchBanner = () => {
  return (
    <section
      aria-label="Researching Companies Before Applying Banner"
      className="relative w-full h-[350px] sm:h-[400px] md:h-[470px] bg-center bg-no-repeat flex items-center justify-center mt-10 mb-[-40px]"
      style={{ backgroundImage: `url(${BannerImage})`, backgroundSize: 'cover' }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
        <div className="inline-block px-4 py-1 mb-6 rounded-full border border-[#3574b8] bg-white/10 shadow-sm">
          <span className="text-xs sm:text-sm uppercase font-semibold tracking-widest text-[#3574b8] font-sans">
            Category
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-4xl font-bold text-white mb-10 sm:mb-40">
          Researching Companies <br className="hidden sm:block" />
          Before Applying
        </h1>
      </div>
    </section>
  );
};

export default CompanyResearchBanner;
