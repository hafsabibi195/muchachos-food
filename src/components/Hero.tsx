'use client';

import Link from 'next/link';
import Image from 'next/image';

interface HeroProps {
  scrollToMenu: () => void;
}

export default function Hero({ scrollToMenu }: HeroProps) {
  return (
    <section className="relative h-[calc(100vh-64px)] min-h-[600px] w-full bg-white">
      {/* Content */}
      <div className="relative h-full">
        <div className="container mx-auto px-4 h-full">
          <div className="flex flex-col justify-center items-center h-full text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in text-gray-900">
              Authentic Mexican Cuisine
              <br />
              <span className="text-[#FF0000]">Delivered to You</span>
            </h1>
            
            <p className="text-lg md:text-xl mb-2 max-w-2xl animate-fade-in-up text-gray-600">
              Experience the rich flavors of Mexico with our handcrafted dishes,
              <br className="hidden md:block" />
              made from fresh, locally-sourced ingredients.
            </p>

            <p className="text-lg md:text-xl mb-8 max-w-2xl animate-fade-in-up text-gray-600 flex items-center justify-center gap-2">
              <svg
                className="w-6 h-6 text-[#FF0000]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              Deliver to <span className="text-[#FF0000] font-semibold">Islamabad G8 Markaz</span>
            </p>

            <div className="flex flex-col md:flex-row gap-4 animate-fade-in-up mb-24">
              <button
                onClick={scrollToMenu}
                className="bg-[#FF0000] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#CC0000] transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-[#FF0000]/30"
              >
                Order Now
              </button>
              <button
                onClick={scrollToMenu}
                className="bg-[#FF0000]/10 backdrop-blur-sm text-[#FF0000] border-2 border-[#FF0000] px-8 py-3 rounded-full font-semibold hover:bg-[#FF0000]/20 transform hover:scale-105 transition-all duration-300"
              >
                View Menu
              </button>
            </div>

            {/* Features */}
            <div className="absolute bottom-8 left-0 right-0 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                  <div className="bg-white shadow-lg rounded-xl p-6 border border-gray-100 hover:border-[#FF0000]/50 transition-colors duration-300">
                    <div className="text-[#FF0000] mb-4">
                      <svg
                        className="w-8 h-8 mx-auto"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <h3 className="font-semibold mb-2 text-gray-900">Fresh Ingredients</h3>
                    <p className="text-sm text-gray-600">Locally sourced</p>
                  </div>
                  <div className="bg-white shadow-lg rounded-xl p-6 border border-gray-100 hover:border-[#FF0000]/50 transition-colors duration-300">
                    <div className="text-[#FF0000] mb-4">
                      <svg
                        className="w-8 h-8 mx-auto"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <h3 className="font-semibold mb-2 text-gray-900">Best Prices</h3>
                    <p className="text-sm text-gray-600">Value for money</p>
                  </div>
                  <div className="bg-white shadow-lg rounded-xl p-6 border border-gray-100 hover:border-[#FF0000]/50 transition-colors duration-300">
                    <div className="text-[#FF0000] mb-4">
                      <svg
                        className="w-8 h-8 mx-auto"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                    <h3 className="font-semibold mb-2 text-gray-900">Fast Delivery</h3>
                    <p className="text-sm text-gray-600">30 mins or less</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
              <svg
                className="w-6 h-6 text-[#FF0000]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
