import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const PagesDropdown = () => {
  const [pagesOpen, setPagesOpen] = useState(false);
  const [jobSubOpen, setJobSubOpen] = useState(false);

  return (
    <li className="relative group">
      {/* Main Dropdown Toggle */}
      <button
        onClick={() => setPagesOpen(!pagesOpen)}
        className="block py-2 px-4 w-full text-left hover:text-[#45A735] md:text-center"
      >
        Pages ▾
      </button>

      {/* Dropdown Menu */}
      {pagesOpen && (
        <ul
          className={`bg-white shadow-lg rounded-md z-50 w-full md:w-48 md:absolute md:left-0 md:top-full md:mt-2`}
        >
          {/* Job Submenu */}
          <li className="relative">
            <button
              onClick={() => setJobSubOpen(!jobSubOpen)}
              className="w-full px-4 py-2 text-left hover:bg-gray-100 flex justify-between items-center"
            >
              Job
              <span className="text-sm">▸</span>
            </button>

            {/* Job Submenu Dropdown */}
            {jobSubOpen && (
              <ul
                className={`bg-white shadow-lg rounded-md z-50 w-full md:w-48 
                  ${pagesOpen ? 'block' : 'hidden'} 
                  md:absolute md:left-full md:top-0 md:mt-0 mt-2`}
              >
                <li>
                  <Link
                    to="/job-openings"
                    className="block px-4 py-2 hover:bg-gray-100"
                    onClick={() => {
                      setPagesOpen(false);
                      setJobSubOpen(false);
                    }}
                  >
                    Job Openings
                  </Link>
                </li>
                <li>
                  <Link
                    to="/job-details"
                    className="block px-4 py-2 hover:bg-gray-100"
                    onClick={() => {
                      setPagesOpen(false);
                      setJobSubOpen(false);
                    }}
                  >
                    Job Details
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* Example: Additional Page Link (Uncomment if needed) */}
          {/* <li>
            <Link to="/about" className="block px-4 py-2 hover:bg-gray-100">About Us</Link>
          </li> */}
        </ul>
      )}
    </li>
  );
};

export default PagesDropdown;
