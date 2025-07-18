import React, { useState } from 'react';
import { Mail } from 'lucide-react';
import BusinessImg from './assets/news_bg.png';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => {
        setIsSubscribed(false);
        setEmail('');
      }, 3000);
    }
  };

  return (
    <section
      className="relative py-21 px-4 sm:px-6 lg:px-8 bg-cover bg-center"
      style={{
        backgroundImage: `url(${BusinessImg})`,
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      <div className="relative z-10 max-w-3xl mx-auto text-center text-white">
        <h2 className="text-2xl sm:text-4xl font-bold mb-6">Subscribe Newsletter</h2>

        <div className="mb-4">
          <div className="flex items-center bg-white rounded-full shadow-lg overflow-hidden max-w-2xl mx-auto">
            {/* Mail Icon */}
            <div className="flex items-center pl-5 pr-2">
              <Mail className="w-5 h-5 text-gray-400" />
            </div>

            {/* Email Input */}
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
              className="flex-1 px-3 py-4 text-gray-900 placeholder-gray-400 focus:outline-none bg-transparent text-base"
            />

            {/* Animated Subscribe Button */}
            <button
              onClick={handleSubmit}
              disabled={isSubscribed}
              className={`relative h-[45px] w-35 overflow-hidden shadow-2xl transition-all m-1
                before:absolute before:left-0 before:top-0 before:h-full before:w-0 before:duration-500
                after:absolute after:right-0 after:top-0 after:h-full after:w-0 after:duration-500
                hover:before:w-2/4 hover:before:bg-[#14243d]
                hover:after:w-2/4 hover:after:bg-[#14243d]
                 hover:text-[#e6edf8]
                rounded-full flex items-center justify-center text-sm font-medium
                ${
                  isSubscribed
                    ? 'bg-green-600 cursor-not-allowed text-white'
                    : 'bg-[#3574b8] text-[#e6edf8]'
                }`}
            >
              <span className="relative z-10">
                {isSubscribed ? 'Subscribed!' : 'Subscribe'}
              </span>
            </button>
          </div>
        </div>

        <p className="mt-4 text-sm text-white opacity-80">
          You can unsubscribe at any time.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;
