import React from 'react';

const BrandLogo = () => {
  return (
   <div className="w-full bg-[#FFFFFF] py-12 px-4">
    <div className="max-w-6xl mx-auto">
      <div className="bg-white rounded-xl shadow-md px-6 py-10 w-full max-w-[1000px] mx-auto">
        <div className="flex flex-wrap justify-center items-center gap-x-15 gap-y-6 w-full max-w-[900px] mx-auto">
            {/* The Telegraph */}
            <div className="text-[#2B2B2B] font-serif text-lg sm:text-xl">
              The Telegraph
            </div>

            {/* Warner Bros Discovery */}
            <div className="flex flex-col items-center sm:items-start text-black text-center sm:text-left">
              <span className="font-black text-sm sm:text-base">WARNER BROS.</span>
              <span className="text-xs sm:text-sm">DISCOVERY</span>
            </div>

            {/* NET-A-PORTER */}
            <div className="text-black font-medium text-lg sm:text-xl tracking-widest text-center sm:text-left uppercase">
              NET-A-PORTER
            </div>

            {/* BrandStudio */}
            <div className="flex items-center gap-1 text-black text-base sm:text-lg">
              <span className="font-serif text-xl">𝕋</span>
              <span className="font-semibold">Brand<span className="font-bold">Studio</span></span>
            </div>

            {/* HIGHSNOBIETY */}
            <div className="text-black font-extrabold text-sm sm:text-base text-center sm:text-left underline underline-offset-4">
              HIGHSNOBIETY
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandLogo;
