'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { useCart } from '@/contexts/CartContext';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const { items } = useCart();

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  const scrollToMenu = () => {
    const menuSection = document.getElementById('menu-section');
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { href: '/', label: 'Home', action: undefined },
    { label: 'Menu', action: scrollToMenu }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActivePath = (path: string) => pathname === path;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-yellow-400/90 dark:bg-yellow-500/90 backdrop-blur-md shadow-lg'
          : 'bg-yellow-400 dark:bg-yellow-500'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="relative w-12 h-12">
              <Image
                src="/dummy-logo.svg"
                alt="Muchachos Food"
                fill
                className="object-contain"
              />
            </div>
            <span className={`text-2xl font-bold transition-colors duration-300 ${
              isScrolled
                ? 'text-gray-800 dark:text-white'
                : 'text-gray-800 dark:text-white'
            }`}>
              Muchachos
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(({ href, label, action }) => 
              action ? (
                <button
                  key={label}
                  onClick={action}
                  className={`text-sm font-medium transition-all duration-300 ${
                    isScrolled
                      ? 'text-gray-600 dark:text-gray-200 hover:text-orange-500 dark:hover:text-orange-500'
                      : 'text-gray-800 dark:text-gray-200 hover:text-orange-500 dark:hover:text-orange-500'
                  }`}
                >
                  {label}
                </button>
              ) : (
                <Link
                  key={href}
                  href={href!}
                  className={`text-sm font-medium transition-all duration-300 ${
                    isActivePath(href!)
                      ? isScrolled
                        ? 'text-orange-500 dark:text-orange-500'
                        : 'text-orange-500 dark:text-orange-500'
                      : isScrolled
                      ? 'text-gray-600 dark:text-gray-200 hover:text-orange-500 dark:hover:text-orange-500'
                      : 'text-gray-800 dark:text-gray-200 hover:text-orange-500 dark:hover:text-orange-500'
                  }`}
                >
                  {label}
                </Link>
              )
            )}
            <Link
              href="/cart"
              className={`relative px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                isScrolled
                  ? 'bg-[#FF0000] text-white hover:bg-[#CC0000]'
                  : 'bg-[#FF0000] text-white hover:bg-[#CC0000]'
              }`}
            >
              <span className="flex items-center gap-2">
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
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                Cart
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <Link
              href="/cart"
              className={`relative p-2 rounded-lg transition-colors duration-300 ${
                isScrolled
                  ? 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700'
                  : 'text-white hover:bg-white/10'
              }`}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-lg transition-colors duration-300 ${
                isScrolled
                  ? 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700'
                  : 'text-white hover:bg-white/10'
              }`}
            >
              <span className="sr-only">Open menu</span>
              {isMobileMenuOpen ? (
                <svg
                  className="h-6 w-6"
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
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen ? 'max-h-64' : 'max-h-0'
          }`}
        >
          <div className="py-4 space-y-3">
            {navLinks.map(({ href, label, action }) => 
              action ? (
                <button
                  key={label}
                  onClick={action}
                  className={`block w-full text-left px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-300 ${
                    isScrolled
                      ? 'text-gray-600 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800'
                      : 'text-white hover:bg-white/10'
                  }`}
                >
                  {label}
                </button>
              ) : (
                <Link
                  key={href}
                  href={href!}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-300 ${
                    isActivePath(href!)
                      ? 'text-gray-800 dark:text-[#FF0000] bg-gray-100 dark:bg-gray-800'
                      : isScrolled
                      ? 'text-gray-600 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800'
                      : 'text-white hover:bg-white/10'
                  }`}
                >
                  {label}
                </Link>
              )
            )}
          </div>
        </div>
      </div>
    </nav>
  );
} 