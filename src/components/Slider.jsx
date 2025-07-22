import { useRef, useState, useEffect } from "react";

// Mock testimonial images - replace with your actual images
const testimonial1 = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face";
const testimonial3 = "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face";

const testimonials = [
  {
    name: "Maharan Depaak",
    position: "CEO, Amaban",
    image: testimonial1,
    quote:
      "Recently I went through their recruitment process with Jobaway Company, and I was impressed by how smooth and efficient these were.",
  },
  {
    name: "Evan Clement",
    position: "HR Assistant, NFL",
    image: testimonial3,
    quote:
      "Company and was impressed by the personalized approach of their recruitment team. They kept me informed at every stage and ensured that I had all the information I needed to succeed.",
  },
  {
    name: "Maharan Depaak",
    position: "CEO, Amaban",
    image: testimonial1,
    quote:
      "Their process was super fast, and the experience was exceptional. I would definitely recommend them.",
  },
  {
    name: "Evan Clement",
    position: "HR Assistant, NFL",
    image: testimonial3,
    quote:
      "I felt supported throughout the entire recruitment journey. Great communication and very transparent.",
  },
];

export default function TestimonialSlider() {
  const scrollRef = useRef(null);
  const [current, setCurrent] = useState(0);

  // Scroll to a specific card
  const goToIndex = (i) => {
    const container = scrollRef.current;
    if (!container) return;
    
    const card = container.querySelector(".testimonial-card");
    if (!card) return;
    
    const cardWidth = card.offsetWidth;
    const gap = 16; // 1rem = 16px
    const scrollPosition = i * (cardWidth + gap);
    
    container.scrollTo({ left: scrollPosition, behavior: "smooth" });
    setCurrent(i);
  };

  // Update current index on manual scroll
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const onScroll = () => {
      const card = container.querySelector(".testimonial-card");
      if (!card) return;
      
      const cardWidth = card.offsetWidth;
      const gap = 16;
      const scrollLeft = container.scrollLeft;
      const idx = Math.round(scrollLeft / (cardWidth + gap));
      setCurrent(Math.min(Math.max(idx, 0), testimonials.length - 1));
    };

    container.addEventListener("scroll", onScroll);
    return () => container.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="py-16 bg-gradient-to-b from-white via-blue-50 to-white text-center">
      {/* Header */}
      <div className="inline-block px-4 py-1 mb-4 rounded-full border border-[#3574b8] bg-[#e6edf8] shadow-sm">
        <span className="text-xs uppercase font-bold tracking-widest text-[#3574b8]">
          Testimonials
        </span>
      </div>
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-12">
        Love From Users
      </h2>

      {/* Testimonials Container */}
      <div className="relative">
        <div
          ref={scrollRef}
          className="flex overflow-x-auto gap-4 px-4 sm:px-6 lg:px-12 pb-4"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch'
          }}
        >
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="testimonial-card flex-shrink-0 w-80 sm:w-96 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6"
            >
              <div className="flex items-center mb-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div className="text-left">
                  <p className="font-bold text-gray-900">{t.name}</p>
                  <p className="text-sm font-semibold text-gray-500">
                    {t.position}
                  </p>
                </div>
              </div>
              <div className="relative">
                <span className="absolute -left-2 -top-2 text-4xl text-gray-300 select-none">
                  "
                </span>
                <p className="text-gray-500 text-left text-sm font-medium pl-4 pr-4">
                  {t.quote}
                </p>
                <span className="absolute -right-2 -bottom-2 text-4xl text-gray-300 select-none">
                  "
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Hide default scrollbar */}
        <style jsx>{`
          div::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </div>

      {/* Pagination dots */}
      <div className="flex justify-center mt-6 space-x-3">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToIndex(idx)}
            className={`h-2 w-2 rounded-full transition-transform duration-300 ${
              current === idx ? "scale-150 bg-[#3574b8]" : "bg-[#e6edf8]"
            }`}
          />
        ))}
      </div>
    </div>
  );
}