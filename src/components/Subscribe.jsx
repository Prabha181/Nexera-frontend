import React from "react";
import shapeBg from "../assets/shape-8.png";



const Subscribe = () => {
  return (
    <div
      className="max-w-6xl mx-auto mt-20 mb-10 px-4 sm:px-6 lg:px-8 bg-[#14243d] rounded-lg py-10 flex flex-col lg:flex-row items-center justify-between gap-6 text-white bg-no-repeat bg-right bg-contain"
      style={{ backgroundImage: `url(${shapeBg})` }}
    >
      {/* Left Text */}
      <h2 className="text-center lg:text-left text-2xl md:text-3xl font-semibold max-w-md">
        Subscribe for <span className="text-[#3574b8]">latest update</span>
      </h2>

      {/* Right Input */}
      <form className="flex items-center bg-white rounded-full overflow-hidden shadow-md w-full max-w-md">
        <input
          type="email"
          placeholder="Email Address"
          className="flex-grow px-4 py-3 text-black outline-none text-sm sm:text-base"
        />
        <button
          type="submit"
          className="bg-[#3574b8] text-[#e6edf8] px-6 py-3 font-semibold transition-all duration-200 text-sm sm:text-base"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default Subscribe;
