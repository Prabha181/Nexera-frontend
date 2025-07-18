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
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative z-10 max-w-3xl mx-auto text-center text-white">
        <h2 className="text-2xl sm:text-4xl font-bold mb-6">Subscribe Newsletter</h2>

        <div className="mb-6 px-4">
  <div className="flex flex-wrap items-center bg-white rounded-full shadow-lg overflow-hidden max-w-md w-full mx-auto gap-2 p-2">
    {/* Mail Icon */}
    <div className="flex items-center pl-2 pr-1">
      <Mail className="w-5 h-5 text-gray-400" />
    </div>

    {/* Email Input */}
    <input
      type="email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      placeholder="Email Address"
      className="flex-1 min-w-[150px] px-3 py-3 text-gray-900 placeholder-gray-400 focus:outline-none bg-transparent text-sm"
    />

    {/* Subscribe Button */}
    
    <button
  onClick={handleSubmit}
  disabled={isSubscribed}
  className={`relative h-[42px] px-6 transition-all rounded-full shadow-md text-sm font-medium flex items-center justify-center overflow-hidden
    before:absolute before:left-0 before:top-0 before:h-full before:w-0 before:bg-[#14243d] before:transition-all before:duration-500
    after:absolute after:right-0 after:top-0 after:h-full after:w-0 after:bg-[#14243d] after:transition-all after:duration-500
    hover:before:w-2/4 hover:after:w-2/4 hover:text-[#e6edf8]
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
