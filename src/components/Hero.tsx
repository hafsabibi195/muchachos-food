'use client';

interface HeroProps {
  scrollToMenu: () => void;
}

export default function Hero({ scrollToMenu }: HeroProps) {
  return (
    <section className="relative h-[calc(100vh-64px)] min-h-[600px] sm:min-h-[700px] w-full bg-amber-50 dark:bg-amber-900/20">
      <div className="relative h-full">
        <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center text-center space-y-6 sm:space-y-8">
          {/* Heading */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold animate-fade-in text-amber-900 dark:text-amber-100">
            Authentic Mexican Cuisine
            <br />
            <span className="text-amber-600 dark:text-amber-400">Delivered to You</span>
          </h1>

          {/* Location */}
          <p className="flex items-center justify-center gap-2 text-sm sm:text-base text-amber-800/80 dark:text-amber-200/80">
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6 text-amber-600 dark:text-amber-400"
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
            Deliver to <span className="text-amber-600 dark:text-amber-400 font-semibold">Islamabad G8 Markaz</span>
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
            <button
              onClick={scrollToMenu}
              className="bg-amber-600 text-white px-6 py-2 text-sm sm:text-base rounded-full font-semibold hover:bg-amber-700 transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-amber-600/30"
            >
              Order Now
            </button>
            <button
              onClick={scrollToMenu}
              className="bg-amber-100 dark:bg-amber-800/30 text-amber-600 dark:text-amber-400 border border-amber-600 dark:border-amber-400 px-6 py-2 text-sm sm:text-base rounded-full font-semibold hover:bg-amber-200 dark:hover:bg-amber-700/30 transform hover:scale-105 transition-all duration-300"
            >
              View Menu
            </button>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-10 md:mt-16 px-4 w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {/* Feature 1 */}
            <div className="bg-white dark:bg-amber-900/30 shadow rounded-lg p-4 border border-amber-100 dark:border-amber-800/30 text-center">
              <div className="text-amber-600 dark:text-amber-400 mb-2">
                <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-sm sm:text-base font-semibold text-amber-900 dark:text-amber-100 mb-1">Fresh Ingredients</h3>
              <p className="text-xs sm:text-sm text-amber-800/80 dark:text-amber-200/80">Locally sourced</p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white dark:bg-amber-900/30 shadow rounded-lg p-4 border border-amber-100 dark:border-amber-800/30 text-center">
              <div className="text-amber-600 dark:text-amber-400 mb-2">
                <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-sm sm:text-base font-semibold text-amber-900 dark:text-amber-100 mb-1">Best Prices</h3>
              <p className="text-xs sm:text-sm text-amber-800/80 dark:text-amber-200/80">Value for money</p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white dark:bg-amber-900/30 shadow rounded-lg p-4 border border-amber-100 dark:border-amber-800/30 text-center">
              <div className="text-amber-600 dark:text-amber-400 mb-2">
                <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-sm sm:text-base font-semibold text-amber-900 dark:text-amber-100 mb-1">Fast Delivery</h3>
              <p className="text-xs sm:text-sm text-amber-800/80 dark:text-amber-200/80">30 mins or less</p>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-6 flex justify-center md:hidden">
          <svg className="w-6 h-6 text-amber-600 dark:text-amber-400 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
