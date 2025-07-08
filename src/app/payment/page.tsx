'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from '@/contexts/CartContext';

export default function PaymentPage() {
  const router = useRouter();
  const { items, total } = useCart();
  const [isLoading, setIsLoading] = useState(false);
  const [addressError, setAddressError] = useState('');

  const [address, setAddress] = useState({
    fullName: '',
    phone: '',
    address: ''
  });

  useEffect(() => {
    if (items.length === 0) {
      router.push('/cart');
    }
  }, [items.length, router]);

  const validateAddress = () => {
    if (!address.fullName.trim()) {
      setAddressError('Full name is required');
      return false;
    }
    if (!address.phone.trim()) {
      setAddressError('Phone number is required');
      return false;
    }
    if (!address.address.trim()) {
      setAddressError('Complete address is required');
      return false;
    }
    setAddressError('');
    return true;
  };

  const handlePayment = async () => {
    if (!validateAddress()) {
      const errorElement = document.querySelector('.text-red-500');
      if (errorElement) {
        errorElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }

    setIsLoading(true);
    try {
      const deliveryInfo = {
        ...address,
        paymentMethod: 'cash'
      };

      console.log('Delivery Info:', deliveryInfo);
      router.push('/checkout?method=cash');
    } catch (error) {
      console.error('Payment error:', error);
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-64px)] pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-2xl">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Delivery Details
        </h1>

        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md mb-8">
          {/* Delivery Address */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Delivery Address
            </h2>
            {addressError && (
              <div className="text-red-500 text-sm mb-4">
                {addressError}
              </div>
            )}

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  value={address.fullName}
                  onChange={(e) => setAddress({ ...address, fullName: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-orange-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={address.phone}
                  onChange={(e) => setAddress({ ...address, phone: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-orange-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Complete Address
                </label>
                <textarea
                  value={address.address}
                  onChange={(e) => setAddress({ ...address, address: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-orange-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  placeholder="Enter your complete address"
                  rows={3}
                />
              </div>
            </div>
          </div>

          {/* Payment Option */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Payment Option
            </h2>
            <div className="p-4 rounded-lg border-2 border-orange-500 bg-orange-50 dark:bg-orange-900/20 cursor-default">
              <div className="flex items-center gap-3">
                <svg
                  className="w-6 h-6 text-orange-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">
                    Cash on Delivery
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Pay with cash when your order arrives
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Order Summary
          </h2>
          <div className="space-y-4 mb-6">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center py-2 border-b border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center gap-4">
                  <span className="text-gray-600 dark:text-gray-300">{item.quantity}x</span>
                  <span className="text-gray-900 dark:text-white">{item.name}</span>
                </div>
                <span className="text-gray-900 dark:text-white font-medium">
                  Rs {item.price * item.quantity}
                </span>
              </div>
            ))}
          </div>

          {/* Total */}
          <div className="space-y-2 mb-6">
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

          {/* Place Order Button */}
          <button
            onClick={handlePayment}
            disabled={isLoading}
            className="w-full bg-orange-600 text-white py-3 rounded-full font-semibold hover:bg-orange-700 transition-colors disabled:bg-orange-400 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Processing...' : 'Place Order'}
          </button>
        </div>
      </div>
    </div>
  );
}
