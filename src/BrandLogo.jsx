import React from 'react';

const BrandLogo = () => {
  return (
    <div className="relative z-20 -mt-[48px] sm:-mt-[64px] md:-mt-[50px]">
      <div className="bg-white rounded-[12px] shadow-lg px-[16px] py-[24px] w-[350px] sm:w-[730px] md:w-[720px] lg:w-[960px] xl:w-[1030px] h-[120px] mx-auto">
        <div className="flex flex-wrap justify-center items-center gap-[24px] sm:gap-[32px] text-center">

          {/* The Telegraph */}
          <div className="text-[#2B2B2B] font-serif text-[16px] sm:text-[18px] h-[40px] flex items-center">
            The Telegraph
          </div>

          {/* Warner Bros Discovery */}
          <div className="flex flex-col items-center text-black leading-tight">
            <span className="font-extrabold text-[12px] sm:text-[14px] md:text-[16px]">
              WARNER BROS.
            </span>
            <span className="text-[10px] sm:text-[12px] md:text-[14px]">
              DISCOVERY
            </span>
          </div>

          {/* NET-A-PORTER */}
          <div className="text-black font-medium tracking-widest uppercase text-[12px] sm:text-[14px] md:text-[16px]">
            NET-A-PORTER
          </div>

          {/* BrandStudio */}
          <div className="flex items-center gap-[4px] text-black text-[12px] sm:text-[14px] md:text-[16px]">
            <span className="font-serif text-[18px] sm:text-[20px] md:text-[22px]">𝕋</span>
            <span className="font-semibold">
              Brand<span className="font-bold">Studio</span>
            </span>
          </div>

          {/* HIGHSNOBIETY */}
          <div className="text-black font-extrabold underline underline-offset-[4px] text-[10px] sm:text-[14px] md:text-[16px]">
            HIGHSNOBIETY
          </div>

        </div>
      </div>
    </div>
  );
};

export default BrandLogo;
