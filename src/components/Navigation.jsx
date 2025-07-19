import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PagesDropdown from './PagesDropdown';
import miniLogo from '../assets/nexeralogo.png';

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full px-6 py-4 bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <img src={miniLogo} alt="Logo" className="h-10 w-auto" />
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-black"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Nav Links */}
        <ul
          className={`md:flex md:items-center md:static absolute top-full left-0 w-full md:w-auto bg-white md:bg-transparent 
          shadow-md md:shadow-none flex-col md:flex-row text-black font-medium transition-all duration-300 
          ${menuOpen ? 'flex px-6 py-4 z-40 gap-4' : 'hidden md:flex gap-6'}`}
        >
          <li><Link to="/" onClick={() => setMenuOpen(false)} className="block py-2 hover:text-[#3574b8]">Home</Link></li>
          <li><Link to="/about" onClick={() => setMenuOpen(false)} className="block py-2 hover:text-[#3574b8]">About</Link></li>
          <li><a href="#solutions" onClick={() => setMenuOpen(false)} className="block py-2 hover:text-[#3574b8]">Solutions</a></li>
          <PagesDropdown />
          <li><a href="#blog" onClick={() => setMenuOpen(false)} className="block py-2 hover:text-[#3574b8]">Blog</a></li>
          <li><Link to="/contact" onClick={() => setMenuOpen(false)} className="block py-2 hover:text-[#3574b8]">Contact</Link></li>

          {/* Mobile Buttons (visible only on mobile) */}
          <div className="md:hidden flex flex-col gap-2 mt-4">
            <Link to="/login" className="text-sm font-medium text-black hover:text-[#3574b8]">Log In</Link>
            <Link to="/signup"
              className="relative h-10 w-full overflow-hidden bg-[#3574b8] text-black shadow-xl transition-all
                before:absolute before:left-0 before:top-0 before:h-full before:w-0 before:duration-500 
                after:absolute after:right-0 after:top-0 after:h-full after:w-0 after:duration-500 
                hover:before:w-2/4 hover:before:bg-[#3574b8] 
                hover:after:w-2/4 hover:after:bg-[#3574b8]
                hover:text-white rounded-full flex items-center justify-center text-sm font-medium"
            >
              <span className="relative z-10">Get Started</span>
            </Link>
          </div>
        </ul>

        {/* Desktop Only - Right Side Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <button className="p-2 rounded-full text-black hover:text-[#3574b8]" aria-label="Search">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>
          <Link to="/login" className="text-sm font-medium text-black hover:text-[#3574b8]">Log In</Link>
          {/* <Link to="/signup"
            className="relative h-10 w-32 overflow-hidden bg-[#95bbe4] text-black shadow-2xl transition-all 
              before:absolute before:left-0 before:top-0 before:h-full before:w-0 before:duration-500 
              after:absolute after:right-0 after:top-0 after:h-full after:w-0 after:duration-500 
              hover:before:w-2/4 hover:before:bg-[#3574b8] 
              hover:after:w-2/4 hover:after:bg-[#3574b8]
              hover:text-white rounded-full flex items-center justify-center text-sm font-medium"
          >
            <span className="relative z-10">Get Started</span>
          </Link> */}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
