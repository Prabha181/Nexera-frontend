import { useRef, useState } from "react";

const testimonials = [
  {
    name: "Maharan Depaak",
    position: "CEO, Amaban",
    image: "/src/assets/testimonial-1.png",
    quote:
      "Recently I went through their recruitment process with Jobaway Company, and I was impressed by how smooth and efficient these were.",
  },
  {
    name: "Evan Clement",
    position: "HR Assistant, NFL",
    image: "/src/assets/testimonial-3.png",
    quote:
      "Company and was impressed by the personalized approach of their recruitment team. They kept me informed at every stage and ensured that I had all the information I needed to succeed.",
  },
  {
    name: "Maharan Depaak",
    position: "CEO, Amaban",
    image: "/src/assets/testimonial-1.png",
    quote:
      "Their process was super fast, and the experience was exceptional. I would definitely recommend them.",
  },
  {
    name: "Evan Clement",
    position: "HR Assistant, NFL",
    image: "/src/assets/testimonial-3.png",
    quote:
      "I felt supported throughout the entire recruitment journey. Great communication and very transparent.",
  },
];

export default function TestimonialSlider() {
  const scrollRef = useRef(null);
  const [current, setCurrent] = useState(0);

  // Calculate scroll based on card width and cards visible at current viewport
  const handleScroll = (index) => {
    const container = scrollRef.current;
    if (!container) return;

    // Responsive card width: On mobile ~80%, tablet ~50%, desktop ~30%
    const containerWidth = container.offsetWidth;
    let cardWidth;

    if (window.innerWidth < 640) {
      // Mobile: show ~1 card fully at a time
      cardWidth = containerWidth * 0.8;
    } else if (window.innerWidth < 1024) {
      // Tablet: ~2 cards visible
      cardWidth = containerWidth / 2;
    } else {
      // Desktop: ~3 cards visible
      cardWidth = containerWidth / 3;
    }

    container.scrollTo({
      left: index * cardWidth,
      behavior: "smooth",
    });
    setCurrent(index);
  };

  return (
    <div className="py-16 bg-gradient-to-b from-white via-green-50 to-white text-center px-4 sm:px-6 lg:px-8">
      <div className="inline-block px-4 py-1 mb-4 rounded-full border border-[#bbf7d0] bg-[#ecfdf5] shadow-sm">
        <span className="text-xs uppercase font-bold tracking-widest text-[#45a735]">
          Testimonials
        </span>
      </div>
      <h2 className="text-3xl font-bold text-gray-800 mb-12">Love From Users</h2>

      <div className="relative w-full max-w-7xl mx-auto">
        <div
          ref={scrollRef}
          className="flex overflow-x-auto scroll-smooth space-x-6 scrollbar-hide px-2"
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[80%] sm:w-[45%] lg:w-[30%] bg-white shadow-md rounded-lg px-6 py-6"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div className="text-left">
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm font-semibold text-gray-500">
                    {testimonial.position}
                  </p>
                </div>
              </div>
              <p className="text-gray-500 text-left relative text-sm font-semibold">
                <span className="text-4xl text-gray-300 absolute -left-4 -top-4 select-none">
                  “
                </span>
                {testimonial.quote}
                <span className="text-4xl text-gray-300 absolute -right-4 -bottom-4 select-none">
                  ”
                </span>
              </p>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-6 space-x-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => handleScroll(index)}
              className={`h-2 w-2 rounded-full transition-transform duration-300 transform ${
                current === index ? "scale-150" : "scale-100"
              }`}
              style={{
                backgroundColor: current === index ? "#78eb54" : "#c6f7bd",
              }}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
