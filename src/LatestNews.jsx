import React from 'react';
import newsImg1 from './assets/news-1.jpg';
import newsImg2 from './assets/news-2.jpg';
import newsImg3 from './assets/news-3.jpg';

const LatestNews = () => {
  const newsData = [
    {
      id: 1,
      date: 'March 20, 2023',
      title: 'Create a series of blog posts discussing common interview',
      image: newsImg1,
    },
    {
      id: 2,
      date: 'March 19, 2023',
      title: 'Explore the concept of personal branding and its impact on',
      image: newsImg2,
    },
    {
      id: 3,
      date: 'March 18, 2023',
      title: 'Feature interviews with employees from top companies',
      image: newsImg3,
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-block px-4 py-1 mb-4 rounded-full border border-[#3574b8] bg-[#e6edf8] shadow-sm">
          <span className="text-xs uppercase font-bold tracking-widest text-[#3574b8]">
            Media
          </span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-10">Latest News</h2>

        {/* ✅ Style tag for CSS animation */}
        <style>
          {`
            .fade-out-down {
              transition: all 0.5s ease-in-out;
            }

            .fade-out-down:hover {
              transform: translateY(20px);
              opacity: 0.5;
            }
          `}
        </style>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 px-0 pb-10">
          {newsData.map((news) => (
            <div
              key={news.id}
              className="relative overflow-hidden rounded-xl shadow-md bg-white w-[325px] h-[225px] fade-out-down"
            >
              <img
                src={news.image}
                alt={news.title}
                className="w-full h-full object-cover transition duration-300 ease-in-out hover:brightness-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-3 rounded-xl z-10">
                <div className="text-left text-white">
                  <span className="text-xs text-gray-100 font-semibold">{news.date}</span>
                  <h3 className="text-[18px] font-semibold mt-1 leading-snug pb-0.5">
                    {news.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
