'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative h-[calc(100vh-64px)] min-h-[600px] w-full">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
          alt="Mexican Food"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative h-full">
        <div className="container mx-auto px-4 h-full">
          <div className="flex flex-col justify-center items-center h-full text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
              Authentic Mexican Cuisine
              <br />
              <span className="text-orange-400">Delivered to You</span>
            </h1>
            
            <p className="text-lg md:text-xl mb-8 max-w-2xl animate-fade-in-up opacity-90">
              Experience the rich flavors of Mexico with our handcrafted dishes,
              <br className="hidden md:block" />
              made from fresh, locally-sourced ingredients.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up">
              <Link
                href="/menu"
                className="bg-orange-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-orange-600/30"
              >
                Order Now
              </Link>
              <Link
                href="/menu"
                className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-3 rounded-full font-semibold hover:bg-white/20 transform hover:scale-105 transition-all duration-300"
              >
                View Menu
              </Link>
            </div>

            {/* Features */}
            <div className="absolute bottom-8 left-0 right-0 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 max-w-5xl mx-auto">
                  <div className="bg-black/30 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-orange-500/50 transition-colors duration-300">
                    <div className="text-orange-400 mb-2">
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
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <h3 className="font-semibold">Fast Delivery</h3>
                    <p className="text-sm text-gray-200">30 mins or free</p>
                  </div>
                  <div className="bg-black/30 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-orange-500/50 transition-colors duration-300">
                    <div className="text-orange-400 mb-2">
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
                    <h3 className="font-semibold">Fresh Ingredients</h3>
                    <p className="text-sm text-gray-200">Locally sourced</p>
                  </div>
                  <div className="bg-black/30 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-orange-500/50 transition-colors duration-300">
                    <div className="text-orange-400 mb-2">
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
                    <h3 className="font-semibold">Best Prices</h3>
                    <p className="text-sm text-gray-200">Value for money</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
              <svg
                className="w-6 h-6 text-white/50"
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
