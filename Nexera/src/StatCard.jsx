import React from 'react';
import { useCountUp } from 'use-count-up';

const stats = [
  { label: 'Freelance Workers', end: 12, suffix: 'k' },
  { label: 'Jobs Fulfillment Rate', end: 95, suffix: '%' },
  { label: 'Jobs Filled', end: 12, suffix: 'k+' },
  { label: 'Satisfied Businesses', end: 825, suffix: '+' }
];

function StatItem({ end, suffix, label }) {
  const { value } = useCountUp({
    isCounting: true,
    end,
    duration: 2.5,
    thousandsSeparator: ','
  });

  return (
    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
        {value}
        {suffix}
      </h2>
      <p className="text-gray-400 text-sm sm:text-base font-medium">{label}</p>
    </div>
  );
}

export default function StatCard() {
  return (
    <div className="w-full bg-white py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto 
                      grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {stats.map((stat, index) => (
          <StatItem key={index} {...stat} />
        ))}
      </div>
    </div>
  );
}
