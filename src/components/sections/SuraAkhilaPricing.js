import React from 'react';
import { Button } from '@/components/ui/button';

const PRICING_PACKAGES = [
  {
    id: 'pkg-1',
    title: 'Gold Package',
    price: '$250',
    description: 'The ultimate luxury experience for a full day of pampering.',
    features: ['Luxury Facial', 'Signature Hair Spa', 'Classic Mani-Pedi', 'Champagne & Refreshments'],
  },
  {
    id: 'pkg-2',
    title: 'Silver Package',
    price: '$180',
    description: 'A half-day retreat for beauty and relaxation.',
    features: ['Luxury Facial', 'Signature Hair Spa'],
  },
  {
    id: 'pkg-3',
    title: 'Bronze Package',
    price: '$120',
    description: 'Essential treatments for a quick refresh.',
    features: ['Classic Mani-Pedi'],
  },
];

export default function MySalonPricing() {
  const handleBook = (e) => {
    e.preventDefault();
    const bookingSection = document.getElementById('section-booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="section-pricing"
      className="py-20 px-6 bg-gradient-to-br from-yellow-50 via-pink-50 to-white dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900"
      style={{ fontFamily: "'Poppins', sans-serif", letterSpacing: '0.02em' }}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-center text-gradient-pink drop-shadow-xl">
          Pricing &amp; Packages
        </h2>
        <p className="text-xl text-center text-neutral-700 dark:text-neutral-300 mb-10 tracking-wide font-medium max-w-3xl mx-auto">
          Choose the perfect package for you.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 px-4 md:px-0 justify-items-center">
          {PRICING_PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className="premium-card p-8 flex flex-col items-center text-center rounded-3xl border border-yellow-200 dark:border-yellow-800 shadow-sm hover:shadow-lg hover:scale-[1.07] transition-transform duration-300 cursor-pointer bg-gradient-to-tr from-yellow-50 via-pink-50 to-white dark:from-neutral-800 dark:via-neutral-900 dark:to-neutral-800 max-w-xs w-full"
            >
              {/* Title */}
              <h3 className="text-3xl font-extrabold mb-3 text-pink-600 drop-shadow-md tracking-wide uppercase tracking-wider">
                {pkg.title}
              </h3>

              {/* Price Badge */}
              <div className="text-3xl font-bold text-yellow-600 mb-4 drop-shadow-sm">
                {pkg.price}
              </div>

              {/* Description */}
              <p className="text-neutral-700 dark:text-neutral-300 mb-8 font-medium max-w-xs leading-relaxed tracking-wide border-b border-yellow-300 dark:border-yellow-700 pb-6">
                {pkg.description}
              </p>

              {/* Features */}
              <ul className="mb-8 text-left max-w-xs mx-auto space-y-3">
                {pkg.features.map((f, i) => (
                  <li
                    key={i}
                    className="flex items-center text-yellow-700 dark:text-yellow-400 font-semibold tracking-tight"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 mr-2 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              {/* Book Button */}
              <Button
                onClick={handleBook}
                className="mt-auto px-10 py-3 rounded-full bg-gradient-to-r from-yellow-400 via-pink-500 to-red-500 text-white font-semibold shadow-lg hover:scale-105 hover:brightness-110 transition-transform duration-300"
              >
                Book Now
              </Button>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .text-gradient-pink {
          background: linear-gradient(90deg, #f43f5e, #facc15, #ec4899);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .premium-card {
          box-shadow: 0 4px 8px rgba(244, 63, 94, 0.12),
            0 2px 6px rgba(250, 204, 21, 0.08), 0 1px 3px rgba(236, 72, 153, 0.1);
          background: linear-gradient(145deg, #fffaf5, #ffeef5);
          backdrop-filter: saturate(180%) blur(10px);
          border-radius: 24px;
          border: 1px solid rgba(250, 204, 21, 0.15);
          transition: all 0.3s ease;
          width: 100%;
          max-width: 320px;
          min-height: 520px;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
        }
        .premium-card:hover {
          box-shadow: 0 12px 24px rgba(244, 63, 94, 0.3),
            0 10px 20px rgba(250, 204, 21, 0.25), 0 8px 16px rgba(236, 72, 153, 0.28);
          transform: translateY(-6px) scale(1.07);
          border-color: #f43f5e;
          background: linear-gradient(145deg, #fff0f5, #ffe0eb);
        }
      
      `}</style>
    </section>
  );
}
