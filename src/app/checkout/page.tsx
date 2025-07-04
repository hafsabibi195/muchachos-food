'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { useCart } from '@/contexts/CartContext';

export default function CheckoutPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { items, clearCart } = useCart();
  const [isCleared, setIsCleared] = useState(false);
  const paymentMethod = searchParams.get('method') || 'card';

  useEffect(() => {
    if (items.length === 0 && !isCleared) {
      router.push('/cart');
      return;
    }

    if (!isCleared && items.length > 0) {
      const timer = setTimeout(() => {
        clearCart();
        setIsCleared(true);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [items.length, router, clearCart, isCleared]);

  return (
    <div className="min-h-[calc(100vh-64px)] flex flex-col items-center justify-center px-4 pt-16">
      <div className="text-center max-w-xl mx-auto">
        <div className="mb-8 transform transition-all duration-700 animate-bounce">
          <svg
            className="w-24 h-24 text-green-500 mx-auto"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>

        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
          Order Confirmed!
        </h1>

        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
          {paymentMethod === 'cash'
            ? 'Thank you for your order! Please have the payment ready when your delicious meal arrives.'
            : 'Thank you for your order! Your payment has been processed successfully.'}
        </p>

        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Delivery Information
          </h2>
          <div className="text-left mb-6">
            <p className="text-gray-600 dark:text-gray-400 mb-2">
              Your order will be delivered to your location in Islamabad.
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              Our delivery partner will contact you on your provided phone number when they&apos;re nearby.
            </p>
          </div>

          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            Estimated Delivery Time
          </h3>
          <p className="text-3xl font-bold text-green-500 mb-4">
            30-45 minutes
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            {paymentMethod === 'cash'
              ? 'Have your cash ready for payment upon delivery.'
              : 'We&apos;ll send you an email with your order details and tracking information.'}
          </p>
        </div>

        <Link
          href="/"
          className="inline-block bg-black text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
}
