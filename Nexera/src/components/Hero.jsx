import React from 'react';
import { Link } from 'react-router-dom';
import BusinessImg from '../assets/background.png';

const Hero = () => {
  return (
    <div
      className="flex flex-col items-center justify-center text-center pt-20 sm:pt-28 md:pt-32 pb-16 px-4 sm:px-6 bg-cover bg-center"
      style={{ backgroundImage: `url(${BusinessImg})` }}
    >
      <h1 className="text-[55.0194px] leading-[50.0176px] font-bold text-balancefont-bold text-white text-balance">
        Find Your Next Carer Here
        <br className="hidden sm:block" />
        Our Open Positions
      </h1>

      <p className="mt-4 text-base sm:text-lg text-white leading-relaxed max-w-2xl text-pretty">
        Explore our open positions to find roles that align with your interests and <br/>
        expertise. From entry-level positions to leadership roles.
      </p>

      <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full max-w-md sm:max-w-full justify-center items-center">
        <button
          className="relative h-[50px] w-full sm:w-40 overflow-hidden bg-[#78EB54] text-black shadow-2xl transition-all 
            before:absolute before:left-0 before:top-0 before:h-full before:w-0 before:duration-500 
            after:absolute after:right-0 after:top-0 after:h-full after:w-0 after:duration-500 
            hover:before:w-2/4 hover:before:bg-white 
            hover:after:w-2/4 hover:after:bg-white
            rounded-full flex items-center justify-center text-sm font-medium"
        >
          <span className="relative z-10">Find Works</span>
        </button>

        <button
          className="relative h-[50px] w-full sm:w-40 overflow-hidden bg-white text-black shadow-2xl transition-all 
            before:absolute before:left-0 before:top-0 before:h-full before:w-0 before:duration-500 
            after:absolute after:right-0 after:top-0 after:h-full after:w-0 after:duration-500 
            hover:before:w-2/4 hover:before:bg-[#78EB54]
            hover:after:w-2/4 hover:after:bg-[#78EB54]
            hover:text-white
            rounded-full flex items-center justify-center text-sm font-medium"
        >
          <span className="relative z-10">Hire Talents Now</span>
        </button>
      </div>
    </div>
  );
};

export default Hero;
