import React from 'react';

const LatestNews = () => {
  const newsData = [
    {
      id: 1,
      date: "March 20, 2023",
      title: "Create a series of blog posts discussing common interview",
      image: "/src/assets/news-1.jpg",
    },
    {
      id: 2,
      date: "March 19, 2023",
      title: "Explore the concept of personal branding and its impact on",
      image: "/src/assets/news-2.jpg",
    },
    {
      id: 3,
      date: "March 18, 2023",
      title: "Feature interviews with employees from top companies",
      image: "/src/assets/news-3.jpg",
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Pill-shaped "Media" label */}
        <div className="inline-block px-4 py-1 mb-4 rounded-full border border-[#bbf7d0] bg-[#ecfdf5] shadow-sm">
          <span className="text-xs uppercase font-bold tracking-widest text-[#45a735]">
            Media
          </span>
        </div>  

        {/* Section heading */}
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-10">
          Latest News
        </h2>

        {/* News Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsData.map((news) => (
            <div
              key={news.id}
              className="relative overflow-hidden rounded-xl shadow-md bg-white"
            >
              <img
                src={news.image}
                alt={news.title}
                className="w-full h-48 sm:h-56 md:h-64 object-cover"
              />
              {/* Overlay always visible with gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end rounded-xl p-4">
                <div className="text-left text-white">
                  <span className="text-xs text-gray-300">{news.date}</span>
                  <h3 className="text-base sm:text-lg font-semibold mt-1 leading-snug">
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
