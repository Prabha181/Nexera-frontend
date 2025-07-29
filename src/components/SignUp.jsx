import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [role, setRole] = useState('jobseeker'); // default role

  return (
    <div className="min-h-screen bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center px-4 py-10">
      {/* Heading */}
      <div className="text-center mb-6">
        <h2 className="text-2xl sm:text-[40px] font-semibold text-black">Sign Up</h2>
        <p className="text-black-500 text-sm mt-1">Home - Sign Up</p>
      </div>

      {/* Form Card */}
      <div className="w-[420px] bg-white p-6 sm:p-8 rounded-xl shadow-lg">
        <form className="space-y-5">

          {/* Role Selection */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">I am a</label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full px-4 py-2  border border-gray-300 rounded-full focus:outline-none focus:ring-1 focus:ring-[#3574b8] transition"
            >
              <option value="jobseeker ">Job Seeker</option>
              <option value="employer">Employer</option>
            </select>
          </div>

          {/* Common Fields */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Name</label>
            <input type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-1 focus:ring-[#3574b8] transition" />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Email</label>
            <input type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-1 focus:ring-[#3574b8] transition" />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Phone</label>
            <input type="tel"
              className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-1 focus:ring-[#3574b8] transition" />
          </div>

          {/* Employer Only Field */}
          {role === 'employer' && (
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">Company Name</label>
              <input type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-1 focus:ring-[#3574b8] transition" />
            </div>
          )}

          {/* Password */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Password</label>
            <input type="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-1 focus:ring-[#3574b8] transition" />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full mb-4 relative h-12 bg-[#3574b8] text-white shadow-md rounded-full flex items-center justify-center text-sm font-medium overflow-hidden transition-all
              before:absolute before:left-0 before:top-0 before:h-full before:w-0 before:duration-500
              after:absolute after:right-0 after:top-0 after:h-full after:w-0 after:duration-500
              hover:before:w-1/2 hover:before:bg-[#14243d]
              hover:after:w-1/2 hover:after:bg-[#14243d]
              hover:text-white">
            <span className="relative z-10">Sign Up</span>
          </button>

          {/* Or Divider */}
          <div className="text-center font-medium text-sm text-gray-700">Or</div>

          {/* Google Button */}
          <button className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-full text-black hover:bg-white hover:border-[#3574b8] transition">
            <img src="/src/assets/google.png" alt="Google" className="w-5 h-5" />
            Continue with Google
          </button>

          {/* Facebook Button */}
          <button className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-full text-black hover:bg-white hover:border-[#3574b8] transition">
            <img src="/src/assets/facebook.png" alt="Facebook" className="w-5 h-5" />
            Continue with Facebook
          </button>

          {/* Remember Me */}
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600 mt-3">
            <label className="flex items-center mb-2 sm:mb-0">
              <input type="checkbox" className="mr-2 accent-[#3574b8]" />
              Remember me
            </label>
          </div>

          {/* Login Link */}
          <p className="text-sm text-center text-gray-700 mt-4">
            Already have an account?{" "}
            <Link to="/login" className="text-[#3574b8] font-medium hover:underline">
              Login here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
