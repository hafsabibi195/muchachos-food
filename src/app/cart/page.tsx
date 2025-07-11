'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useCart } from '@/contexts/CartContext';
import { useEffect } from 'react';

export default function CartPage() {
  const { items, total, updateQuantity, removeItem } = useCart();
  const router = useRouter();

  useEffect(() => {
    return () => {};
  }, []);

  const handleCheckout = async () => {
    try {
      await router.push('/payment');
    } catch (error) {
      console.error('Navigation error:', error);
    }
  };

  const handleQuantityUpdate = (id: string, newQuantity: number) => {
    if (newQuantity >= 0) {
      updateQuantity(id, newQuantity);
    }
  };

  const handleRemoveItem = (id: string) => {
    removeItem(id);
  };

  if (items.length === 0) {
    return (
      <div className="min-h-[calc(100vh-64px)] flex flex-col items-center justify-center px-4">
        <div className="text-center">
          <svg
            className="w-24 h-24 mx-auto text-gray-400 dark:text-gray-600 mb-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Your cart is empty
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Looks like you haven&apos;t added any items to your cart yet.
          </p>
          <Link
            href="/#menu-section"
            className="inline-block bg-orange-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-700 transition-colors"
          >
            Browse Menu
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-64px)] pt-24 pb-16 px-4">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Shopping Cart
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div
                key={`cart-item-${item.id}`}
                className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm flex gap-4"
              >
                <div className="relative w-24 h-24 flex-shrink-0">
                  {item.imageUrl && (
                    <Image
                      src={item.imageUrl}
                      alt={item.name || 'Product image'}
                      fill
                      className="object-cover rounded-lg"
                    />
                  )}
                </div>
                <div className="flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {item.name || 'Unnamed product'}
                    </h3>
                    <button
                      type="button"
                      onClick={() => handleRemoveItem(item.id)}
                      className="text-gray-400 hover:text-red-500 transition-colors"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() =>
                          handleQuantityUpdate(item.id, (item.quantity || 1) - 1)
                        }
                        className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                      >
                        -
                      </button>
                      <span className="w-8 text-center text-gray-900 dark:text-white">
                        {item.quantity || 0}
                      </span>
                      <button
                        type="button"
                        onClick={() =>
                          handleQuantityUpdate(item.id, (item.quantity || 1) + 1)
                        }
                        className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                      >
                        +
                      </button>
                    </div>
                    <span className="font-semibold text-gray-900 dark:text-white">
                      Rs {(item.price || 0) * (item.quantity || 1)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm sticky top-24">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Order Summary
              </h2>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-gray-600 dark:text-gray-400">
                  <span>Subtotal</span>
                  <span>Rs {total}</span>
                </div>
                <div className="flex justify-between text-gray-600 dark:text-gray-400">
                  <span>Delivery Fee</span>
                  <span>Rs 100</span>
                </div>
                <div className="border-t border-gray-200 dark:border-gray-700 pt-2 mt-2">
                  <div className="flex justify-between font-semibold text-gray-900 dark:text-white">
                    <span>Total</span>
                    <span>Rs {total + 100}</span>
                  </div>
                </div>
              </div>
              <button
                onClick={handleCheckout}
                className="w-full bg-orange-600 text-white py-3 rounded-full font-semibold hover:bg-orange-700 transition-colors"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
