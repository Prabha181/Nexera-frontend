import React from 'react';
import BusinessImg from '../assets/hero_section_banner.png';

const Hero = () => {
  return (
    <div
    className="flex flex-col items-center justify-center text-center min-h-screen px-4 sm:px-6 bg-cover bg-center bg-no-repeat"
    style={{ backgroundImage: `url(${BusinessImg})` }}
  >
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight">
        Your Next Opportunity
        <br className="hidden sm:block" />
        <span className="text-white"> Starts Right Here</span>
      </h1>

      <p className="mt-6 text-base sm:text-lg md:text-xl text-white max-w-2xl leading-relaxed">
        Step into a world where your skills are valued, your growth is prioritized,
        <br className="hidden sm:block" />
        and your next big move is just a click away.
      </p>

      <div className="mt-10 flex flex-col sm:flex-row gap-4 w-full max-w-xs sm:max-w-md md:max-w-lg justify-center items-center">
        <button
          className="relative h-[52px] w-full sm:w-44 overflow-hidden bg-[#3574b8] text-white shadow-xl transition-all
            before:absolute before:left-0 before:top-0 before:h-full before:w-0 before:duration-500
            after:absolute after:right-0 after:top-0 after:h-full after:w-0 after:duration-500
            hover:before:w-2/4 hover:before:bg-[#14243d]
            hover:after:w-2/4 hover:after:bg-[#14243d]
            hover:text-white
            rounded-full flex items-center justify-center text-base font-semibold"
        >
          <span className="relative z-10">Post a Job</span>
        </button>

        <button
          className="relative h-[52px] w-full sm:w-44 overflow-hidden bg-[#e6edf8] text-black shadow-xl transition-all
            before:absolute before:left-0 before:top-0 before:h-full before:w-0 before:duration-500
            after:absolute after:right-0 after:top-0 after:h-full after:w-0 after:duration-500
            hover:before:w-2/4 hover:before:bg-[#14243d]
            hover:after:w-2/4 hover:after:bg-[#14243d]
            hover:text-white
            rounded-full flex items-center justify-center text-base font-semibold"
        >
          <span className="relative z-10">Find a Job</span>
        </button>
      </div>
    </div>
  );
};

export default Hero;
