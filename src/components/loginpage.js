import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate(); // for redirecting after login success

  // State to hold form data
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // State to handle loading and errors
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await fetch('/api/login', {  // <-- Replace with your actual API endpoint
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        // If API returns error, show message
        setError(data.message || 'Login failed');
      } else {
        // Successful login
        // Example: save token in localStorage or context (adjust as per your app)
        localStorage.setItem('token', data.token);

        // Redirect or do something after login success
        navigate('/dashboard'); // Change to the route you want after login
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center px-4 py-10"
    >
      {/* Heading and Breadcrumb - OUTSIDE the form card */}
      <div className="text-center mb-6">
        <h2 className="text-2xl sm:text-[40px] font-semibold text-black mt-15 items-center justify-center">Login</h2>
        <p className="text-black-500 text-sm mt-1 items-center justify-center mb-15">Home - Login</p>
      </div>

      {/* Form card */}
      <div className="w-[420px] h-auto bg-white p-6 sm:p-8 rounded-xl shadow-lg">
        <form className="space-y-5" onSubmit={handleSubmit}>

          {error && (
            <div className="text-red-600 text-center font-medium">{error}</div>
          )}

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Email *</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-1 focus:ring-[#3574b8] transition"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Password *</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-1 focus:ring-[#3574b8] transition"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full mb-4 relative h-12 bg-[#3574b8] text-white shadow-md rounded-full flex items-center justify-center text-sm font-medium overflow-hidden transition-all
              before:absolute before:left-0 before:top-0 before:h-full before:w-0 before:duration-500
              after:absolute after:right-0 after:top-0 after:h-full after:w-0 after:duration-500
              hover:before:w-1/2 hover:before:bg-[#14243d]
              hover:after:w-1/2 hover:after:bg-[#14243d]
              hover:text-white
              ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            <span className="relative z-10">{loading ? 'Logging in...' : 'Login'}</span>
          </button>

          <div className="text-center font-medium text-sm text-gray-700">Or</div>

          {/* Social buttons (no change here) */}
          <button type="button" className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-full text-black hover:bg-white hover:border-[#3574b8] focus:outline-none focus:border-[#3574b8] active:border-[#3574b8] transition">
            <img src="/src/assets/google.png" alt="Google" className="w-5 h-5" />
            Continue with Google
          </button>

          <button type="button" className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-full text-black hover:bg-white hover:border-[#3574b8] focus:outline-none focus:border-[#3574b8] active:border-[#3574b8] transition">
            <img src="/src/assets/facebook.png" alt="Facebook" className="w-5 h-5" />
            Continue with Facebook
          </button>

          <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600 mt-3">
            <label className="flex items-center mb-2 sm:mb-0">
              <input type="checkbox" className="mr-2 accent-[#3574b8] checked:text-white hover:bg-transparent" />
              Remember me
            </label>
            <a href="#" className="text-black hover:text-[#3574b8]">Forget password?</a>
          </div>

          <p className="text-sm text-center text-gray-700 mt-4">
            Not registered yet?{" "}
            <Link to="/signup" className="text-[#3574b8] font-medium hover:underline">
              Create an Account
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
